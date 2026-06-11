import { ProductCard } from '../components/ProductCard';
import { useShop } from '../context/ShopContext';

export function History(){
  const { history } = useShop();
  return <main className="page"><h1>Browsing History</h1><p className="muted">Recently viewed products are stored in LocalStorage.</p><section className="productGrid solo">{history.map(p=><ProductCard key={p.id} product={p}/>)}{history.length===0 && <div className="empty">No browsing history yet.</div>}</section></main>
}
