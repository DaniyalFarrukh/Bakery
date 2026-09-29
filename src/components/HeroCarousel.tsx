"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const heroImages = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-32 overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Background Images */}
      {heroImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Hero background ${index + 1}`}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/90 z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center">
        {/* Signature Wordmark */}
        <h1 className="font-urdu text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] leading-none mb-6 shimmer-text select-none drop-shadow-lg">
          {siteConfig.shopNameUr}
        </h1>
        
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-malai max-w-4xl mb-6 leading-tight drop-shadow-md">
          {siteConfig.heroHeadline}
        </h2>
        
        <p className="text-lg text-malai/90 font-medium max-w-2xl mb-10 drop-shadow">
          {siteConfig.heroSub}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href="#sweets" 
            className="px-8 py-4 bg-saffron text-ink font-bold rounded-full hover:bg-saffron/90 transition-colors w-full sm:w-auto shadow-lg"
          >
            See our sweets
          </a>
          <a 
            href={`https://wa.me/${siteConfig.whatsappNumber}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-ink/30 backdrop-blur-sm border-2 border-malai/30 text-malai font-semibold rounded-full hover:bg-malai hover:text-ink transition-colors w-full sm:w-auto shadow-lg"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
