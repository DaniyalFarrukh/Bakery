"use client";

import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useOrder } from "./OrderContext";
import { siteConfig } from "@/config/site";
import { useLanguage } from "./LanguageContext";
import { useEffect } from "react";

export function OrderDrawer() {
  const { items, removeItem, updateQuantity, isDrawerOpen, setDrawerOpen, clearOrder } = useOrder();
  const { lang, t } = useLanguage();

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  // Close drawer on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setDrawerOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const generateWhatsAppLink = () => {
    const textLines = [
      `*New Order for ${siteConfig.shopNameEn}*`,
      `-----------------------`
    ];

    items.forEach((item) => {
      textLines.push(`• ${item.nameEn} (${item.nameUr})`);
      textLines.push(`  ${item.quantity} x ${item.unitLabel} - Rs. ${item.unitPrice * item.quantity}`);
    });

    textLines.push(`-----------------------`);
    textLines.push(`*Total: Rs. ${subtotal}*`);
    textLines.push(``);
    textLines.push(`I would like to place this order for pickup/delivery.`);

    const encodedText = encodeURIComponent(textLines.join("\n"));
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedText}`;
  };

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity"
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer */}
      <div 
        className="relative w-full max-w-md h-full bg-malai shadow-2xl flex flex-col transform transition-transform"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <div className="flex items-center justify-between p-4 border-b border-varq-silver/30">
          <h2 id="drawer-title" className="font-serif text-2xl text-pistachio-deep flex items-center">
            <ShoppingBag className="w-6 h-6 mr-2" />
            {t.drawer.title}
          </h2>
          <button 
            onClick={() => setDrawerOpen(false)}
            className="p-2 text-ink hover:text-gulab-rose transition-colors rounded-full hover:bg-varq-silver/20"
            aria-label="Close order drawer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-ink/70">
              <ShoppingBag className="w-16 h-16 text-varq-silver" />
              <p className="text-lg">{t.drawer.empty}<br/>{t.drawer.emptySub}</p>
              <button 
                onClick={() => setDrawerOpen(false)}
                className="px-6 py-2 border border-pistachio-deep text-pistachio-deep rounded-full hover:bg-pistachio-deep hover:text-malai transition-colors"
              >
                {t.drawer.browse}
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 border-b border-varq-silver/20 pb-4 last:border-0">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className={`font-semibold text-ink ${lang === "ur" ? "hidden" : ""}`}>{item.nameEn}</h3>
                      <span className={`font-urdu text-pistachio-deep text-lg leading-none ${lang === "en" ? "hidden" : ""}`}>{item.nameUr}</span>
                    </div>
                    <div className="text-sm text-ink/70 mb-3">
                      {item.unitLabel} • Rs. {item.unitPrice} {t.drawer.each}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 bg-white border border-varq-silver/40 rounded-full px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="p-1 text-ink/60 hover:text-ink disabled:opacity-50"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium text-ink w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-ink/60 hover:text-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <span className="font-semibold text-pistachio-deep">
                          Rs. {item.unitPrice * item.quantity}
                        </span>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-ink/40 hover:text-gulab-rose transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-varq-silver/30 bg-white">
            <div className="flex justify-between items-center mb-4 text-lg">
              <span className="font-serif text-ink">{t.drawer.subtotal}</span>
              <span className="font-serif text-pistachio-deep font-bold">Rs. {subtotal}</span>
            </div>
            <a 
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => clearOrder()} // Clear order after sending
              className="w-full py-4 rounded-full bg-saffron text-ink font-bold text-center block hover:opacity-90 transition-opacity"
            >
              {t.drawer.sendOrder}
            </a>
            <p className="text-center text-xs text-ink/50 mt-3">
              {t.drawer.reviewMsg}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
