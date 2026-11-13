
import { motion } from 'framer-motion';
import { Palette, Code2, Lightbulb, GraduationCap } from 'lucide-react';

const skills = [
  'Figma',
  'UI/UX Design',
  'Wireframing',
  'Prototyping',
  'React',
  'JavaScript',
  'HTML & CSS',
  'Responsive Design',
  'Git',
];

const strengths = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Designing clean, accessible and user-friendly digital interfaces.',
  },
  {
    icon: Code2,
    title: 'Front-end Development',
    description:
      'Turning interface concepts into responsive and functional websites.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description:
      'Combining analytical thinking, research and creativity to solve problems.',
  },
];

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Design with purpose. <span className="gradient-text">Build with impact.</span></h2>
          <p>
            A software engineering graduate passionate about creating
            meaningful digital experiences.
          </p>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="education-card">
              <div className="education-icon">
                <GraduationCap size={25} />
              </div>
              <div>
                <span className="small-label">EDUCATION</span>
                <h3>BEng (Hons) Software Engineering</h3>
                <p>London Metropolitan University</p>
                <p className="muted">Through ESOFT Metro Campus, Galle</p>
                <span className="achievement">
                  First-Class Honours · Top Performer in the Batch
                </span>
              </div>
            </div>

            <p>
              My background combines software engineering knowledge with
              practical experience in interface design, front-end development
              and digital content. I enjoy understanding user needs and
              translating them into simple, effective digital solutions.
            </p>

            <p>
              I'm interested in creating products that look polished, work
              smoothly and make technology easier to use.
            </p>
          </motion.div>

          <div className="strength-list">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="strength-card"
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="strength-icon">
                    <Icon size={23} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="skills-area">
          <h3>Tools & Technologies</h3>
          <div className="skills-list">
            {skills.map((skill) => (
              <span className="skill-tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
