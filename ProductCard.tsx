import { Link } from 'react-router-dom';
import { Heart, GitCompare, Star } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

export function ProductCard({ product }: { product: Product }){
  const { wishlist, compare, toggleWishlist, toggleCompare } = useShop();
  return <article className="productCard">
    <Link to={`/product/${product.id}`} className="productImage">{product.image}</Link>
    <div className="productInfo">
      <small>{product.brand} • {product.subCategory}</small>
      <Link to={`/product/${product.id}`}><h3>{product.name}</h3></Link>
      <div className="rating"><Star size={15} fill="currentColor"/> {product.rating}</div>
      <p>₹{product.price.toLocaleString('en-IN')}</p>
      <div className="cardActions">
        <button className={wishlist.includes(product.id) ? 'selected' : ''} onClick={()=>toggleWishlist(product.id)}><Heart size={16}/> Wishlist</button>
        <button className={compare.includes(product.id) ? 'selected' : ''} onClick={()=>toggleCompare(product.id)}><GitCompare size={16}/> Compare</button>
      </div>
    </div>
  </article>
}
