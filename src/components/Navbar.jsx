import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useScrolled } from "../hooks/useScrolled";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const scrolled = useScrolled(20);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `btn-ghost ${isActive ? "text-white bg-white/10" : "text-white"}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-glow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-white font-bold text-xl"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={logo}
              alt="SoftwayX logo"
              className="h-full w-full max-w-[200px]"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="btn-primary text-sm px-4 py-2">
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />{" "}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute inset-x-0 top-full z-40 overflow-hidden border-t border-white/10 bg-[#07101f]/95 backdrop-blur-xl transition-all duration-300 ease-out ${
          menuOpen
            ? "max-h-[520px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-custom py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/home"}
              className={({ isActive }) =>
                `btn-ghost w-full justify-start px-3 py-3 text-base transition-colors duration-200 ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/5"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <Link
            to="/register"
            className="btn-primary w-full mt-1"
            onClick={() => setMenuOpen(false)}
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
