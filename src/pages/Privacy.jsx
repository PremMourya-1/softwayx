const sections = [
    {
        title: '1. Information We Collect',
        content:
            'We collect information you provide directly to us when you register for an account, use our services, or contact us for support. This includes your name, email address, phone number, and business information.',
    },
    {
        title: '2. How We Use Your Information',
        content:
            'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.',
    },
    {
        title: '3. Data Sharing',
        content:
            'We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. We may share your data with trusted third parties who assist us in operating our platform, subject to confidentiality agreements.',
    },
    {
        title: '4. Data Security',
        content:
            'We implement industry-standard security measures including AES-256 encryption, SSL/TLS in transit, and regular security audits to protect your data from unauthorized access, alteration, or disclosure.',
    },
    {
        title: '5. Cookies',
        content:
            'We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookie settings through your browser preferences.',
    },
    {
        title: '6. Your Rights',
        content:
            'You have the right to access, update, or delete your personal information at any time. You may also opt out of marketing communications by using the unsubscribe link in any email.',
    },
    {
        title: '7. Contact Us',
        content:
            'If you have questions about this Privacy Policy, please contact us at privacy@premsoft.in or through our Contact page.',
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

export default Privacy;
