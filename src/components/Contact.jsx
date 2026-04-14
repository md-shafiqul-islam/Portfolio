import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        "service_ooquiev",
        "template_6x6onz1",
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "mpH4aBhQicnA58tzY",
      );

      setFormStatus({
        type: "success",
        message: "Message sent successfully! I'll reply soon 🚀",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus({
        error: error,
        type: "error",
        message: "Failed to send message. Please try again or email directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8 bg-base-200">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>

          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>

          <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto">
            Have a project or idea? I’m always open to collaboration and new
            opportunities.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* LEFT INFO */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-base-300 border border-base-content/10 rounded-2xl p-8 h-full hover:border-primary/30 transition-all">
              <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <FaEnvelope className="text-primary text-xl mt-1" />
                  <div>
                    <p className="text-sm text-base-content/60">Email</p>
                    <p className="text-base-content">
                      shafiqul.islam3558@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaPhoneAlt className="text-primary text-xl mt-1" />
                  <div>
                    <p className="text-sm text-base-content/60">Phone</p>
                    <p className="text-base-content">+880 1717 910578</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                  <div>
                    <p className="text-sm text-base-content/60">Location</p>
                    <p className="text-base-content">Mymensingh, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="mt-8 pt-6 border-t border-base-content/10 flex gap-3">
                <a
                  target="_blank"
                  href="https://github.com/md-shafiqul-islam"
                  className="p-2 bg-base-200 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaGithub />
                </a>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/mdshafiqulislam1/"
                  className="p-2 bg-base-200 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-base-300 border border-base-content/10 rounded-2xl p-8 hover:border-primary/30 transition-all">
              <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-base-200 border border-base-content/10 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-base-200 border border-base-content/10 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  required
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-base-200 border border-base-content/10 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  required
                />

                {formStatus.message && (
                  <p
                    className={`text-sm ${
                      formStatus.type === "success"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {formStatus.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white p-3 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
