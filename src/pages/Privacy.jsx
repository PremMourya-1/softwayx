const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information that you provide directly to us during registration, account setup, or while using our services. This may include your name, email address, phone number, business name, and address.",
  },
  {
    title: "2. Authentication & Account Security",
    content:
      "To secure user accounts, we use email verification through OTP during registration. Users can log in using their registered email address or mobile number along with their password.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "We use the collected information to provide, maintain, and improve our services, verify user accounts, manage subscriptions, provide customer support, and ensure platform security and functionality.",
  },
  {
    title: "4. Payments",
    content:
      "Payments for subscription-based services are securely processed through trusted third-party payment gateways such as Razorpay. We do not store or process your debit card, credit card, or banking information on our servers.",
  },
  {
    title: "5. Cookies & Authentication Tokens",
    content:
      "We use cookies and authentication tokens to keep users securely logged in and improve their experience on our platform. These technologies help us maintain account security and platform functionality.",
  },
  {
    title: "6. Third-Party Services",
    content:
      "We may use trusted third-party services such as Resend for email delivery, Vercel for hosting and deployment, and MongoDB Atlas for secure database infrastructure. These providers only process data necessary to support our services.",
  },
  {
    title: "7. Data Sharing",
    content:
      "We do not sell, rent, or trade your personal information to third parties. User information may only be shared with trusted service providers required to operate and maintain our platform securely.",
  },
  {
    title: "8. Data Security",
    content:
      "We implement reasonable security measures to help protect user information from unauthorized access, misuse, or disclosure. However, no online platform can guarantee complete security.",
  },
  {
    title: "9. Emails & Communications",
    content:
      "We may send important service-related emails such as account verification OTPs, password reset emails, security notifications, and essential account updates. We currently do not send promotional or marketing emails.",
  },
  {
    title: "10. User Responsibility",
    content:
      "Users are responsible for maintaining the confidentiality of their account credentials and for all activities performed under their account.",
  },
  {
    title: "11. Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
  },
  {
    title: "12. Contact Us",
    content:
      "If you have any questions regarding this Privacy Policy, you can contact us at [softwayxinfo@gmail.com](mailto:softwayxinfo@gmail.com).",
  },
];

const Privacy = () => {
  return (
    <main className="section-padding-top pt-24 section-padding-bottom">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 animate-fade-in">
            <span className="badge mb-4 inline-block">Legal</span>
            <h1 className="section-title mb-3">
              Privacy <span className="gradient-text">Policy</span>
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

export default Privacy;
