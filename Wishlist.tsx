import { ProductCard } from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';

export function Wishlist(){
  const { wishlist } = useShop();
  const list = products.filter(p => wishlist.includes(p.id));
  return <main className="page"><h1>Wishlist</h1><p className="muted">Products saved by the user using LocalStorage.</p><section className="productGrid solo">{list.map(p=><ProductCard key={p.id} product={p}/>)}{list.length===0 && <div className="empty">Wishlist is empty.</div>}</section></main>
}
