"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X, Globe } from "lucide-react";
import { useOrder } from "./OrderContext";
import { useLanguage } from "./LanguageContext";
import { siteConfig } from "@/config/site";
import { useState } from "react";

export function Header() {
  const { items, setDrawerOpen } = useOrder();
  const { lang, t, toggleLang } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-malai/95 backdrop-blur-md border-b border-varq-silver/30 shadow-sm">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex flex-col items-center sm:items-start group" onClick={closeMenu}>
          <span className="font-serif text-2xl md:text-3xl font-bold text-pistachio-deep leading-none tracking-tight group-hover:text-saffron transition-colors">
            {siteConfig.shopNameEn}
          </span>
          <span className="font-urdu text-xl text-ink/70 mt-1 sm:mt-2">
            {siteConfig.shopNameUr}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link href="#sweets" className="text-ink/80 hover:text-saffron font-medium text-lg transition-colors">
            {t.nav.sweets}
          </Link>
          <Link href="#gifting" className="text-ink/80 hover:text-saffron font-medium text-lg transition-colors">
            {t.nav.gifting}
          </Link>
          <Link href="#story" className="text-ink/80 hover:text-saffron font-medium text-lg transition-colors">
            {t.nav.story}
          </Link>
          <Link href="#visit" className="text-ink/80 hover:text-saffron font-medium text-lg transition-colors">
            {t.nav.visit}
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-2 text-ink/80 hover:text-saffron transition-colors font-semibold rounded-lg hover:bg-varq-silver/10"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5" />
            <span>{lang === "en" ? "اردو" : "EN"}</span>
          </button>
          
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello, I would like to order...`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-pistachio-deep text-malai font-medium hover:bg-pistachio-deep/90 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            {t.hero.orderWhatsApp}
          </a>

          <button
            onClick={() => setDrawerOpen(true)}
            className="relative p-2 text-pistachio-deep hover:text-saffron hover:bg-saffron/10 rounded-full transition-colors"
            aria-label="Open order list"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-saffron text-ink text-xs font-bold flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1 shadow-sm">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle & Bag */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 p-2 text-ink/80 hover:text-saffron font-semibold"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5" />
            <span>{lang === "en" ? "اردو" : "EN"}</span>
          </button>
          <button
            onClick={() => setDrawerOpen(true)}
            className="relative p-2 text-pistachio-deep"
            aria-label="Open order list"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-saffron text-ink text-xs font-bold flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-pistachio-deep"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-malai border-b border-varq-silver/30 md:hidden flex flex-col p-4 shadow-lg">
          <nav className="flex flex-col space-y-4 mb-6">
            <Link href="#sweets" onClick={closeMenu} className="text-xl font-serif text-ink hover:text-saffron">
              {t.nav.sweets}
            </Link>
            <Link href="#gifting" onClick={closeMenu} className="text-xl font-serif text-ink hover:text-saffron">
              {t.nav.gifting}
            </Link>
            <Link href="#story" onClick={closeMenu} className="text-xl font-serif text-ink hover:text-saffron">
              {t.nav.story}
            </Link>
            <Link href="#visit" onClick={closeMenu} className="text-xl font-serif text-ink hover:text-saffron">
              {t.nav.visit}
            </Link>
          </nav>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello, I would like to order...`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="w-full text-center px-6 py-3 rounded-full bg-pistachio-deep text-malai font-semibold"
          >
            {t.hero.orderWhatsApp}
          </a>
        </div>
      )}
    </header>
  );
}
