import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  BriefcaseBusiness,
  Code2,
  Send,
  ArrowUpRight,
} from "lucide-react";

const EMAIL = "roshenkingsley@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>
            Have an idea? <span className="gradient-text">Let's talk.</span>
          </h2>
          <p>
            Have a project, opportunity or idea in mind? I'd be happy to hear
            from you.
          </p>
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Let's create something meaningful.</h3>
            <p>
              I'm interested in opportunities involving UI/UX design, front-end
              development and digital product experiences.
            </p>

            <a className="contact-email" href={`mailto:${EMAIL}`}>
              <Mail size={20} />
              <span>{EMAIL}</span>
              <ArrowUpRight size={17} />
            </a>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness size={20} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Code2 size={20} />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <label htmlFor="email">Your email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              placeholder="Tell me about your idea..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />

            <button
              className="button button-primary submit-button"
              type="submit"
            >
              Send Message <Send size={17} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
