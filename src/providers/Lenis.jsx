"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";


function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
       lerp: 0.1, // super floaty
      smoothWheel: true,
      // wheelMultiplier:30,
      // duration:7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    // const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
   
    };
  }, []);

  return <div className="scroll-container">{children}</div>;
}

export default SmoothScroll;
