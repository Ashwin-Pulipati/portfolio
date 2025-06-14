import React, { useState, useEffect, useMemo } from "react";
import { Spiral } from "ldrs/react";
import "ldrs/react/Spiral.css";

const PLACEHOLDER =
  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";

export const LazyLoadImage = React.memo(function LazyLoadImage({
  imgSrc,
  inView,
  index,
  expanded,
  heightClass,
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.onload = () => setLoaded(true);
      img.src = imgSrc;
    }
  }, [imgSrc, inView]);

  const fitClass = useMemo(
    () => (expanded ? "object-contain" : "object-cover"),
    [expanded]
  );

  return (
    <div className={`flex-none w-full ${expanded ? "" : "pl-4"} translate-z-0`}>
      <div className={`relative ${heightClass}`}>
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Spiral size="40" speed="0.9" color="#0055FF" />
          </div>
        )}
        <img
          className={`block w-full h-full ${fitClass} rounded-2xl transition-opacity duration-200 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          src={inView ? imgSrc : PLACEHOLDER}
          alt={`slide ${index}`}
        />
      </div>
    </div>
  );
});
