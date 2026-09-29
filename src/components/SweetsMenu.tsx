"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, X, Info } from "lucide-react";
import { Product, products } from "@/data/products";
import { useOrder } from "./OrderContext";
import { useLanguage } from "./LanguageContext";
import { siteConfig } from "@/config/site";

const categories = ["All", "milk-based", "dry sweets", "halwa", "fried"];

export function SweetsMenu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { t } = useLanguage();

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="sweets" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-pistachio-deep mb-4">{t.menu.title}</h2>
          <p className="text-ink/70 max-w-2xl mx-auto">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-pistachio-deep text-malai"
                  : "bg-malai border border-varq-silver/40 text-ink hover:border-pistachio-deep hover:text-pistachio-deep"
              }`}
            >
              {cat === "All" ? t.menu.filters.all : (t.menu.filters as Record<string, string>)[cat] || cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.slug} 
              product={product} 
              onOpenModal={() => setSelectedProduct(product)} 
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
}

function ProductCard({ product, onOpenModal }: { product: Product, onOpenModal: () => void }) {
  const { addItem } = useOrder();
  const { lang, t } = useLanguage();
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const activeUnit = product.units[selectedUnitIdx];

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, activeUnit, quantity);
    
    // Reset and show toast
    setQuantity(1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div 
      className="group flex flex-col bg-malai rounded-2xl overflow-hidden border border-varq-silver/20 hover:shadow-lg transition-all cursor-pointer relative"
      onClick={onOpenModal}
    >
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-pistachio-deep text-white px-4 py-2 rounded-full text-sm font-medium shadow-md animate-in fade-in slide-in-from-top-2 duration-300">
          {t.menu.added}
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-varq-silver/20 overflow-hidden">
        {/* Placeholder if image fails or missing */}
        <div className="absolute inset-0 flex items-center justify-center bg-malai">
          <span className="font-urdu text-3xl text-pistachio-deep/20">{product.nameUr}</span>
        </div>
        <Image
          src={product.image}
          alt={product.nameEn}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover relative z-10"
          onError={(e) => {
            // Hide broken image completely, fallback to the placeholder behind it
            (e.target as HTMLElement).style.opacity = '0';
          }}
        />
        {product.badge && (
          <div className="absolute top-3 right-3 z-10 bg-gulab-rose text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {product.badge}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h3 className={`font-serif text-xl text-ink leading-tight ${lang === "ur" ? "hidden" : ""}`}>{product.nameEn}</h3>
          <span className={`font-urdu text-xl text-pistachio-deep ${lang === "en" ? "hidden sm:block" : "text-2xl"}`}>{product.nameUr}</span>
        </div>
        <p className="text-sm text-ink/70 mb-4 line-clamp-2">
          {lang === "ur" ? product.shortDescUr : product.shortDesc}
        </p>

        <div className="mt-auto">
          {/* Unit Chips */}
          <div className="flex gap-2 mb-4" onClick={(e) => e.stopPropagation()}>
            {product.units.map((unit, idx) => (
              <button
                key={unit.label}
                onClick={() => setSelectedUnitIdx(idx)}
                className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                  idx === selectedUnitIdx
                    ? "border-pistachio-deep bg-pistachio-deep text-malai"
                    : "border-varq-silver/50 text-ink/80 hover:border-pistachio-deep"
                }`}
              >
                {unit.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-2" onClick={(e) => e.stopPropagation()}>
            <span className="font-semibold text-lg text-pistachio-deep shrink-0">
              Rs. {activeUnit.price}
            </span>
            
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="flex items-center bg-white border border-varq-silver/40 rounded-full px-2 py-1">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 text-ink/60 hover:text-ink"
                >
                  <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <span className="w-4 sm:w-5 text-center text-sm font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 text-ink/60 hover:text-ink"
                >
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              
              <button 
                onClick={handleAdd}
                className="bg-saffron text-ink font-semibold px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {t.menu.addToOrder}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductModal({ product, onClose }: { product: Product, onClose: () => void }) {
  const { lang, t } = useLanguage();
  
  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const { addItem } = useOrder();
  const [selectedUnitIdx, setSelectedUnitIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const activeUnit = product.units[selectedUnitIdx];

  const handleAdd = () => {
    addItem(product, activeUnit, quantity);
    setQuantity(1);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      onClose();
    }, 1000);
  };

  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hello, I am interested in ordering ${product.nameEn} (${product.nameUr}).`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div 
        className="relative bg-malai w-full max-w-5xl max-h-[90vh] sm:h-[80vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/50 backdrop-blur-md text-ink hover:text-gulab-rose rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image */}
        <div className="relative w-full md:w-2/5 h-64 md:h-auto bg-varq-silver/20 shrink-0">
          <div className="absolute inset-0 flex items-center justify-center bg-malai">
            <span className="font-urdu text-4xl text-pistachio-deep/20">{product.nameUr}</span>
          </div>
          <Image
            src={product.image}
            alt={product.nameEn}
            fill
            className="object-cover relative z-10"
            onError={(e) => {
              (e.target as HTMLElement).style.opacity = '0';
            }}
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 p-6 md:p-12 overflow-y-auto hide-scrollbar flex flex-col">
          <div className="mb-2">
            <span className="uppercase text-xs font-bold tracking-wider text-saffron bg-saffron/10 px-4 py-1.5 rounded-full">
              {product.category.replace("-", " ")}
            </span>
          </div>
          
          <div className="flex flex-col items-start mb-6 mt-2">
            <h2 className="font-serif text-4xl md:text-5xl text-pistachio-deep leading-tight mb-2">
              {lang === "ur" ? product.nameUr : product.nameEn}
            </h2>
            <span className={`font-urdu text-3xl md:text-4xl text-pistachio-deep/60 ${lang === "ur" ? "hidden" : "block"}`}>
              {product.nameUr}
            </span>
            <span className={`font-serif text-2xl text-pistachio-deep/60 ${lang === "en" ? "hidden" : "block"}`}>
              {product.nameEn}
            </span>
          </div>

          <p className="text-lg text-ink/80 leading-relaxed mb-8">
            {lang === "ur" ? product.longDescUr : product.longDesc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-sm">
            <div className="bg-white p-4 rounded-xl border border-varq-silver/20">
              <h4 className="font-semibold text-pistachio-deep mb-2 flex items-center">
                <Info className="w-4 h-4 mr-2" /> {t.menu.ingredients}
              </h4>
              <p className="text-ink/70">{product.ingredients.join(", ")}</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-varq-silver/20">
              <h4 className="font-semibold text-pistachio-deep mb-2 flex items-center">
                <Info className="w-4 h-4 mr-2" /> {t.menu.servingCare}
              </h4>
              <p className="text-ink/70 mb-2"><strong>{t.menu.shelfLife}:</strong> {product.shelfLife}</p>
              <p className="text-ink/70"><strong>{t.menu.tip}:</strong> {product.servingTip}</p>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-varq-silver/30">
            {/* Controls */}
            <div className="flex flex-wrap items-end justify-between gap-8 mb-8">
              <div>
                <span className="block text-sm font-medium text-ink/60 mb-2">{t.menu.selectUnit}</span>
                <div className="flex gap-2">
                  {product.units.map((unit, idx) => (
                    <button
                      key={unit.label}
                      onClick={() => setSelectedUnitIdx(idx)}
                      className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                        idx === selectedUnitIdx
                          ? "border-pistachio-deep bg-pistachio-deep text-malai"
                          : "border-varq-silver/50 text-ink/80 hover:border-pistachio-deep"
                      }`}
                    >
                      {unit.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="text-right">
                <span className="block text-sm font-medium text-ink/60 mb-1">{t.menu.price}</span>
                <span className="font-serif text-3xl text-pistachio-deep">
                  Rs. {activeUnit.price}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center w-full sm:w-auto bg-white border border-varq-silver/40 rounded-full px-4 py-3">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 text-ink/60 hover:text-ink"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 text-ink/60 hover:text-ink"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              <button 
                onClick={handleAdd}
                className="flex-1 w-full bg-saffron text-ink font-bold px-6 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                {showToast ? t.menu.added : t.menu.addToOrder}
              </button>
            </div>

            <div className="mt-6 text-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-pistachio-deep underline hover:text-saffron transition-colors"
              >
                {t.menu.orderDirect}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Needed for the useEffect in ProductModal
import { useEffect } from "react";
