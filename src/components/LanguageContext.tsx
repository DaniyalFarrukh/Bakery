"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations } from "@/i18n";

interface LanguageContextType {
  lang: Language;
  t: typeof translations.en;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mehtai-lang");
      if (saved === "en" || saved === "ur") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLang(saved);
      }
    } catch (e) {
      console.error(e);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
      if (lang === "ur") {
        document.documentElement.classList.add("font-urdu");
      } else {
        document.documentElement.classList.remove("font-urdu");
      }
      localStorage.setItem("mehtai-lang", lang);
    }
  }, [lang, mounted]);

  const toggleLang = () => {
    setLang(prev => prev === "en" ? "ur" : "en");
  };

  const t = translations[lang];

  // Render children even if not mounted so SSR works.
  // The effect will update html attributes after hydration.
  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      <div className={mounted && lang === "ur" ? "font-urdu text-right" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
