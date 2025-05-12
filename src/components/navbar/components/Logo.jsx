import React, { useState, useEffect } from "react";
import logo from "../app-logo/app-logo.webp";

const Logo = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // after first render
    requestAnimationFrame(() => setShow(true));
  }, []);

  return show ? (
    <img
      src={logo}
      alt="Portfolio Logo"
      width={64}
      height={64}
      className="w-16 h-16 aspect-square object-contain"
      loading="lazy"
      decoding="async"
      fetchPriority="low"
    />
  ) : (
    <div style={{ width: 64, height: 64 }} /> // placeholder
  );
};

export default Logo;
