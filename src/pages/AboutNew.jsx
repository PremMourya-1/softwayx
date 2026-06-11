import { Link } from "react-router-dom";

const sections = [
  {
    title: "Our Vision",
    content:
      "Softwayx aims to make modern business software simple, affordable, and accessible for companies of every size. We want technology to be a growth engine, not a barrier.",
  },
  {
    title: "Our Mission",
    content:
      "We build product-first digital solutions that automate workflows, improve collaboration, and help businesses scale faster with less friction.",
  },
  {
    title: "What We Do",
    content:
      "Softwayx develops SaaS platforms, web applications, and business automation tools focused on operations, customer engagement, and revenue management.",
  },
  {
    title: "How We Serve",
    content:
      "We partner with small businesses, startups, and growing enterprises to deliver software services, product design, and long-term support.",
  },
];

const AboutNew = () => {
  return (
    <main className="section-padding-top pt-24 section-padding-bottom">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <span className="badge mb-4 inline-block">About Softwayx</span>
          <h1 className="section-title mb-5">
            Vision, Mission, and <span className="gradient-text">Purpose</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Softwayx is a digital product brand designed to help modern
            businesses run smoother, serve customers better, and scale with
            confidence.
          </p>
        </div>

        <div className="space-y-6 animate-slide-up">
          {sections.map((section) => (
            <div key={section.title} className="card">
              <h2 className="text-white text-2xl font-semibold mb-3">
                {section.title}
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutNew;
