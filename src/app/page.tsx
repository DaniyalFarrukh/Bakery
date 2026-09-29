"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SweetsMenu } from "@/components/SweetsMenu";
import { HeroCarousel } from "@/components/HeroCarousel";
import { useLanguage } from "@/components/LanguageContext";
import { BadgeCheck, Leaf, Gift, MapPin } from "lucide-react";

export default function Home() {
  const { t, lang } = useLanguage();
  return (
    <>
      {/* 2. Hero */}
      <HeroCarousel />

      {/* 3. Trust Strip */}
      <section className="bg-pistachio-deep text-malai py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <BadgeCheck className="w-8 h-8 text-saffron mb-3" />
              <span className="font-medium">{siteConfig.trustStrip[0]}</span>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="w-8 h-8 text-saffron mb-3" />
              <span className="font-medium">{siteConfig.trustStrip[1]}</span>
            </div>
            <div className="flex flex-col items-center">
              <Gift className="w-8 h-8 text-saffron mb-3" />
              <span className="font-medium">{siteConfig.trustStrip[2]}</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-saffron mb-3" />
              <span className="font-medium">{siteConfig.trustStrip[3]}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sweets Menu */}
      <SweetsMenu />

      {/* 4. Gifting Band */}
      <section id="gifting" className="relative py-20 md:py-24 bg-saffron text-ink overflow-hidden">
        {/* Subtle patterned background or radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-malai)_0%,_transparent_70%)] opacity-20 mix-blend-overlay pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">{t.gifting.title}</h2>
          <p className="max-w-2xl mx-auto text-lg mb-10 text-ink/80 leading-relaxed px-4">
            {t.gifting.desc}
          </p>
          <a 
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello, I want to inquire about custom gift boxes.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-ink text-saffron font-bold rounded-full hover:bg-ink/90 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
          >
            {t.gifting.cta}
          </a>
        </div>
      </section>

      {/* 5. Our Story */}
      <section id="story" className="py-24 bg-malai">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2 relative aspect-square rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/images/story.jpg" 
                alt="Traditional sweet making" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ink/10 mix-blend-overlay transition-opacity duration-700 group-hover:opacity-0" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-serif text-4xl text-pistachio-deep mb-6">{t.story.title}</h2>
              <div className="text-lg text-ink/80 leading-relaxed whitespace-pre-wrap">
                {lang === "ur" ? siteConfig.storyTextUr : siteConfig.storyText}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How to Order */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-4xl text-pistachio-deep text-center mb-16">{t.howToOrder.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-pistachio-deep text-malai rounded-full flex items-center justify-center font-serif text-2xl mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{t.howToOrder.steps[0].title}</h3>
              <p className="text-ink/70">{t.howToOrder.steps[0].desc}</p>
            </div>
            
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-saffron text-ink rounded-full flex items-center justify-center font-serif text-2xl mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{t.howToOrder.steps[1].title}</h3>
              <p className="text-ink/70">{t.howToOrder.steps[1].desc}</p>
            </div>
            
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-pistachio-deep text-malai rounded-full flex items-center justify-center font-serif text-2xl mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{t.howToOrder.steps[2].title}</h3>
              <p className="text-ink/70">{t.howToOrder.steps[2].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 bg-malai">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-4xl text-pistachio-deep text-center mb-16">{t.testimonials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.testimonials.map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-varq-silver/20 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div className="flex text-saffron mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-ink/80 italic mb-6 leading-relaxed">&ldquo;{lang === "ur" ? test.quoteUr : test.quote}&rdquo;</p>
                <p className="font-bold text-pistachio-deep">— {lang === "ur" ? test.nameUr : test.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Visit Us */}
      <section id="visit" className="py-20 md:py-24 bg-pistachio-deep text-malai">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="font-serif text-4xl md:text-5xl text-saffron mb-8 leading-tight">{t.visit.title}</h2>
              <div className="space-y-6 mb-10 text-lg">
                <p className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <strong className="w-full sm:w-28 shrink-0 text-saffron">{t.visit.address}:</strong>
                  <span>{lang === "ur" ? siteConfig.addressUr : siteConfig.address}</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <strong className="w-full sm:w-28 shrink-0 text-saffron">{t.visit.hours}:</strong>
                  <span>{lang === "ur" ? siteConfig.hoursTextUr : siteConfig.hoursText}</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <strong className="w-full sm:w-28 shrink-0 text-saffron">{t.visit.phone}:</strong>
                  <span dir="ltr">{siteConfig.phone}</span>
                </p>
              </div>
              <a 
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-malai text-pistachio-deep font-bold rounded-full hover:bg-white transition-colors w-full sm:w-auto"
              >
                {t.visit.directions}
              </a>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right">
              <div className="p-8 md:p-10 border border-malai/20 rounded-3xl bg-white/5 inline-block w-full">
                <h3 className="font-serif text-2xl md:text-3xl mb-4">{t.visit.questions}</h3>
                <p className="mb-8 text-malai/80 text-lg leading-relaxed">{t.visit.questionsDesc}</p>
                <a 
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-saffron text-ink font-bold rounded-full hover:opacity-90 transition-opacity w-full"
                >
                  {t.visit.messageWhatsApp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
