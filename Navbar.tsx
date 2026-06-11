import { Link, NavLink } from 'react-router-dom';
import { Heart, GitCompare, History, Shield, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export function Navbar(){
  const { wishlist, compare, history } = useShop();
  return <header className="navbar">
    <Link to="/" className="brand"><span className="brandIcon"><ShoppingBag size={24}/></span><div><b>ShopSphere</b><small>Product Catalogue</small></div></Link>
    <nav>
      <NavLink to="/">Catalogue</NavLink>
      <NavLink to="/wishlist"><Heart size={16}/> Wishlist <em>{wishlist.length}</em></NavLink>
      <NavLink to="/compare"><GitCompare size={16}/> Compare <em>{compare.length}</em></NavLink>
      <NavLink to="/history"><History size={16}/> History <em>{history.length}</em></NavLink>
      <NavLink to="/admin"><Shield size={16}/> Admin</NavLink>
    </nav>
  </header>
}
