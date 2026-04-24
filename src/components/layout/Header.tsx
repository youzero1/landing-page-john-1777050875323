import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import clsx from 'clsx';
import styles from './Header.module.css';
import type { NavLink } from '@/types';

const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <Zap size={22} className={styles.logoIcon} />
          <span>Lumina</span>
        </a>

        <nav className={clsx(styles.nav, menuOpen && styles.navOpen)}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#pricing" className={styles.navCta} onClick={() => setMenuOpen(false)}>
            Get Started
          </a>
        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
