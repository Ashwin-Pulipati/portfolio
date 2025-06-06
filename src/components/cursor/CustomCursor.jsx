// import React, { useEffect } from "react";
// import "./Cursor.css";

// const CursorEffect = () => {
//   useEffect(() => {
//     let timeout;
//     const handleMouseMove = (e) => {
//       const isDarkMode = document.documentElement.classList.contains("dark");
//       const stars = new Array(5).fill(null).map(() => {
//         const star = document.createElement("div");
//         star.className = "pointer-events-none fixed z-50";
//         star.style.position = "fixed";

//         const size = Math.random() * 6 + 6;
//         const opacity = Math.random() * 0.6 + 0.4;
//         const x = e.clientX + (Math.random() - 0.5) * 15;
//         const y = e.clientY + (Math.random() - 0.5) * 15;

//         star.style.left = `${x}px`;
//         star.style.top = `${y}px`;
//         star.style.opacity = opacity;
//         star.style.fontSize = `${size}px`;

//         const randomHue = Math.random() * 360;
//         const lightness = isDarkMode ? 85 : 65;
//         star.style.color = `hsla(${randomHue}, 100%, ${lightness}%, 1)`;
//         star.style.filter = "drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))";
//         star.innerHTML = "★";

//         star.style.transition =
//           "transform 1.2s ease-out, opacity 1.2s ease-out";
//         star.style.transform = `translate(${Math.random() * 6 - 3}px, ${
//           Math.random() * 6 - 3
//         }px) scale(1.2)`;

//         document.body.appendChild(star);

//         setTimeout(() => {
//           star.style.opacity = "0";
//           star.style.transform = `translate(${Math.random() * 12 - 6}px, ${
//             Math.random() * 12 - 6
//           }px) scale(0.5)`;
//         }, 200);

//         return star;
//       });

//       timeout = setTimeout(() => {
//         stars.forEach((star) => star.remove());
//       }, 1200);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       if (timeout) clearTimeout(timeout);
//     };
//   }, []);

//   return null;
// };

// export default React.memo(CursorEffect);


// CustomCursor.jsx

import React, { useEffect, useRef, useCallback } from "react";
import "./Cursor.css";

const CursorEffect = () => {
  const timeoutRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    const stars = new Array(5).fill(null).map(() => {
      const star = document.createElement("div");
      star.className = "pointer-events-none fixed z-50";
      star.style.position = "fixed";

      const size = Math.random() * 6 + 6;
      const opacity = Math.random() * 0.6 + 0.4;
      const x = e.clientX + (Math.random() - 0.5) * 15;
      const y = e.clientY + (Math.random() - 0.5) * 15;

      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.opacity = opacity;
      star.style.fontSize = `${size}px`;

      const randomHue = Math.random() * 360;
      const lightness = isDarkMode ? 85 : 65;
      star.style.color = `hsla(${randomHue}, 100%, ${lightness}%, 1)`;
      star.style.filter = "drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))";
      star.innerHTML = "★";

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

      return star;
    });

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      stars.forEach((star) => star.remove());
    }, 1200);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [handleMouseMove]);

  return null;
};

export default React.memo(CursorEffect);
