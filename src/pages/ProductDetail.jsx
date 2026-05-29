import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  useEffect(() => {
    window.scrollTo(0);
  }, [id]);

  const [preview, setPreview] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center container-custom section-padding">
        <h1 className="section-title mb-4">Product Not Found</h1>
        <p className="text-gray-400 mb-8">
          The product you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/** Image preview modal */}
      {preview ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreview(null)}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && setPreview(null)}
        >
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setPreview(null);
              }}
              className="absolute -top-3 -right-3 z-50 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={preview}
              alt="Preview"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-xl"
            />
          </div>
        </div>
      ) : null}

      <main className="section-padding-top pt-24 md:pt-28 px-4 sm:px-6 lg:px-0">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/#products"
              className="hover:text-white transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-white">{product.title}</span>
          </nav>
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 xl:gap-16 items-center mb-20 lg:mb-28">
            {/* Left Content */}
            <div className="animate-slide-up relative z-10">
              {/* Badge + Logo */}
              <div className="flex items-center gap-4 mb-8">
                {/* Logo */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_10px_40px_-12px_rgba(255,255,255,0.35)] ring-1 ring-white/10">
                  <img
                    src={product.logo}
                    alt={product.title}
                    className="h-11 w-11 object-contain"
                  />
                </div>

                {/* Badge */}
                <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue backdrop-blur-md">
                  {product.short}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-6">
                {product.title}
              </h1>

              {/* Tagline */}
              <p className="text-light text-sm  font-medium leading-relaxed max-w-2xl mb-5">
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-slate-400 text-[15px] sm:text-base leading-8 max-w-2xl mb-10">
                {product.description}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-blue px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500 hover:shadow-[0_15px_40px_-12px_rgba(37,99,235,0.6)]"
                >
                  Get Started Free
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative rightSection">
              {/* Outer Glow */}
              <div
                className={`absolute -inset-6 rounded-[40px] bg-gradient-to-br ${product.color} opacity-[0.08] blur-3xl`}
              />

              {/* Main Card */}

              <div className="">
                <img
                  src={product.hero}
                  alt={product.name}
                  className="md:max-w-[500px] max-w-[380px] h-full object-contain m-auto"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Key <span className="gradient-text">Features</span>
              </h2>
              <p className="text-gray-400">Everything you need in one place.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.features.map((feature) => (
                <div key={feature} className="card">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-brand-blue text-lg">✓</span>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Product <span className="gradient-text">Screenshots</span>
              </h2>
              <p className="text-gray-400">A glimpse of the interface.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.screenshots.map((shot) => {
                const src = shot.src || shot.img;
                return (
                  <div
                    key={shot.label}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120]/90 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.25)]"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    {src ? (
                      <button
                        onClick={() => setPreview(src)}
                        className="relative block w-full"
                        aria-label={`Preview ${shot.label}`}
                      >
                        {/* Image Container */}
                        <div className="relative flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 p-4">
                          {/* Mockup Style Frame */}
                          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl">
                            {/* Top Bar */}
                            <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3 bg-white/[0.03]">
                              <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                              <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                            </div>

                            {/* Screenshot */}
                            {/* Screenshot */}
                            <div className="relative h-[165px] overflow-hidden bg-[#050816]">
                              <img
                                src={src}
                                alt={shot.label}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Bottom Info */}
                        <div className="flex items-center justify-between px-5 py-4 border-t border-white/5 bg-white/[0.02]">
                          <div>
                            <p className="text-sm font-medium text-white">
                              {shot.label}
                            </p>

                            <p className="text-xs text-slate-500 mt-1">
                              Click to preview
                            </p>
                          </div>

                          {/* Right Side */}
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300 group-hover:bg-white/[0.08]">
                            👁
                          </div>
                        </div>
                      </button>
                    ) : (
                      <div className="flex h-[320px] items-center justify-center">
                        <span className="text-5xl">{product.icon}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16">
            <div className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 pointer-events-none`}
              />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Start Using{" "}
                  <span className="gradient-text">{product.title}</span> Today
                </h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                  Set up in minutes. No credit card required. Cancel anytime.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/register"
                    className="btn-primary text-base px-8 py-3"
                  >
                    Register / Get Started
                  </Link>
                  <Link to="/" className="btn-ghost text-base">
                    ← Back to Products
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
