
import { motion } from 'framer-motion';
import { BriefcaseBusiness } from 'lucide-react';

const experiences = [
  {
    role: 'UI/UX Engineer cum Front-end Developer',
    company: 'Oonewoo Tech (Pvt) Ltd',
    period: 'Jan 2025 – Present',
    description:
      'Working on user interface design and front-end development to create responsive, user-friendly digital products.',
    tags: ['UI/UX Design', 'Front-end Development'],
  },
  {
    role: 'UI/UX Engineer Intern',
    company: 'Rubaai Technologies (Pvt) Ltd',
    period: 'Nov 2024 – Jan 2025',
    description:
      'Assisted with interface design, wireframes, prototypes and design improvements.',
    tags: ['Figma', 'Prototyping'],
  },
  {
    role: 'Digital Content Writer Intern',
    company: 'eBEYONDS (Pvt) Ltd',
    period: 'Aug 2024 – Nov 2024',
    description:
      'Created SEO-friendly content and supported digital marketing activities.',
    tags: ['Content Writing', 'SEO'],
  },
  {
    role: 'IT Intern · Remote',
    company: 'The Umonics Method',
    period: 'Sep 2023 – Dec 2023',
    description:
      'Supported Google Search Console inspections, domain-related tasks and basic technical support.',
    tags: ['Technical Support', 'Google Search Console'],
  },
];

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">MY JOURNEY</p>
          <h2>Experience & <span className="gradient-text">growth.</span></h2>
          <p>My professional journey across design, development and technology.</p>
        </div>

        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.article
              className="timeline-item"
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="timeline-marker">
                <BriefcaseBusiness size={18} />
              </div>

              <div className="timeline-card">
                <div className="experience-top">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="company-name">{item.company}</p>
                  </div>
                  <span className="experience-date">{item.period}</span>
                </div>

                <p className="experience-description">{item.description}</p>

                <div className="project-tech">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
