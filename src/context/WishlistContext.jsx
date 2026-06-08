"use client";

import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "wishlist";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch {
      setWishlist([]);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
  }, [wishlist, mounted]);

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  const addToWishlist = (product) => {
    if (isInWishlist(product.id)) return false;
    setWishlist((prev) => [...prev, product]);
    return true;
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      return false;
    }
    addToWishlist(product);
    return true;
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, toggleWishlist, isInWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
