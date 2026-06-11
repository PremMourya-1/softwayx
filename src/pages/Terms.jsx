const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using Softwayx services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our services.",
  },
  {
    title: "2. Use of Services",
    content:
      "You agree to use our services only for lawful purposes and in a manner that does not violate any applicable laws or regulations. Misuse, unauthorized access attempts, or harmful activities on the platform are strictly prohibited.",
  },
  {
    title: "3. Account Registration",
    content:
      "Certain features of our platform may require account registration. Users are responsible for maintaining the confidentiality of their login credentials and for all activities performed under their account.",
  },
  {
    title: "4. Authentication & Security",
    content:
      "Account verification may require email-based OTP authentication for security purposes. Users are responsible for ensuring that the information provided during registration is accurate and up to date.",
  },
  {
    title: "5. Subscription & Billing",
    content:
      "Some products or services provided by Softwayx may require paid subscriptions or recurring billing. By purchasing a subscription, you agree to pay all applicable fees associated with your selected plan.",
  },
  {
    title: "6. Payments",
    content:
      "Payments are securely processed through trusted third-party payment gateways such as Razorpay. Softwayx does not store users’ debit card, credit card, or banking information.",
  },
  {
    title: "7. Intellectual Property",
    content:
      "All platform content, branding, logos, software, designs, and functionality are the intellectual property of Softwayx and may not be copied, reproduced, or distributed without permission.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      "Softwayx shall not be held liable for any indirect, incidental, or consequential damages arising from the use of or inability to use our services, including data loss, business interruption, or service downtime.",
  },
  {
    title: "9. Service Availability",
    content:
      "We strive to maintain reliable and uninterrupted services; however, we do not guarantee that the platform will always remain available, error-free, or uninterrupted.",
  },
  {
    title: "10. Termination",
    content:
      "We reserve the right to suspend or terminate user accounts that violate these Terms, misuse the platform, or engage in activities harmful to Softwayx or other users.",
  },
  {
    title: "11. Third-Party Services",
    content:
      "Our platform may use or integrate third-party services such as hosting providers, email delivery services, databases, analytics tools, or payment gateways. Use of such services may also be subject to their respective terms and policies.",
  },
  {
    title: "12. Changes to Terms",
    content:
      "Softwayx reserves the right to update or modify these Terms and Conditions at any time. Continued use of our services after updates constitutes acceptance of the revised terms.",
  },
  {
    title: "13. Governing Law",
    content:
      "These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India.",
  },
  {
    title: "14. Contact Us",
    content:
      "If you have any questions regarding these Terms and Conditions, you may contact us at [softwayxinfo@gmail.com](mailto:softwayxinfo@gmail.com).",
  },
];

const Terms = () => {
  return (
    <main className="section-padding-top pt-24 section-padding-bottom">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 animate-fade-in">
            <span className="badge mb-4 inline-block">Legal</span>
            <h1 className="section-title mb-3">
              Terms &amp; <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-gray-400 text-sm">Last updated: May 5, 2026</p>
          </div>

          <div className="space-y-6 animate-slide-up">
            {sections.map((sec) => (
              <div key={sec.title} className="card">
                <h2 className="text-white font-semibold text-lg mb-3">
                  {sec.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Terms;
