import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Outlet } from "react-router-dom";

function MouseMoveEffect() {
  const wrapperRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  const frame = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.14;

      position.current.y += (mouse.current.y - position.current.y) * 0.14;

      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `
          translate3d(
            ${position.current.x}px,
            ${position.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="mouse-move-effect">
      <div className="mouse-move-effect__dot-circle" />
    </div>
  );
}
function Layout() {
  return (
    <div className="relative z-10 flex flex-col min-h-screen overflow-x-hidden">
      <MouseMoveEffect />
      <Navbar />
      <ScrollToTop />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default Layout;
