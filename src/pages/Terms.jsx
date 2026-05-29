const sections = [
    {
        title: '1. Acceptance of Terms',
        content:
            'By accessing or using PremSoft services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not access or use our services.',
    },
    {
        title: '2. Use of Services',
        content:
            'You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that violates any applicable national or international law or regulation.',
    },
    {
        title: '3. Account Registration',
        content:
            'To access certain features, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
    },
    {
        title: '4. Subscription & Billing',
        content:
            'Some services require paid subscriptions. You agree to pay all fees associated with your subscription plan. All fees are non-refundable unless otherwise stated in our Refund Policy.',
    },
    {
        title: '5. Intellectual Property',
        content:
            'All content, features, and functionality of our services are owned by PremSoft and are protected by international copyright, trademark, and other intellectual property laws.',
    },
    {
        title: '6. Limitation of Liability',
        content:
            'To the fullest extent permitted by law, PremSoft shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.',
    },
    {
        title: '7. Termination',
        content:
            'We may terminate or suspend your account immediately, without prior notice, for conduct that we determine violates these Terms or is harmful to other users, us, or third parties.',
    },
    {
        title: '8. Governing Law',
        content:
            'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.',
    },
    {
        title: '9. Changes to Terms',
        content:
            'We reserve the right to modify these Terms at any time. We will notify users of significant changes via email. Continued use of our services after changes constitutes acceptance of the new Terms.',
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
                                <h2 className="text-white font-semibold text-lg mb-3">{sec.title}</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">{sec.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Terms;
