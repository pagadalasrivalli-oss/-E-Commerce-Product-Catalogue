import React, { createContext, useContext, useMemo, useState } from 'react';
import { Filters, Product } from '../types';
import { products } from '../data/products';

type ShopContextType = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  filteredProducts: Product[];
  wishlist: number[];
  compare: number[];
  history: Product[];
  addHistory: (product: Product) => void;
  toggleWishlist: (id: number) => void;
  toggleCompare: (id: number) => void;
  clearAll: () => void;
};

const defaultFilters: Filters = {
  category: 'All', brand: 'All', color: 'All', size: 'All',
  minPrice: 0, maxPrice: 6000, rating: 0, search: '', sort: 'featured'
};

const ShopContext = createContext<ShopContextType | null>(null);
const load = (key: string, fallback: any) => JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [wishlist, setWishlist] = useState<number[]>(() => load('shopsphere_wishlist', []));
  const [compare, setCompare] = useState<number[]>(() => load('shopsphere_compare', []));
  const [history, setHistory] = useState<Product[]>(() => load('shopsphere_history', []));

  const filteredProducts = useMemo(() => {
    let list = products.filter(p =>
      (filters.category === 'All' || p.category === filters.category) &&
      (filters.brand === 'All' || p.brand === filters.brand) &&
      (filters.color === 'All' || p.color === filters.color) &&
      (filters.size === 'All' || p.size === filters.size) &&
      p.price >= filters.minPrice && p.price <= filters.maxPrice &&
      p.rating >= filters.rating &&
      (p.name.toLowerCase().includes(filters.search.toLowerCase()) || p.brand.toLowerCase().includes(filters.search.toLowerCase()) || p.category.toLowerCase().includes(filters.search.toLowerCase()))
    );
    if (filters.sort === 'price-low') list = [...list].sort((a,b)=>a.price-b.price);
    if (filters.sort === 'price-high') list = [...list].sort((a,b)=>b.price-a.price);
    if (filters.sort === 'rating') list = [...list].sort((a,b)=>b.rating-a.rating);
    if (filters.sort === 'name') list = [...list].sort((a,b)=>a.name.localeCompare(b.name));
    return list;
  }, [filters]);

  function saveList(key: string, value: any){ localStorage.setItem(key, JSON.stringify(value)); }
  function toggleWishlist(id: number){
    setWishlist(prev => { const next = prev.includes(id) ? prev.filter(x=>x!==id) : [...prev,id]; saveList('shopsphere_wishlist', next); return next; });
  }
  function toggleCompare(id: number){
    setCompare(prev => { const next = prev.includes(id) ? prev.filter(x=>x!==id) : prev.length < 4 ? [...prev,id] : prev; saveList('shopsphere_compare', next); return next; });
  }
  function addHistory(product: Product){
    setHistory(prev => { const next = [product, ...prev.filter(p=>p.id!==product.id)].slice(0,8); saveList('shopsphere_history', next); return next; });
  }
  function clearAll(){ setFilters(defaultFilters); }

  return <ShopContext.Provider value={{filters,setFilters,filteredProducts,wishlist,compare,history,addHistory,toggleWishlist,toggleCompare,clearAll}}>{children}</ShopContext.Provider>;
}
export const useShop = () => {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used inside ShopProvider');
  return ctx;
};
