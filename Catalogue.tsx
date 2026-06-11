import { FilterPanel } from '../components/FilterPanel';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { useShop } from '../context/ShopContext';
import { categories } from '../data/products';

export function Catalogue(){
  const { filters, setFilters, filteredProducts } = useShop();
  return <main className="page">
    <section className="hero">
      <div><span className="eyebrow">Real-time catalogue experience</span><h1>Browse, filter, compare and shortlist products faster.</h1><p>Multi-level categories, smart filters, search suggestions, wishlist, comparison and admin-ready catalogue management.</p></div>
      <div className="heroStats"><b>{filteredProducts.length}</b><span>matching products</span></div>
    </section>
    <div className="categoryNav">{categories.map(c=><button key={c} className={filters.category===c?'active':''} onClick={()=>setFilters(f=>({...f, category:c}))}>{c}</button>)}</div>
    <div className="toolbar"><SearchBar/><select value={filters.sort} onChange={e=>setFilters(f=>({...f, sort:e.target.value}))}><option value="featured">Sort: Featured</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option><option value="rating">Top Rated</option><option value="name">Name A-Z</option></select></div>
    <div className="layout"><FilterPanel/><section className="productGrid">{filteredProducts.map(product => <ProductCard key={product.id} product={product}/>)}{filteredProducts.length===0 && <div className="empty">No products found. Try changing filters.</div>}</section></div>
  </main>
}
