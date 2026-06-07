import { Link } from "react-router-dom";

const footerLinks = {
  Products: [
    { label: "Gym CRM", to: "/product/gym-crm" },
    // { label: 'Billing Pro', to: '/product/billing-pro' },
    // { label: 'ERP Suite', to: '/product/erp-suite' },
    // { label: 'School ERP', to: '/product/school-erp' },
  ],
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "Register", to: "/register" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms & Conditions", to: "/terms" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="container-custom section-padding">
        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 text-white font-bold text-xl mb-3"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-purple-600 flex items-center justify-center text-sm font-black shadow-glow-sm">
                P
              </span>
              <span className="gradient-text">PremSoft</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Modern SaaS solutions for growing businesses. Streamline
              operations, boost revenue, and scale without limits.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-xs">
          <span>
            © {new Date().getFullYear()} softwayx Technologies. All rights
            reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
