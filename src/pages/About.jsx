import { Link } from "react-router-dom";

const teamMembers = [
  { name: "Prem Mourya", role: "Founder & CEO", emoji: "👨‍💼" },
  { name: "Sadhana Mundotiya", role: "Design Lead", emoji: "🎨" },
  { name: "Karan Mourya", role: "Development Lead", emoji: "👨‍💻" },
  { name: "Pawan Mourya", role: "Marketing Head", emoji: "📈" },
];
const values = [
  {
    icon: "🚀",
    title: "Velocity",
    desc: "We move fast without breaking things.",
  },
  {
    icon: "🔒",
    title: "Security",
    desc: "Enterprise-grade security baked in from day one.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    desc: "We grow only when our customers grow.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "Constantly raising the bar on what software can do.",
  },
];

const About = () => {
  return (
    <main
      id="about"
      className="section-padding-top pt-24 section-padding-bottom"
    >
      <div className="container-custom">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <span className="badge mb-4 inline-block">Our Story</span>
          <h1 className="section-title mb-5">
            Built by Builders,{" "}
            <span className="gradient-text">for Builders</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            PremSoft was founded with a single mission: make enterprise-grade
            software accessible to every business, regardless of size. We
            started as a small team of engineers tired of watching great
            businesses struggle with outdated tools.
          </p>
        </div>

        {/* Values */}
        {/* <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-10">
            What We <span className="gradient-text">Stand For</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-10">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m) => (
              <div key={m.name} className="card text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-purple-600 flex items-center justify-center text-3xl mx-auto mb-4 shadow-glow-sm">
                  {m.emoji}
                </div>
                <h3 className="text-white font-semibold">{m.name}</h3>
                <p className="text-gray-400 text-xs mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="glass rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join the <span className="gradient-text">Softway X </span> Journey
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Be part of the story. Start your free trial today and see the
            difference.
          </p>
          <Link to="/register" className="btn-primary text-base px-8 py-3">
            Get Started Free
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
