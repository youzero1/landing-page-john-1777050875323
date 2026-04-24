import { ArrowRight } from 'lucide-react';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to build something amazing?</h2>
          <p className={styles.subtitle}>
            Join 12,000+ teams who ship faster, more confidently, and more beautifully with Lumina.
          </p>
          <div className={styles.actions}>
            <a href="#pricing" className={styles.btnPrimary}>
              Get started for free <ArrowRight size={18} />
            </a>
            <a href="#" className={styles.btnGhost}>
              Talk to sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
