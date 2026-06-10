import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useScrolled } from "../hooks/useScrolled";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Products", to: "/#products" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const scrolled = useScrolled(20);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "glass-dark shadow-glow-sm" : "bg-transparent"}`}
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
              <Link
                key={link.to}
                // exact={link.to === "/"}
                to={link.to}
                className="btn-ghost"
                activeClassName="text-white bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* <Link to="/register" className="btn-secondary text-sm px-4 py-2">
              Sign In
            </Link> */}
            <Link to="/contact" className="btn-primary text-sm px-4 py-2">
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden btn-ghost p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="block w-5 h-0.5 bg-gray-300 mb-1.5 transition-all" />
            <span className="block w-5 h-0.5 bg-gray-300 mb-1.5 transition-all" />
            <span className="block w-5 h-0.5 bg-gray-300 transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-dark border-t border-white/10 animate-fade-in">
          <div className="container-custom py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                exact={link.to === "/"}
                to={link.to}
                className="btn-ghost justify-start px-3 py-2.5 text-base"
                activeClassName="text-white bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="divider" />
            <Link
              to="/register"
              className="btn-primary w-full mt-1"
              onClick={() => setMenuOpen(false)}
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
