
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a className="brand" href="#home">
          <span>Roshen<span className="accent">.</span></span>
        </a>

        <p>
          Designed and built by Roshen Kingsley ·{' '}
          {new Date().getFullYear()}
        </p>

        <a className="back-to-top" href="#home" aria-label="Back to top">
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}
