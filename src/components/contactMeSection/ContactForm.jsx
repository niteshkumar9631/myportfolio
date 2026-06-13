import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("✅ Message Sent Successfully!");
          setLoading(false);
        },
        (error) => {
          setError("❌ Failed to send. Please try again.");
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div>
      {success && <p className="text-green-400 mb-2">{success}</p>}
      {error && <p className="text-red-400 mb-2">{error}</p>}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 text-white outline-none focus:ring-2 focus:ring-cyan"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 text-white outline-none focus:ring-2 focus:ring-cyan"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2 text-white outline-none focus:ring-2 focus:ring-cyan resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;