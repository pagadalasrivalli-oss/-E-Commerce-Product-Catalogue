import { useMemo, useState } from 'react';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';

export function SearchBar(){
  const { filters, setFilters } = useShop();
  const [open, setOpen] = useState(false);
  const suggestions = useMemo(() => products.filter(p => filters.search && p.name.toLowerCase().includes(filters.search.toLowerCase())).slice(0,5), [filters.search]);
  return <div className="searchBox">
    <input aria-label="Search products" value={filters.search} onFocus={()=>setOpen(true)} onChange={e=>setFilters(f=>({...f, search:e.target.value}))} placeholder="Search headphones, watches, bags..." />
    {open && suggestions.length > 0 && <div className="suggestions">
      {suggestions.map(p => <button key={p.id} onClick={()=>{setFilters(f=>({...f, search:p.name})); setOpen(false)}}>{p.image} {p.name}<span>{p.brand}</span></button>)}
    </div>}
  </div>
}
