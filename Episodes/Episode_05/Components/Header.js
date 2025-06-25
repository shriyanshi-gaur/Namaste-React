// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">🍱 TiffinTrails</h1>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart 🛒</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;