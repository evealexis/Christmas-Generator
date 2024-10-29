const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>© Eve Alexis {year} 🎄 | <a href="http://github.com/evealexis">My gitHub</a></p>
    </div>
  );
}

export default Footer;
