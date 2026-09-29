"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product, Unit } from "@/data/products";

export type OrderItem = {
  id: string; // unique string (e.g. slug + unit)
  productSlug: string;
  nameEn: string;
  nameUr: string;
  unitLabel: string;
  unitPrice: number;
  quantity: number;
};

interface OrderContextType {
  items: OrderItem[];
  addItem: (product: Product, unit: Unit, quantity: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  clearOrder: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<OrderItem[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mehtai-order");
      if (saved) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load order from local storage", e);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("mehtai-order", JSON.stringify(items));
      } catch (e) {
        console.error("Failed to save order to local storage", e);
      }
    }
  }, [items, isLoaded]);

  const addItem = (product: Product, unit: Unit, quantity: number) => {
    setItems((prev) => {
      const existingId = `${product.slug}-${unit.label}`;
      const existingItem = prev.find((i) => i.id === existingId);
      if (existingItem) {
        return prev.map((i) =>
          i.id === existingId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...prev,
        {
          id: existingId,
          productSlug: product.slug,
          nameEn: product.nameEn,
          nameUr: product.nameUr,
          unitLabel: unit.label,
          unitPrice: unit.price,
          quantity,
        },
      ];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const clearOrder = () => setItems([]);

  return (
    <OrderContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        isDrawerOpen,
        setDrawerOpen,
        clearOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}
