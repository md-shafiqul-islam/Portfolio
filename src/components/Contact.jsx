import { motion as Motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ooquiev",
        "template_6x6onz1",
        formRef.current,
        "mpH4aBhQicnA58tzY"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. I’ll get back to you shortly.",
          confirmButtonColor: "#d6a553",
        });
        formRef.current.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send your message. Please try again later.",
          confirmButtonColor: "#d6a553",
        });
      });
  };

  return (
    <Motion.section
      id="contact"
      className="bg-base-300 py-20 px-6 lg:px-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="mb-12 space-y-3 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-serif">
          Get in Touch
        </h2>
        <p className="text-primary text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto tracking-wide font-sans">
          Feel free to reach out if you want to collaborate or just say hello!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Contact Info Animation */}
        <Motion.div
          className="space-y-6 text-primary text-base sm:text-lg font-sans"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-accent text-xl" />
            <span className="font-semibold">shafiqul.islam3558@gmail.com</span>
          </p>
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-accent text-xl" />
            <span className="font-semibold">+880 1717 910578</span>
          </p>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-accent text-xl" />
            <span className="font-semibold">Mymensingh, Bangladesh</span>
          </p>
        </Motion.div>

        {/* Contact Form Animation */}
        <Motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="input input-bordered w-full bg-base-100 border-secondary focus:border-accent focus:ring-1 focus:ring-accent"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="input input-bordered w-full bg-base-100 border-secondary focus:border-accent focus:ring-1 focus:ring-accent"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="textarea textarea-bordered w-full bg-base-100 border-secondary focus:border-accent focus:ring-1 focus:ring-accent"
          ></textarea>
          <button
            type="submit"
            className="bg-accent text-base-100 font-semibold tracking-wide px-6 py-3 rounded-full w-full hover:bg-accent/90 transition cursor-pointer"
          >
            Send Message
          </button>
        </Motion.form>
      </div>
    </Motion.section>
  );
};

export default Contact;
