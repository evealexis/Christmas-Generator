import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>© Eve Alexis {year} 🎄 | My gitHub</p>
    </div>
  );
}

export default Footer;
