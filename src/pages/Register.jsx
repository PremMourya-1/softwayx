import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

const initialValues = { name: '', email: '', phone: '', password: '' };
const initialErrors = { name: '', email: '', phone: '', password: '' };

const Register = () => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const e = { ...initialErrors };
        if (!values.name.trim()) e.name = 'Full name is required.';
        if (!values.email.trim()) e.email = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email.';
        if (!values.phone.trim()) e.phone = 'Phone number is required.';
        else if (!/^\d{10,15}$/.test(values.phone.replace(/\s/g, '')))
            e.phone = 'Enter a valid phone number.';
        if (!values.password) e.password = 'Password is required.';
        else if (values.password.length < 8) e.password = 'Password must be at least 8 characters.';
        return e;
    };

    const handleChange = (field) => (e) => {
        setValues((prev) => ({ ...prev, [field]: e.target.value }));
        setErrors((prev) => ({ ...prev, [field]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        const hasErrors = Object.values(validationErrors).some(Boolean);
        if (hasErrors) {
            setErrors(validationErrors);
            return;
        }
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center section-padding-top pt-24">
                <div className="glass rounded-2xl p-10 text-center max-w-md w-full mx-4 animate-slide-up">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-3xl mx-auto mb-6">
                        ✓
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">You're In!</h2>
                    <p className="text-gray-400 mb-8">
                        Your account has been created. Our team will reach out within 24 hours.
                    </p>
                    <Link to="/" className="btn-primary w-full">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen flex items-center justify-center section-padding-top pt-24 pb-16">
            {/* Background glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="max-w-md mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10 animate-fade-in">
                        <span className="badge mb-4 inline-block">Free Trial</span>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            Create Your <span className="gradient-text">Account</span>
                        </h1>
                        <p className="text-gray-400 text-sm">
                            No credit card required. Set up in under 2 minutes.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="glass rounded-2xl p-6 md:p-8 animate-slide-up">
                        <form onSubmit={handleSubmit} noValidate className="space-y-6">
                            <Input
                                label="Full Name"
                                type="text"
                                value={values.name}
                                onChange={handleChange('name')}
                                error={errors.name}
                                autoComplete="name"
                            />
                            <Input
                                label="Email Address"
                                type="email"
                                value={values.email}
                                onChange={handleChange('email')}
                                error={errors.email}
                                autoComplete="email"
                            />
                            <Input
                                label="Phone Number"
                                type="tel"
                                value={values.phone}
                                onChange={handleChange('phone')}
                                error={errors.phone}
                                autoComplete="tel"
                            />
                            <Input
                                label="Password"
                                type="password"
                                value={values.password}
                                onChange={handleChange('password')}
                                error={errors.password}
                                autoComplete="new-password"
                            />

                            <Button type="submit" variant="primary" className="w-full py-3 text-base">
                                Create Account
                            </Button>
                        </form>

                        <p className="text-center text-gray-500 text-xs mt-6">
                            By registering, you agree to our{' '}
                            <Link to="/terms" className="text-blue-400 hover:underline">
                                Terms
                            </Link>{' '}
                            and{' '}
                            <Link to="/privacy" className="text-blue-400 hover:underline">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>

                    <p className="text-center text-gray-500 text-sm mt-6">
                        Already have an account?{' '}
                        <Link to="/register" className="text-brand-blue hover:underline font-medium">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Register;
