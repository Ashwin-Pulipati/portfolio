import React, { useEffect } from "react";
import "./Cursor.css";

const CursorEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      for (let i = 0; i < 5; i++) {
        const star = document.createElement("div");
        star.className = "pointer-events-none fixed z-50";

        const size = Math.random() * 6 + 6; // Star size (6px to 12px)
        const opacity = Math.random() * 0.6 + 0.4; // Opacity 40% to 100%
        const x = e.clientX + (Math.random() - 0.5) * 15;
        const y = e.clientY + (Math.random() - 0.5) * 15;

        star.style.position = "fixed";
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.opacity = opacity;
        star.style.fontSize = `${size}px`;

        // Generate a random hue.
        const randomHue = Math.random() * 360;
        // In light mode, use 85% lightness; in dark mode, use 65% lightness.
        const lightness = isDarkMode ? 85 : 65;
        star.style.color = `hsla(${randomHue}, 100%, ${lightness}%, 1)`;

        star.style.filter = "drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))";
        star.innerHTML = "★";

        // Apply a floating/fading animation.
        star.style.transition =
          "transform 1.2s ease-out, opacity 1.2s ease-out";
        star.style.transform = `translate(${Math.random() * 6 - 3}px, ${
          Math.random() * 6 - 3
        }px) scale(1.2)`;

        document.body.appendChild(star);

        setTimeout(() => {
          star.style.opacity = "0";
          star.style.transform = `translate(${Math.random() * 12 - 6}px, ${
            Math.random() * 12 - 6
          }px) scale(0.5)`;
        }, 200);

        setTimeout(() => star.remove(), 1200);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default React.memo(CursorEffect);
