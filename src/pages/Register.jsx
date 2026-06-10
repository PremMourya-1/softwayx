import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { userApi } from "../Service/api";

const initialValues = { name: "", email: "", phone: "", password: "" };
const initialErrors = { name: "", email: "", phone: "", password: "" };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [message, setMessage] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [generalError, setGeneralError] = useState("");

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = window.setInterval(() => {
      setCountdown((current) => Math.max(current - 1, 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [countdown]);

  const validateEmail = () => {
    if (!email.trim()) return "Email is required.";
    if (!emailRegex.test(email)) return "Enter a valid email.";
    return "";
  };

  const validate = () => {
    const e = { ...initialErrors };
    if (!values.name.trim()) e.name = "Full name is required.";
    if (!values.email.trim()) e.email = "Email is required.";
    else if (!emailRegex.test(values.email)) e.email = "Enter a valid email.";
    if (!values.phone.trim()) e.phone = "Phone number is required.";
    else if (!/^\d{10,15}$/.test(values.phone.replace(/\s/g, "")))
      e.phone = "Enter a valid phone number.";
    if (!values.password) e.password = "Password is required.";
    else if (values.password.length < 8)
      e.password = "Password must be at least 8 characters.";
    return e;
  };

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const sendCode = async (e) => {
    e.preventDefault();
    setGeneralError("");
    const error = validateEmail();
    if (error) {
      setEmailError(error);
      return;
    }
    setSending(true);
    setEmailError("");
    try {
      await userApi.sendVerificationCode({ email });
      setMessage("Verification code sent. Enter the OTP below.");
      setStep("otp");
      setCountdown(30);
    } catch (err) {
      setGeneralError(
        err?.response?.data?.message ||
          "Unable to send verification code. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setGeneralError("");
    if (!otp.trim()) {
      setOtpError("OTP is required.");
      return;
    }
    setVerifying(true);
    setOtpError("");
    try {
      await userApi.verifyEmailOtp({ email, otp });
      setValues((prev) => ({ ...prev, email }));
      setMessage("Email verified. Complete the registration form.");
      setStep("register");
    } catch (err) {
      setGeneralError(
        err?.response?.data?.message ||
          "OTP verification failed. Please try again.",
      );
    } finally {
      setVerifying(false);
    }
  };

  const resendCode = async () => {
    setGeneralError("");
    if (countdown > 0) return;
    const error = validateEmail();
    if (error) {
      setEmailError(error);
      return;
    }
    setSending(true);
    try {
      await userApi.sendVerificationCode({ email });
      setMessage("Verification code resent. Check your inbox.");
      setCountdown(30);
    } catch (err) {
      setGeneralError(
        err?.response?.data?.message ||
          "Unable to resend code. Please try again.",
      );
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError("");
    const validationErrors = validate();
    const hasErrors = Object.values(validationErrors).some(Boolean);
    if (hasErrors) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    try {
      await userApi.freeRegister(values);
      setSuccess(true);
    } catch (err) {
      setGeneralError(
        err?.response?.data?.message ||
          "Registration failed. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding-top pt-24">
        <div className="glass rounded-2xl p-10 text-center max-w-md w-full mx-4 animate-slide-up">
          <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-3xl mx-auto mb-6">
            ✓
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">You're In!</h2>
          <p className="text-gray-400 mb-8">
            Your account was created successfully. We'll reach out shortly.
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
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="container-custom relative z-10">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <span className="badge mb-4 inline-block">Free Trial</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Start with{" "}
              <span className="gradient-text">Email Verification</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Verify your email first, then complete the registration form.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 md:p-8 animate-slide-up">
            {message && (
              <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-100 mb-6">
                {message}
              </div>
            )}
            {generalError && (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-100 mb-6">
                {generalError}
              </div>
            )}

            {step === "email" && (
              <form onSubmit={sendCode} className="space-y-6">
                <Input
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  error={emailError}
                  autoComplete="email"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full py-3 text-base"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Verification Code"}
                </Button>
              </form>
            )}

            {step === "otp" && (
              <form onSubmit={verifyOtp} className="space-y-6">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4">
                  <p className="text-sm text-gray-300 mb-2">
                    Verifying{" "}
                    <span className="font-semibold text-white">{email}</span>
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-green-300">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    Email verification pending
                  </div>
                </div>
                <Input
                  label="Enter OTP"
                  type="text"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setOtpError("");
                  }}
                  error={otpError}
                  autoComplete="one-time-code"
                />
                <div className="flex items-center justify-between gap-3">
                  <Button
                    type="submit"
                    variant="primary"
                    className="flex-1 py-3 text-base"
                    disabled={verifying}
                  >
                    {verifying ? "Verifying..." : "Verify OTP"}
                  </Button>
                  <button
                    type="button"
                    onClick={resendCode}
                    disabled={countdown > 0 || sending}
                    className={`text-sm font-medium ${countdown > 0 || sending ? "text-gray-500" : "text-brand-blue hover:text-white"}`}
                  >
                    {countdown > 0 ? `Resend in ${countdown}s` : "Resend OTP"}
                  </button>
                </div>
              </form>
            )}

            {step === "register" && (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <Input
                  label="Full Name"
                  type="text"
                  value={values.name}
                  onChange={handleChange("name")}
                  error={errors.name}
                  autoComplete="name"
                />
                <div className="relative">
                  <Input
                    label="Email Address"
                    type="email"
                    value={values.email}
                    disabled
                    error={errors.email}
                    autoComplete="email"
                  />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-xs text-green-200">
                    ✓ Verified
                  </span>
                </div>
                <Input
                  label="Phone Number"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange("phone")}
                  error={errors.phone}
                  autoComplete="tel"
                />
                <Input
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange("password")}
                  error={errors.password}
                  autoComplete="new-password"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full py-3 text-base"
                  disabled={submitting}
                >
                  {submitting ? "Creating account..." : "Complete Registration"}
                </Button>
              </form>
            )}

            <p className="text-center text-gray-500 text-xs mt-6">
              By registering, you agree to our{" "}
              <Link to="/terms" className="text-blue-400 hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-blue-400 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Already have an account?{" "}
            <Link
              to="/register"
              className="text-brand-blue hover:underline font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
