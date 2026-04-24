import { Check } from 'lucide-react';
import clsx from 'clsx';
import styles from './Pricing.module.css';
import type { PricingPlan } from '@/types';

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for side projects and indie developers.',
    features: [
      '3 projects',
      '50 components',
      '5GB storage',
      'Community support',
      'Basic analytics',
    ],
    highlighted: false,
    cta: 'Get started free',
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For growing teams who need more power and flexibility.',
    features: [
      'Unlimited projects',
      'Full component library',
      '100GB storage',
      'Priority support',
      'Advanced analytics',
      'Custom domain',
      'Team collaboration',
    ],
    highlighted: true,
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For large organizations with advanced security needs.',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'SSO & SAML',
      'RBAC & audit logs',
      'Dedicated support',
      'SLA guarantee',
      'Custom integrations',
    ],
    highlighted: false,
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Pricing</span>
          <h2 className={styles.title}>Simple, transparent pricing</h2>
          <p className={styles.subtitle}>
            No hidden fees. No surprise bills. Start free and scale when you're ready.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(styles.card, plan.highlighted && styles.highlighted)}
            >
              {plan.highlighted && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.planTop}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.description}</p>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>/ {plan.period}</span>
                </div>
              </div>

              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <Check size={16} className={styles.checkIcon} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={clsx(styles.cta, plan.highlighted && styles.ctaHighlighted)}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
