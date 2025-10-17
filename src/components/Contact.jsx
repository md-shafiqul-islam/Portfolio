import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

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
          confirmButtonColor: "#d6bd98",
        });
        formRef.current.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send your message. Please try again later.",
          confirmButtonColor: "#d6bd98",
        });
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:py-24 md:px-10 lg:px-16 text-text-accent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-text-accent">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              Touch
            </span>
          </h2>

          <p className="mt-4 text-base md:text-lg lg:text-xl text-text-accent/80 leading-snug max-w-2xl mx-auto">
            Let’s connect - whether it’s a collaboration, project idea, or just
            a good conversation.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="flex-1 bg-base-300/80 backdrop-blur-sm border border-secondary/60 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-text-accent mb-6 font-serif">
              Contact Details
            </h3>

            <div className="flex flex-col lg:justify-center h-3/4 space-y-4 text-text-accent text-sm sm:text-base font-sans">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-accent text-xl" />
                <span className="font-medium">
                  shafiqul.islam3558@gmail.com
                </span>
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-accent text-xl" />
                <span className="font-medium">+880 1717 910578</span>
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent text-xl" />
                <span className="font-medium">Mymensingh, Bangladesh</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-base-300/80 backdrop-blur-sm border border-secondary/60 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-text-accent mb-6 font-serif">
              Send a Message
            </h3>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-4 sm:space-y-5"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="input input-bordered w-full bg-base-100 border-secondary focus:border-accent focus:ring-1 focus:ring-accent text-sm sm:text-base text-text-accent placeholder:text-accent/60"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="input input-bordered w-full bg-base-100 border-secondary focus:border-accent focus:ring-1 focus:ring-accent text-sm sm:text-base text-text-accent placeholder:text-accent/60"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="textarea textarea-bordered w-full bg-base-100 border-secondary focus:border-accent focus:ring-1 focus:ring-accent text-sm sm:text-base text-text-accent placeholder:text-accent/60"
              ></textarea>
              <button
                type="submit"
                className="bg-accent text-text-accent font-semibold tracking-wide px-6 py-3 rounded-full w-full hover:bg-secondary transition cursor-pointer shadow-md hover:shadow-lg shadow-accent/40 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
