import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import FaqSection from "../components/FaqSection";
import TeamSection from "../components/TeamSection";

const homeFaqItems = [
  {
    question: "What is Softwayx?",
    answer:
      "Softwayx is a technology brand focused on building modern digital products and software solutions for businesses.",
  },
  {
    question: "What services does Softwayx provide?",
    answer:
      "We work on software products, web applications, business solutions, and digital tools designed to simplify business operations.",
  },
  {
    question: "Is Softwayx a software company?",
    answer:
      "Softwayx is a growing digital product brand currently focused on developing scalable software solutions and SaaS products.",
  },
  {
    question: "What products does Softwayx currently offer?",
    answer:
      "Currently, Softwayx offers GymFox, a gym management solution designed for fitness businesses.",
  },
  {
    question: "Will Softwayx launch more products in the future?",
    answer:
      "Yes, we plan to expand and launch more innovative software products for different industries in the future.",
  },
  {
    question: "Can businesses request custom software solutions?",
    answer:
      "Yes, businesses can contact us for custom web applications and software-related solutions.",
  },
  {
    question: "How can I contact Softwayx?",
    answer:
      "You can contact us through the Contact Us page or official business email available on Softwayx.",
  },
  {
    question: "Is Softwayx suitable for startups and small businesses?",
    answer:
      "Yes, our goal is to build simple, scalable, and affordable digital solutions for modern businesses.",
  },
  {
    question: "Does Softwayx provide technical support?",
    answer:
      "Yes, we provide support and assistance for our products and services.",
  },
  {
    question: "Where is Softwayx based?",
    answer:
      "Softwayx operates online and provides digital solutions for businesses.",
  },
];

const Home = () => {
  const abc = " ";
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 md:pt-32 pb-20">
        <div className="absolute -left-10 top-20 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid gap-10 items-center lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                  ✦
                </span>
                Independent SaaS studio for modern businesses
              </div>

              <div className="max-w-3xl">
                <h1 className="section-title mb-6 leading-tight text-white">
                  Building smart, affordable software solutions that help
                  businesses grow faster and work smarter.
                </h1>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                  Softwayx creates polished digital tools for growth-focused
                  teams, letting them automate workflows, track performance, and
                  serve customers better.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.22em] text-brand-blue mb-3">
                    Key focus
                  </p>
                  <p className="text-white text-lg font-semibold">
                    Business operations
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.22em] text-brand-blue mb-3">
                    Built for
                  </p>
                  <p className="text-white text-lg font-semibold">
                    SMBs & modern teams
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="btn-primary text-base px-8 py-3">
                  Book a Demo
                </Link>
                <Link
                  to="/products"
                  className="btn-secondary text-base px-8 py-3"
                >
                  Explore Products
                </Link>
              </div>
            </div>

            <div className="relative rounded-[40px] border border-white/10 bg-[#08101e]/95 p-8 shadow-[0_40px_120px_-70px_rgba(37,99,235,0.6)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-brand-blue">
                    Featured product
                  </p>
                  <h2 className="text-3xl font-semibold text-white mt-3">
                    Gym Fox
                  </h2>
                </div>
                <span className="rounded-full border border-brand-blue/20 bg-brand-blue/10 px-3 py-1 text-sm text-brand-blue">
                  Live now
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed">
                Manage memberships, payments, renewals, and business analytics
                with an intuitive gym management platform built for fitness
                owners.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/5 p-5 text-sm text-gray-300">
                  <p className="text-white font-semibold text-xl">12K+</p>
                  <p>Members tracked</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5 text-sm text-gray-300">
                  <p className="text-white font-semibold text-xl">Auto</p>
                  <p>Payment renewals</p>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-[32px] border border-white/10 bg-[#07101a] p-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl">
                    G
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Product</p>
                    <p className="text-white font-semibold">
                      Gym Fox Dashboard
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-300">
                  <p className="rounded-3xl bg-white/5 px-4 py-3">
                    Members, payments, and analytics in one dashboard
                  </p>
                  <p className="rounded-3xl bg-white/5 px-4 py-3">
                    Designed for fitness business growth
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <Link
                    to="/product/gym-crm"
                    className="btn-primary grow !rounded-full text-base px-6 py-2  "
                  >
                    Start Free Trial
                  </Link>
                  <a
                    target="_blank"
                    href="https://gymfox.softwayx.in/login"
                    className="btn-secondary grow text-base px-6 py-2  rounded-full"
                  >
                    Dashboard Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
      {/* ── Products ── */}
      <section id="products" className="section-padding bg-[#030911]">
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

      <FaqSection
        heading="Softwayx"
        accent="FAQ"
        subheading="Common questions about Softwayx, our services, products, and support."
        items={homeFaqItems}
        className="section-padding bg-[#07101a] rounded-[2rem]"
      />

      {/* ── Why Us ── */}
      <section className="section-padding bg-[#020a13]">
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
