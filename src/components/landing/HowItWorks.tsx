import { UserPlus, Settings, Rocket } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: '01',
    icon: <UserPlus size={28} />,
    title: 'Create your workspace',
    description:
      'Sign up in seconds. Invite your team, set permissions, and configure your workspace to match how you work.',
  },
  {
    number: '02',
    icon: <Settings size={28} />,
    title: 'Configure your stack',
    description:
      'Connect your existing tools, choose your components, and set up your design tokens — all from one interface.',
  },
  {
    number: '03',
    icon: <Rocket size={28} />,
    title: 'Ship with confidence',
    description:
      'Build, preview, test, and deploy — all in one seamless workflow. Go from idea to production in hours, not weeks.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>How It Works</span>
          <h2 className={styles.title}>Up and running in minutes</h2>
          <p className={styles.subtitle}>
            Three simple steps to transform how your team builds and ships digital products.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, idx) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNum}>{step.number}</div>
                {idx < steps.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepContent}>
                <div className={styles.iconWrap}>{step.icon}</div>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
