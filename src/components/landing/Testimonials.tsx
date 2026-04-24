import { Quote } from 'lucide-react';
import styles from './Testimonials.module.css';
import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CTO at Orbit Labs',
    avatar: 'SC',
    quote:
      'Lumina cut our time-to-market in half. The component library alone saved us thousands of hours of design and development work.',
  },
  {
    name: 'Marcus Reeves',
    role: 'Lead Engineer at Apex',
    avatar: 'MR',
    quote:
      'We evaluated every tool on the market. Lumina was the only one that truly bridged the gap between design and engineering.',
  },
  {
    name: 'Priya Nair',
    role: 'Product Manager at Helix',
    avatar: 'PN',
    quote:
      'Our team ships with so much more confidence now. The preview and testing workflows are absolutely game-changing.',
  },
  {
    name: 'James Okafor',
    role: 'Founder at Sparrow',
    avatar: 'JO',
    quote:
      'From a 2-person startup to a 40-person team — Lumina scaled perfectly with us every step of the way.',
  },
  {
    name: 'Elena Vasquez',
    role: 'Design Lead at Nova',
    avatar: 'EV',
    quote:
      'The design system integration is unlike anything else. Designers and developers are finally speaking the same language.',
  },
  {
    name: 'Tom Bergmann',
    role: 'VP Engineering at Flux',
    avatar: 'TB',
    quote:
      'Security, speed, developer experience — Lumina nails all three. I recommend it to every engineering team I meet.',
  },
];

const avatarColors = [
  '#6c63ff', '#ff6584', '#43d2c6', '#ffc107', '#22c55e', '#ef4444'
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Testimonials</span>
          <h2 className={styles.title}>Loved by thousands of teams</h2>
          <p className={styles.subtitle}>
            Don't take our word for it — hear what teams building with Lumina have to say.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={t.name} className={styles.card}>
              <Quote size={22} className={styles.quoteIcon} />
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div
                  className={styles.avatar}
                  style={{ background: avatarColors[i % avatarColors.length] }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
