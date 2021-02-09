import './App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link><br />
      <Link to="/contacts">Contacts</Link><br />
      <Link to="/store">Store</Link><br />
      <Link to="/sub/about">About</Link><br />
    </div>
  );
}

export default Navbar;
