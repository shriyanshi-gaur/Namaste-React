const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By   -
      <a href="https://www.linkedin.com/in/shriyanshi-gaur-a4419428b" target="_blank">
        Shriyanshi Gaur    -
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year  }
      <strong>
        Tiffin<span>Trail</span>
      </strong>
    </div>
  );
};
export default Footer;
