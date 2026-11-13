import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="hero section" id="home">
      <div className="hero-grid-pattern" />

      <div className="container hero-container">
        {/* LEFT: PERSONAL BRAND */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="availability">
            <span className="status-dot" />
            UI/UX Engineer &amp; Front-end Developer
          </div>

          <p className="hero-eyebrow">
            <span className="eyebrow-line" />
            HELLO, I'M
          </p>

          <h1 className="hero-name">
            <span className="name-first">ROSHEN</span>
            <span className="name-last gradient-text">
              KINGSLEY<span className="name-period">.</span>
            </span>
          </h1>

          <div className="hero-headline">
            <h2>Designing digital experiences.</h2>
            <h2 className="gradient-text">Building meaningful solutions.</h2>
          </div>

          <p className="hero-description">
            I turn ideas into intuitive digital experiences through thoughtful
            UI/UX design and modern front-end development.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore My Work
              <ArrowUpRight size={19} />
            </a>

            <a
              className="button button-secondary"
              href="/Roshen Kingsley Resume.pdf"
              download="Roshen-Kingsley-CV.pdf"
            >
              Download CV
              <Download size={17} />
            </a>
          </div>

          <a className="scroll-link" href="#about">
            <span className="scroll-icon">
              <ArrowDown size={15} />
            </span>
            <span>SCROLL TO EXPLORE</span>
          </a>
        </motion.div>

        {/* RIGHT: CLEAR PROFESSIONAL PORTRAIT */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="portrait-stage">
            {/* Decorative elements stay behind the portrait */}
            <div className="portrait-orbit portrait-orbit-one" />
            <div className="portrait-orbit portrait-orbit-two" />
            <div className="portrait-glow" />

            <div className="portrait-card">
              {!imageError ? (
                <img
                  src="/example2.jpg"
                  alt="Roshen Kingsley - UI/UX Engineer and Front-end Developer"
                  className="profile-image"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="profile-fallback">RK</div>
              )}

              <div className="portrait-index">
                <Sparkles size={15} />
                <span>DESIGNER &amp; DEVELOPER</span>
              </div>
            </div>

            <div className="portrait-signature">
              <span className="signature-line" />
              <span>DESIGN</span>
              <span className="signature-cross">×</span>
              <span>TECHNOLOGY</span>
              <span className="signature-line" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
