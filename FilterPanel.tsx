import { brands, categories, colors, sizes } from '../data/products';
import { useShop } from '../context/ShopContext';

export function FilterPanel(){
  const { filters, setFilters, clearAll } = useShop();
  return <aside className="filterPanel">
    <div className="panelHead"><h3>Filters</h3><button onClick={clearAll}>Reset</button></div>
    <label>Category<select value={filters.category} onChange={e=>setFilters(f=>({...f,category:e.target.value}))}>{categories.map(x=><option key={x}>{x}</option>)}</select></label>
    <label>Brand<select value={filters.brand} onChange={e=>setFilters(f=>({...f,brand:e.target.value}))}>{brands.map(x=><option key={x}>{x}</option>)}</select></label>
    <label>Color<select value={filters.color} onChange={e=>setFilters(f=>({...f,color:e.target.value}))}>{colors.map(x=><option key={x}>{x}</option>)}</select></label>
    <label>Size<select value={filters.size} onChange={e=>setFilters(f=>({...f,size:e.target.value}))}>{sizes.map(x=><option key={x}>{x}</option>)}</select></label>
    <label>Max Price ₹{filters.maxPrice}<input type="range" min="500" max="6000" step="100" value={filters.maxPrice} onChange={e=>setFilters(f=>({...f,maxPrice:Number(e.target.value)}))}/></label>
    <label>Minimum Rating<select value={filters.rating} onChange={e=>setFilters(f=>({...f,rating:Number(e.target.value)}))}><option value={0}>Any</option><option value={4}>4★ and above</option><option value={4.5}>4.5★ and above</option></select></label>
  </aside>
}
