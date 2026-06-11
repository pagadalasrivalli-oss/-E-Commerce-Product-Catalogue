import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Catalogue } from './pages/Catalogue';
import { ProductDetail } from './pages/ProductDetail';
import { Wishlist } from './pages/Wishlist';
import { Compare } from './pages/Compare';
import { History } from './pages/History';
import { Admin } from './pages/Admin';
import { COMapping } from './pages/COMapping';

export default function App(){
  return <><Navbar/><Routes><Route path="/" element={<Catalogue/>}/><Route path="/product/:id" element={<ProductDetail/>}/><Route path="/wishlist" element={<Wishlist/>}/><Route path="/compare" element={<Compare/>}/><Route path="/history" element={<History/>}/><Route path="/admin" element={<Admin/>}/><Route path="/co-mapping" element={<COMapping/>}/></Routes><footer>ShopSphere © 2026 • E-Commerce Product Catalogue • React + TypeScript</footer></>;
}
