import { ArrowRight, Play, Star } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>
      <div className={styles.container}>
        <div className={styles.badge}>
          <Star size={13} fill="currentColor" />
          <span>Trusted by 12,000+ teams worldwide</span>
        </div>

        <h1 className={styles.headline}>
          Build stunning products
          <span className={styles.highlight}> 10x faster</span>
        </h1>

        <p className={styles.subheadline}>
          Lumina gives your team the tools, components, and workflows to design and ship
          beautiful digital experiences — without the complexity.
        </p>

        <div className={styles.actions}>
          <a href="#pricing" className={styles.btnPrimary}>
            Start for free
            <ArrowRight size={18} />
          </a>
          <a href="#how-it-works" className={styles.btnGhost}>
            <span className={styles.playBtn}>
              <Play size={14} fill="currentColor" />
            </span>
            See how it works
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>12k+</span>
            <span className={styles.statLabel}>Active teams</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>98%</span>
            <span className={styles.statLabel}>Satisfaction rate</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>4.9/5</span>
            <span className={styles.statLabel}>Average rating</span>
          </div>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.dots}>
              <span /><span /><span />
            </div>
            <div className={styles.cardTitle}>Project Dashboard</div>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.progressRow}>
              <span>Design System</span>
              <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: '84%' }} /></div>
              <span className={styles.pct}>84%</span>
            </div>
            <div className={styles.progressRow}>
              <span>Onboarding</span>
              <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: '62%' }} /></div>
              <span className={styles.pct}>62%</span>
            </div>
            <div className={styles.progressRow}>
              <span>API Integration</span>
              <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: '41%' }} /></div>
              <span className={styles.pct}>41%</span>
            </div>
            <div className={styles.metricRow}>
              <div className={styles.metric}>
                <span className={styles.metricVal}>27</span>
                <span className={styles.metricLabel}>Tasks done</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricVal}>5</span>
                <span className={styles.metricLabel}>In review</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricVal}>3</span>
                <span className={styles.metricLabel}>Blocked</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.floatBadge1}>
          <span className={styles.floatIcon}>🚀</span>
          <div>
            <p className={styles.floatTitle}>Shipped!</p>
            <p className={styles.floatSub}>v2.4.0 deployed</p>
          </div>
        </div>
        <div className={styles.floatBadge2}>
          <span className={styles.floatIcon}>⚡</span>
          <div>
            <p className={styles.floatTitle}>10x faster</p>
            <p className={styles.floatSub}>Build velocity</p>
          </div>
        </div>
      </div>
    </section>
  );
}
