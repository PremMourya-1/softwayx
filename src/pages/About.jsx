import { Link } from "react-router-dom";

const visionMission = {
  vision: {
    title: "Our Vision",
    content:
      "To empower businesses with affordable and innovative digital solutions that save time, reduce complexity, and create meaningful impact in everyday operations.",
  },
  mission: {
    title: "Our Mission",
    content:
      "We are committed to building practical software products that help businesses work smarter, improve efficiency, and unlock new growth opportunities through technology.",
  },
};

const About = () => {
  return (
    <main className="section-padding-top pt-24 section-padding-bottom">
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          <div className="space-y-6">
            <div className="max-w-3xl animate-fade-in">
              <span className="badge mb-4 inline-block">About Softwayx</span>
              <h1 className="section-title mb-5">
                We build tools that help businesses{" "}
                <span className="gradient-text">run better</span>
              </h1>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Softwayx is a software product brand focused on empowering
                growing businesses with easy-to-use systems, automation, and
                modern digital products.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="glass rounded-3xl border border-white/10 p-8 shadow-[0_30px_90px_-60px_rgba(37,99,235,0.7)]">
                <p className="text-sm uppercase tracking-[0.22em] text-brand-blue mb-4">
                  Why Softwayx
                </p>
                <p className="text-white text-lg font-semibold mb-3">
                  Affordable SaaS built for real business needs.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We combine product design, technology, and support so
                  businesses can focus on growth instead of tools.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass rounded-3xl border border-white/10 p-6">
                  <p className="text-sm text-gray-400 mb-1">
                    Industry Experience
                  </p>
                  <p className="text-white text-3xl font-bold">4+ Years</p>
                  <p className="text-gray-400 text-sm mt-3">
                    Delivering digital products and business solutions for
                    modern teams.
                  </p>
                </div>
                <div className="glass rounded-3xl border border-white/10 p-6">
                  <p className="text-sm text-gray-400 mb-1">Team Strength</p>
                  <p className="text-white text-3xl font-bold">
                    Solid & Experienced
                  </p>
                  <p className="text-gray-400 text-sm mt-3">
                    A product-minded team with expertise in software, design,
                    and customer success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {Object.values(visionMission).map((item) => (
              <div
                key={item.title}
                className="rounded-[40px] border border-white/10 bg-black/60 p-8 shadow-[0_40px_100px_-80px_rgba(37,99,235,0.8)] backdrop-blur-xl"
              >
                <span className="text-sm uppercase tracking-[0.22em] text-brand-blue">
                  {item.title}
                </span>
                <h2 className="text-3xl font-semibold text-white mt-4 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">{item.content}</p>
              </div>
            ))}

            <div className="glass rounded-3xl border border-white/10 p-8 text-center">
              <p className="text-gray-400 mb-4">
                Ready to partner with a team that builds software for growth?
              </p>
              <Link to="/contact" className="btn-primary text-base px-8 py-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
