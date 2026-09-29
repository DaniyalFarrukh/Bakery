"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { lang, t } = useLanguage();
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-pistachio-deep text-malai pt-16 pb-8 border-t border-varq-silver/20 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Socials */}
          <div className="flex flex-col items-start">
            <div className="flex flex-col group mb-6 items-start">
              <span className="font-serif text-3xl font-bold text-malai leading-none mb-2">
                {siteConfig.shopNameEn}
              </span>
              <span className="font-urdu text-2xl text-saffron">
                {siteConfig.shopNameUr}
              </span>
            </div>
            <p className="text-malai/80 max-w-xs mb-6">
              {lang === "ur" ? siteConfig.taglineUr : siteConfig.tagline}
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-malai/10 rounded-full hover:bg-saffron hover:text-ink transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-malai/10 rounded-full hover:bg-saffron hover:text-ink transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-saffron mb-6">{t.footer.explore}</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#sweets" className="text-malai/80 hover:text-malai transition-colors">
                {t.nav.sweets}
              </Link>
              <Link href="#gifting" className="text-malai/80 hover:text-malai transition-colors">
                {t.nav.gifting}
              </Link>
              <Link href="#story" className="text-malai/80 hover:text-malai transition-colors">
                {t.nav.story}
              </Link>
              <Link href="#visit" className="text-malai/80 hover:text-malai transition-colors">
                {t.nav.visit}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg text-saffron mb-6">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-malai/80">
                <MapPin className="w-5 h-5 text-saffron shrink-0" />
                <span>{lang === "ur" ? siteConfig.addressUr : siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3 text-malai/80">
                <Phone className="w-5 h-5 text-saffron shrink-0" />
                <span dir="ltr">{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-malai/80">
                <Clock className="w-5 h-5 text-saffron shrink-0" />
                <span>{lang === "ur" ? siteConfig.hoursTextUr : siteConfig.hoursText}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-malai/20 flex flex-col md:flex-row items-center justify-between text-sm text-malai/60">
          <p>© {year} {siteConfig.shopNameEn}. {t.footer.rights}</p>
          <p className="mt-2 md:mt-0">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
