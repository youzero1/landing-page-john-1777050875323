import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <Zap size={20} />
              <span>Lumina</span>
            </a>
            <p className={styles.tagline}>
              Empowering teams to build beautiful digital experiences.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="GitHub"><Github size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.col}>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#how-it-works">How it works</a>
              <a href="#">Changelog</a>
            </div>
            <div className={styles.col}>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>
            <div className={styles.col}>
              <h4>Support</h4>
              <a href="#">Documentation</a>
              <a href="#">Community</a>
              <a href="#">Contact</a>
              <a href="#">Status</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Lumina Inc. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
