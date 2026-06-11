import { useShop } from '../context/ShopContext';
import { products } from '../data/products';

export function Compare(){
  const { compare, toggleCompare } = useShop();
  const list = products.filter(p => compare.includes(p.id));
  return <main className="page"><h1>Product Comparison</h1><p className="muted">Compare up to four products side-by-side.</p>{list.length===0 ? <div className="empty">No products selected for comparison.</div> : <div className="compareTable"><table><thead><tr><th>Feature</th>{list.map(p=><th key={p.id}>{p.image}<br/>{p.name}</th>)}</tr></thead><tbody><tr><td>Brand</td>{list.map(p=><td key={p.id}>{p.brand}</td>)}</tr><tr><td>Price</td>{list.map(p=><td key={p.id}>₹{p.price}</td>)}</tr><tr><td>Rating</td>{list.map(p=><td key={p.id}>{p.rating}★</td>)}</tr><tr><td>Color</td>{list.map(p=><td key={p.id}>{p.color}</td>)}</tr><tr><td>Size</td>{list.map(p=><td key={p.id}>{p.size}</td>)}</tr><tr><td>Stock</td>{list.map(p=><td key={p.id}>{p.stock}</td>)}</tr><tr><td>Action</td>{list.map(p=><td key={p.id}><button onClick={()=>toggleCompare(p.id)}>Remove</button></td>)}</tr></tbody></table></div>}</main>
}
