import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import Input from "../components/Input";
import Button from "../components/Button";
import FaqSection from "../components/FaqSection";
import { userApi } from "../Service/api";
import toast from "react-hot-toast";

const initialRegisterValues = {
  address: "kamla nehru nagar jaipur",
  city: "jaipur",
  email: "premmourya084@gmail.com",
  gymName: "Mirror of fitnessaa",
  ownerName: "Aryash Meenaaa",
  password: "Admin@12345",
  phone: "08824644769",
  planId: "free",
  planStartDate: new Date().toISOString().slice(0, 10),
  state: "Rajasthan",
  username: "8824644769",
};

const initialRegisterErrors = {
  email: "",
  gymName: "",
  ownerName: "",
  password: "",
  phone: "",
  username: "",
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [preview, setPreview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registerValues, setRegisterValues] = useState(initialRegisterValues);
  const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors);
  const [registerSubmitting, setRegisterSubmitting] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [verificationStep, setVerificationStep] = useState("email");
  const [verifyEmail, setVerifyEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = window.setInterval(() => {
      setCountdown((current) => Math.max(current - 1, 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [countdown]);

  const resetVerification = () => {
    setVerificationStep("email");
    setVerifyEmail("");
    setEmailError("");
    setOtp("");
    setOtpError("");
    setCountdown(0);
    setSendingOtp(false);
    setVerifyingOtp(false);
  };

  const resetRegisterForm = () => {
    setRegisterValues({
      // ...initialRegisterValues,
      planStartDate: new Date().toISOString().slice(0, 10),
    });
    setRegisterErrors(initialRegisterErrors);
    setRegisterError("");
    setSuccessMessage("");
    setShowPassword(false);
    resetVerification();
  };

  const openRegisterModal = (e) => {
    e.preventDefault();
    resetRegisterForm();
    setIsModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsModalOpen(false);
    resetVerification();
  };

  const handleRegisterChange = (field) => (e) => {
    setRegisterValues((prev) => ({ ...prev, [field]: e.target.value }));
    setRegisterErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateVerifyEmail = () => {
    if (!verifyEmail.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(verifyEmail))
      return "Enter a valid email.";
    return "";
  };

  const sendVerificationCode = async (e) => {
    e.preventDefault();
    const error = validateVerifyEmail();
    if (error) {
      setEmailError(error);
      return;
    }

    setSendingOtp(true);
    setEmailError("");

    try {
      const res = await userApi.sendVerificationCode({ email: verifyEmail });
      if (res?.data?.action ?? true) {
        toast.success("Verification code sent. Enter OTP below.");
        setVerificationStep("otp");
        setCountdown(30);
      } else {
        toast.error(res?.data?.message || "Unable to send verification code.");
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          "Unable to send verification code. Please try again.",
      );
    } finally {
      setSendingOtp(false);
    }
  };

  const verifyOtpCode = async (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      setOtpError("OTP is required.");
      return;
    }

    setVerifyingOtp(true);
    setOtpError("");

    try {
      const res = await userApi.verifyEmailOtp({ email: verifyEmail, otp });
      if (res?.data?.action ?? true) {
        toast.success("Email verified. Complete the registration form.");
        setVerificationStep("register");
        setRegisterValues((prev) => ({ ...prev, email: verifyEmail }));
      } else {
        toast.error(res?.data?.message || "OTP verification failed.");
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          "OTP verification failed. Please try again.",
      );
    } finally {
      setVerifyingOtp(false);
    }
  };

  const resendOtp = async () => {
    if (countdown > 0) return;
    const error = validateVerifyEmail();
    if (error) {
      setEmailError(error);
      return;
    }

    setSendingOtp(true);

    try {
      const res = await userApi.sendVerificationCode({ email: verifyEmail });
      if (res?.data?.action ?? true) {
        toast.success("Verification code resent. Check your email.");
        setCountdown(30);
      } else {
        toast.error(res?.data?.message || "Unable to resend OTP.");
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          "Unable to resend OTP. Please try again.",
      );
    } finally {
      setSendingOtp(false);
    }
  };

  const validateRegister = () => {
    const values = registerValues || initialRegisterValues;
    const errors = {};

    if (!values.email?.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Enter a valid email.";
    }

    if (!values.username?.trim()) {
      errors.username = "Username is required.";
    }

    if (!values.gymName?.trim()) {
      errors.gymName = "Gym name is required.";
    }

    if (!values.ownerName?.trim()) {
      errors.ownerName = "Owner name is required.";
    }

    if (!values.phone?.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(values.phone.replace(/\s/g, ""))) {
      errors.phone = "Enter a valid phone number.";
    }

    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }

    return errors;
  };

  const submitRegisterForm = async (e) => {
    e.preventDefault();
    setRegisterError("");

    const errors = validateRegister();
    if (Object.keys(errors).length) {
      setRegisterErrors(errors);
      return;
    }

    setRegisterSubmitting(true);

    try {
      const res = await userApi.freeRegister(registerValues);
      if (res.data.action) {
        toast.success(
          "Registration successful! Redirecting to gymfox.softwayx.in...",
        );

        closeRegisterModal();

        const mobile = registerValues.phone;
        const password = registerValues.password;
        setTimeout(() => {
          window.open(
            `https://gymfox.softwayx.in/login?mobileno=${mobile}&password=${password}`,
            "_blank",
          );
        }, 2000);
      } else {
        toast.error(
          res.data.message || "Registration failed. Please try again.",
        );
      }
    } catch {
      toast.error("Server error. Please try again later.");
    } finally {
      setRegisterSubmitting(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center container-custom section-padding">
        <h1 className="section-title mb-4">Product Not Found</h1>
        <p className="text-gray-400 mb-8">
          The product you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/** Image preview modal */}
      {preview ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreview(null)}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && setPreview(null)}
        >
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setPreview(null);
              }}
              className="absolute -top-3 -right-3 z-50 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={preview}
              alt="Preview"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-xl"
            />
          </div>
        </div>
      ) : null}

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeRegisterModal}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && closeRegisterModal()}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl bg-[#08101e] p-6 md:p-8 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto modal-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeRegisterModal}
              className="absolute right-4 top-4 text-xl text-white/80 hover:text-white"
              aria-label="Close registration"
            >
              ✕
            </button>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                Start Free with Gym Fox
              </h2>
              <p className="text-gray-400">
                Plan includes 1 month free access. Verify your email first, then
                complete registration.
              </p>
            </div>

            {verificationStep === "email" && (
              <form
                onSubmit={sendVerificationCode}
                noValidate
                className="space-y-5"
              >
                <Input
                  label="Email Address"
                  type="email"
                  value={verifyEmail}
                  onChange={(e) => {
                    setVerifyEmail(e.target.value);
                    setEmailError("");
                  }}
                  error={emailError}
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full py-3 text-base"
                  disabled={sendingOtp}
                >
                  {sendingOtp ? "Sending code..." : "Send Verification Code"}
                </Button>
              </form>
            )}

            {verificationStep === "otp" && (
              <form onSubmit={verifyOtpCode} noValidate className="space-y-5">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4">
                  <p className="text-sm text-gray-300 mb-2">
                    A code was sent to{" "}
                    <span className="font-medium text-white">
                      {verifyEmail}
                    </span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Enter it below to verify your email and continue.
                  </p>
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
                  required
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto py-3 text-base"
                    disabled={verifyingOtp}
                  >
                    {verifyingOtp ? "Verifying..." : "Verify OTP"}
                  </Button>
                  <button
                    type="button"
                    onClick={resendOtp}
                    disabled={countdown > 0 || sendingOtp}
                    className={`text-sm font-medium ${
                      countdown > 0 || sendingOtp
                        ? "text-gray-500"
                        : "text-brand-blue hover:text-white"
                    }`}
                  >
                    {countdown > 0 ? `Resend in ${countdown}s` : "Resend OTP"}
                  </button>
                </div>
              </form>
            )}

            {verificationStep === "register" && (
              <form
                onSubmit={submitRegisterForm}
                noValidate
                className="space-y-5"
              >
                <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4">
                  <p className="text-sm text-green-100">
                    Your email has been verified — continue with registration.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Gym Name"
                    value={registerValues.gymName}
                    onChange={handleRegisterChange("gymName")}
                    error={registerErrors.gymName}
                    required
                  />
                  <Input
                    label="Owner Name"
                    value={registerValues.ownerName}
                    onChange={handleRegisterChange("ownerName")}
                    error={registerErrors.ownerName}
                    required
                  />
                  <div className="relative">
                    <Input
                      label="Email Address"
                      type="email"
                      value={registerValues.email}
                      disabled
                      error={registerErrors.email}
                      required
                    />
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-xs text-green-200">
                      ✓ Verified
                    </span>
                  </div>
                  <Input
                    label="Username"
                    value={registerValues.username}
                    onChange={handleRegisterChange("username")}
                    error={registerErrors.username}
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    value={registerValues.phone}
                    onChange={handleRegisterChange("phone")}
                    error={registerErrors.phone}
                    required
                  />
                  <div className="relative">
                    <Input
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      value={registerValues.password}
                      onChange={handleRegisterChange("password")}
                      error={registerErrors.password}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  <Input
                    label="City"
                    value={registerValues.city}
                    onChange={handleRegisterChange("city")}
                  />
                  <Input
                    label="State"
                    value={registerValues.state}
                    onChange={handleRegisterChange("state")}
                  />
                  <div className="relative col-span-2">
                    <textarea
                      rows={4}
                      placeholder="Address"
                      value={registerValues.address}
                      onChange={handleRegisterChange("address")}
                      className="input-field peer h-28 resize-none"
                    />
                    <label className="input-label top-3 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-brand-blue peer-focus:bg-brand-dark peer-focus:px-1 peer-[&:not(:placeholder-shown)]:-top-2.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gray-400 peer-[&:not(:placeholder-shown)]:bg-brand-dark peer-[&:not(:placeholder-shown)]:px-1">
                      Address
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-gray-400">
                    Plan: <span className="text-white">1 Month Free</span> ·
                    Start date:{" "}
                    <span className="text-white">
                      {registerValues.planStartDate}
                    </span>
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto px-6 py-3 text-base"
                    disabled={registerSubmitting}
                  >
                    {registerSubmitting
                      ? "Submitting..."
                      : "Submit Registration"}
                  </Button>
                </div>
                {registerError && (
                  <p className="text-sm text-red-400">{registerError}</p>
                )}
                {successMessage && (
                  <p className="text-sm text-emerald-400">
                    {successMessage}. Redirecting to gymfox.softwayx.in...
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      ) : null}

      <main className="section-padding-top pt-24 md:pt-28 px-0 ">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/#products"
              className="hover:text-white transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-white">{product.title}</span>
          </nav>
        </div>
        {/* Hero */}
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 xl:gap-16 items-center mb-20 lg:mb-28">
            {/* Left Content */}
            <div className="animate-slide-up relative z-10">
              {/* Badge + Logo */}
              <div className="flex items-center gap-4 mb-8">
                {/* Logo */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_10px_40px_-12px_rgba(255,255,255,0.35)] ring-1 ring-white/10">
                  <img
                    src={product.logo}
                    alt={product.title}
                    className="h-11 w-11 object-contain"
                  />
                </div>

                {/* Badge */}
                <span className="inline-flex items-center rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue backdrop-blur-md">
                  {product.short}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-6">
                {product.title}
              </h1>

              {/* Tagline */}
              <p className="text-light text-sm  font-medium leading-relaxed max-w-2xl mb-5">
                {product.tagline}
              </p>

              {/* Description */}
              <p className="text-slate-400 text-[15px] sm:text-base leading-8 max-w-2xl mb-10">
                {product.description}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                {product.id === "gym-crm" ? (
                  <button
                    onClick={openRegisterModal}
                    className="inline-flex items-center justify-center rounded-2xl bg-brand-blue px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500 hover:shadow-[0_15px_40px_-12px_rgba(37,99,235,0.6)]"
                  >
                    Get Started Free
                  </button>
                ) : (
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center rounded-2xl bg-brand-blue px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500 hover:shadow-[0_15px_40px_-12px_rgba(37,99,235,0.6)]"
                  >
                    Get Started Free
                  </Link>
                )}

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative rightSection">
              {/* Outer Glow */}
              <div
                className={`absolute -inset-6 rounded-[40px] bg-gradient-to-br ${product.color} opacity-[0.08] blur-3xl`}
              />

              {/* Main Card */}

              <div className="">
                <img
                  src={product.hero}
                  alt={product.name}
                  className="md:max-w-[500px] max-w-[300px] h-full object-contain m-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <section className="mb-20">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Key <span className="gradient-text">Features</span>
              </h2>
              <p className="text-gray-400">Everything you need in one place.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {product.features.map((feature) => (
                <div key={feature} className="card">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-brand-blue text-lg">✓</span>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#07101a] ">
          <div className="container-custom">
            {product.faq?.length ? (
              <FaqSection
                heading="Gym"
                accent="FAQ"
                subheading="Answers to common questions gym owners ask before choosing the right gym management platform."
                items={product.faq}
              />
            ) : null}
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-20">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Product <span className="gradient-text">Screenshots</span>
              </h2>
              <p className="text-gray-400">A glimpse of the interface.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.screenshots.map((shot) => {
                const src = shot.src || shot.img;
                return (
                  <div
                    key={shot.label}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1120]/90 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.25)]"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    {src ? (
                      <button
                        onClick={() => setPreview(src)}
                        className="relative block w-full"
                        aria-label={`Preview ${shot.label}`}
                      >
                        {/* Image Container */}
                        <div className="relative flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 p-4">
                          {/* Mockup Style Frame */}
                          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl">
                            {/* Top Bar */}
                            <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3 bg-white/[0.03]">
                              <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                              <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                            </div>

                            {/* Screenshot */}
                            {/* Screenshot */}
                            <div className="relative h-[165px] overflow-hidden bg-[#050816]">
                              <img
                                src={src}
                                alt={shot.label}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Bottom Info */}
                        <div className="flex items-center justify-between px-5 py-4 border-t border-white/5 bg-white/[0.02]">
                          <div>
                            <p className="text-sm font-medium text-white">
                              {shot.label}
                            </p>

                            <p className="text-xs text-slate-500 mt-1">
                              Click to preview
                            </p>
                          </div>

                          {/* Right Side */}
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition duration-300 group-hover:bg-white/[0.08]">
                            👁
                          </div>
                        </div>
                      </button>
                    ) : (
                      <div className="flex h-[320px] items-center justify-center">
                        <span className="text-5xl">{product.icon}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="container-custom">
            <div className="glass rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 pointer-events-none`}
              />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Start Using{" "}
                  <span className="gradient-text">{product.title}</span> Today
                </h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                  Set up in minutes. No credit card required. Cancel anytime.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  {product.id === "gym-crm" ? (
                    <button
                      onClick={openRegisterModal}
                      className="btn-primary text-base px-8 py-3"
                    >
                      Register / Get Started
                    </button>
                  ) : (
                    <Link
                      to="/register"
                      className="btn-primary text-base px-8 py-3"
                    >
                      Register / Get Started
                    </Link>
                  )}
                  <Link to="/" className="btn-ghost text-base">
                    ← Back to Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;
