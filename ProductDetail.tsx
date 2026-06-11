import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import { Heart, GitCompare, Star } from 'lucide-react';

export function ProductDetail(){
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { addHistory, toggleWishlist, toggleCompare, wishlist, compare } = useShop();
  useEffect(()=>{ if(product) addHistory(product); }, [product?.id]);
  if(!product) return <main className="page"><div className="empty">Product not found</div></main>;
  return <main className="page detailPage">
    <Link to="/">← Back to Catalogue</Link>
    <section className="detailCard"><div className="detailImage">{product.image}</div><div><span className="eyebrow">{product.category} / {product.subCategory}</span><h1>{product.name}</h1><p className="detailBrand">{product.brand}</p><div className="rating big"><Star size={18} fill="currentColor"/> {product.rating}</div><h2>₹{product.price.toLocaleString('en-IN')}</h2><p>{product.description}</p><ul>{product.features.map(f=><li key={f}>✓ {f}</li>)}</ul><div className="detailActions"><button className={wishlist.includes(product.id)?'selected':''} onClick={()=>toggleWishlist(product.id)}><Heart size={18}/> Add to Wishlist</button><button className={compare.includes(product.id)?'selected':''} onClick={()=>toggleCompare(product.id)}><GitCompare size={18}/> Add to Compare</button></div></div></section>
  </main>
}
