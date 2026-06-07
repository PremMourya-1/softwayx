import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Input from "../components/Input";
import Button from "../components/Button";
import { submitContact } from "./contactService";

const contactInfo = [
  { icon: "📧", label: "Email", value: "softwayxinfo@gmail.com" },
  { icon: "📞", label: "Phone", value: "+91 8824 644769" },
  {
    icon: "🏢",
    label: "Office",
    value: "Kamla Nehru Nagar Ajmer Road Jaipur , Rajasthan, India",
  },
  { icon: "⏰", label: "Hours", value: "Mon–Fri, 9am–6pm IST" },
];

const Contact = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};

    if (!values.name.trim()) e.name = "Name is required.";

    if (!values.mobile.trim()) {
      e.mobile = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(values.mobile)) {
      e.mobile = "Enter a valid 10-digit mobile number.";
    }

    if (!values.subject.trim()) e.subject = "Subject is required.";

    if (!values.message.trim()) e.message = "Message is required.";

    return e;
  };

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);

    try {
      const success = await submitContact(values);
      if (success) {
        setValues({ name: "", mobile: "", subject: "", message: "" });
        setTimeout(() => {
          history.push("/thank-you");
        }, 1500);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <main className="section-padding-top pt-24 section-padding-bottom">
        <div className="container-custom">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-14 animate-fade-in">
            <span className="badge mb-4 inline-block">Get In Touch</span>
            <h1 className="section-title mb-4">
              We'd Love to <span className="gradient-text">Hear From You</span>
            </h1>
            <p className="text-gray-400">
              Reach out for demos, pricing, partnerships, or support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Info */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="card flex items-start gap-4">
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">
                      {info.label}
                    </div>
                    <div className="text-white text-sm font-medium">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-6 md:p-8 animate-slide-up">
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Your Name"
                      value={values.name}
                      onChange={handleChange("name")}
                      error={errors.name}
                    />
                    <Input
                      label="Mobile No."
                      type="number"
                      value={values.mobile}
                      onChange={handleChange("mobile")}
                      error={errors.mobile}
                    />
                  </div>
                  <Input
                    label="Subject"
                    value={values.subject}
                    onChange={handleChange("subject")}
                    error={errors.subject}
                  />
                  {/* Textarea */}
                  <div className="relative">
                    <textarea
                      rows={5}
                      placeholder="Message"
                      value={values.message}
                      onChange={handleChange("message")}
                      className={`input-field resize-none peer ${errors.message ? "border-red-500" : ""}`}
                    />
                    <label className="input-label top-3 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-brand-blue peer-focus:bg-brand-dark peer-focus:px-1 peer-[&:not(:placeholder-shown)]:-top-2.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-gray-400 peer-[&:not(:placeholder-shown)]:bg-brand-dark peer-[&:not(:placeholder-shown)]:px-1">
                      Message
                    </label>
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-3 text-base"
                    disabled={submitting}
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
