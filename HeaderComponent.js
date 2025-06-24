const HeaderComponent = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://miro.medium.com/v2/resize:fit:1200/1*5PxGgx_aOWpTkul_D3nnbw.png"
        alt="Logo"
      />
      <input className="search" type="text" placeholder="Search..." />
      <img
        className="user-icon"
        src="https://www.computerhope.com/jargon/s/search-icon.png"
        alt="User"
      />
    </div>
  );
};

export default HeaderComponent;