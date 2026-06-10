import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import About from "./About";

const Home = () => {
  const abc = " ";
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom section-padding-top pt-28 md:pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Badge */}
            <span className="badge mb-6 inline-block">
              ✦ Independent SaaS Studio
            </span>

            {/* Heading */}
            <h1 className="section-title mb-6 leading-tight">
              Smart Software Solutions for{" "}
              <span className="gradient-text">Modern Businesses</span>
            </h1>

            {/* Sub */}
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              SoftwayX creates modern and easy-to-use software products designed
              to simplify business operations, improve productivity, and support
              business growth through technology.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-3">
                📞 Contact Us
              </Link>

              <a href="#products" className="btn-secondary text-base px-8 py-3">
                🕵️ Explore Products
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 animate-slide-up">
            {[
              {
                value: "1+",
                label: "Live Product",
              },
              {
                value: "Secure",
                label: "Cloud Platform",
              },
              {
                value: "Fast",
                label: "Modern Experience",
              },
              {
                value: "24/7",
                label: "Platform Access",
              },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-5 text-center">
                <div className="text-3xl font-bold gradient-text mb-1">
                  {s.value}
                </div>

                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <About />
      {/* ── Products ── */}
      <section id="products" className="section-padding">
        <div className="container-custom">
          {/* Heading */}
          <div className="text-center mb-12">
            <span className="badge mb-4 inline-block">Our Products</span>
            <h2 className="section-title mb-4">
              Everything Your Business{" "}
              <span className="gradient-text">Needs</span>
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Six powerful platforms, each engineered for a specific vertical —
              and all connected through a unified data layer.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-purple-600/10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="section-title mb-4">
                Ready to <span className="gradient-text">Transform</span> Your
                Business?
              </h2>
              <p className="section-subtitle mx-auto text-center mb-8">
                Join thousands of businesses already running smarter with
                Softwayx.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* <Link
                  to="/register"
                  className="btn-primary text-base px-8 py-3"
                >
                  Start Free Trial
                </Link> */}
                <Link to="/contact">
                  <Button variant="secondary" className="text-base px-8 py-3">
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
