const sections = [
  {
    title: "1. Subscription-Based Services",
    content:
      "Softwayx provides digital and subscription-based software services. By purchasing any subscription plan, users agree to the pricing, billing cycle, and features associated with the selected plan.",
  },
  {
    title: "2. No Refund Policy",
    content:
      "All payments made for subscriptions, software access, or digital services are non-refundable. Once a subscription or service has been purchased and activated, no refunds, cancellations, or partial refunds will be provided.",
  },
  {
    title: "3. User Responsibility",
    content:
      "Users are advised to review product features, pricing, and service details carefully before making a purchase. By completing a payment, users acknowledge and accept this Refund Policy.",
  },
  {
    title: "4. Service Issues",
    content:
      "If you experience any technical issues or payment-related problems, you may contact our support team. We will make reasonable efforts to resolve genuine technical concerns.",
  },
  {
    title: "5. Unauthorized Payments",
    content:
      "If you believe a payment was made without your authorization, please contact us immediately for investigation and support.",
  },
  {
    title: "6. Changes to This Policy",
    content:
      "Softwayx reserves the right to update or modify this Refund Policy at any time without prior notice.",
  },
  {
    title: "7. Contact Us",
    content:
      "For questions related to this Refund Policy, contact us at [softwayxinfo@gmail.com](mailto:softwayxinfo@gmail.com).",
  },
];

const Refund = () => {
  return (
    <main className="section-padding-top pt-24 section-padding-bottom">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 animate-fade-in">
            <span className="badge mb-4 inline-block">Legal</span>
            <h1 className="section-title mb-3">
              Refund <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-gray-400 text-sm">Last updated: June 11, 2026</p>
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

export default Refund;
