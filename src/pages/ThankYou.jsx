import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <main className="min-h-screen flex items-center justify-center section-padding-top pt-24">
      <div className="glass rounded-2xl p-10 text-center max-w-md w-full mx-4 animate-slide-up">
        <div className="text-5xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-white mb-3">Thank You!</h1>
        <p className="text-gray-400 mb-8">
          Your message has been received. We will contact you shortly.
        </p>
        <Link to="/" className="btn-primary inline-block px-6 py-3 text-base">
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default ThankYou;
