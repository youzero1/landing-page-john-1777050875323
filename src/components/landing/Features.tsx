import { Layers, Zap, Shield, BarChart2, Globe, Puzzle } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    icon: <Layers size={26} />,
    title: 'Component Library',
    description: 'A battle-tested library of 200+ ready-to-use components that adapt to any design language.',
  },
  {
    icon: <Zap size={26} />,
    title: 'Lightning Fast',
    description: 'Optimized build pipeline and runtime ensure your apps load instantly, everywhere.',
  },
  {
    icon: <Shield size={26} />,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with SSO, RBAC, and audit logs built in from day one.',
  },
  {
    icon: <BarChart2 size={26} />,
    title: 'Advanced Analytics',
    description: 'Real-time dashboards that surface actionable insights about your product and users.',
  },
  {
    icon: <Globe size={26} />,
    title: 'Global CDN',
    description: 'Deploy to 200+ edge locations worldwide for sub-50ms response times globally.',
  },
  {
    icon: <Puzzle size={26} />,
    title: '100+ Integrations',
    description: 'Connect to your existing stack in minutes with first-class API and webhook support.',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Features</span>
          <h2 className={styles.title}>Everything you need to ship</h2>
          <p className={styles.subtitle}>
            Lumina bundles best-in-class tooling so your team spends time building products,
            not wrestling with infrastructure.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.iconWrap}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
