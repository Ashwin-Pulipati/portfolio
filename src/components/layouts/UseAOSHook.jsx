// src/components/layouts/useAOSHook.js
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function useAOS(
  options = {
    duration: 1000,
    easing: "ease-in-out",
    once: false, // ← allow repeat
    mirror: true, // ← animate out on scroll back
  }
) {
  useEffect(() => {
    import("aos").then(({ default: AOS }) => {
      AOS.init(options);
      AOS.refresh();
    });
    return () => {
      import("aos").then(({ default: AOS }) => AOS.refresh());
    };
  }, [options]);
}
