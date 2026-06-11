import { products } from '../data/products';

export function Admin(){
  const totalStock = products.reduce((s,p)=>s+p.stock,0);
  const avgRating = (products.reduce((s,p)=>s+p.rating,0)/products.length).toFixed(1);
  return <main className="page"><h1>Admin Panel</h1><p className="muted">Catalogue overview for admin monitoring and product management simulation.</p><section className="adminStats"><div><b>{products.length}</b><span>Total Products</span></div><div><b>{totalStock}</b><span>Total Stock</span></div><div><b>{avgRating}★</b><span>Average Rating</span></div><div><b>5</b><span>Active Categories</span></div></section><section className="adminPanel"><h2>Product Inventory</h2><table><thead><tr><th>Product</th><th>Category</th><th>Brand</th><th>Price</th><th>Stock</th><th>Status</th></tr></thead><tbody>{products.map(p=><tr key={p.id}><td>{p.image} {p.name}</td><td>{p.category}</td><td>{p.brand}</td><td>₹{p.price}</td><td>{p.stock}</td><td><span className={p.stock<12?'lowStock':'inStock'}>{p.stock<12?'Low Stock':'Active'}</span></td></tr>)}</tbody></table></section></main>
}
