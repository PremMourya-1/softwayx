import { useState } from "react";
import { Link } from "react-router-dom";
import chinu from "../assets/team/me.png";
import chabi from "../assets/team/chabi.png";
import bhaiyo from "../assets/team/bhaiyo.png";

const teamMembers = [
  {
    name: "Prem Mourya",
    role: "Founder & CEO",
    photo: chinu,
  },
  {
    name: "Ravi Kasotiya",
    role: "Design Lead",
    photo: chabi,
  },
  {
    name: "Karan Mourya",
    role: "Development Lead",
    photo:
      "https://ui-avatars.com/api/?name=Karan+Mourya&background=111827&color=ffffff&rounded=true",
  },
  {
    name: "Pawan Mourya",
    role: "Marketing Head",
    photo: bhaiyo,
  },
];

const TeamSection = () => {
  const [preview, setPreview] = useState(null);

  return (
    <section id="team" className="section-padding bg-[#061117]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14 animate-fade-in">
          <span className="badge mb-4 inline-block">Team</span>
          <h2 className="section-title mb-5">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Our product, design, and business team builds polished digital tools
            that help companies scale with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="glass rounded-[28px] border border-white/10 p-8 text-center shadow-[0_30px_80px_-45px_rgba(15,23,42,0.9)]"
            >
              <button
                type="button"
                onClick={() => setPreview(member.photo)}
                className="inline-flex rounded-full transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-5 shadow-glow-sm"
                />
              </button>
              <h3 className="text-white font-semibold text-lg">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{member.role}</p>
            </div>
          ))}
        </div>

        {preview ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setPreview(null)}
          >
            <div
              className="relative max-w-xl  w-full rounded-3xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Close preview"
              >
                ×
              </button>
              <img
                src={preview}
                alt="Team member preview"
                className="h-auto w-full object-contain bg-slate-950"
              />
            </div>
          </div>
        ) : null}

        <div className="relative mt-14 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_-80px_rgba(26,44,255,0.5)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.16),_transparent_32%)]" />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to join our{" "}
              <span className="gradient-text">growth journey</span>?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Work with a product-led team focused on usability, performance,
              and measurable business impact.
            </p>
            <Link to="/register" className="btn-primary text-base px-8 py-3">
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
