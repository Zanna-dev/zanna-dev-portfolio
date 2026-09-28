import { SectionHeading } from "../../components/common/SectionHeading";
import { MagneticLink } from "../../components/common/MagneticLink";
import { Reveal } from "../../components/common/Reveal";
import { ContactForm } from "../../components/portfolio/ContactForm";
import { ProductScene } from "../../components/portfolio/ProductScene";
import { HeroPortraitCarousel } from '../../components/portfolio/HeroPortraitCarousel';
import { ProjectCard } from "../../components/portfolio/ProjectCard";
import { Toolbox } from "../../components/portfolio/Toolbox";
import { projects } from "../../data/projects";
import { contact } from "../../data/contact";

const capabilities = [
  [
    "Interface systems",
    "Reusable React interfaces, fluid layouts, and thoughtful states that stay coherent as a product grows.",
  ],
  [
    "Product perspective",
    "Clear user flows, meaningful feedback, and close collaboration from early idea through release.",
  ],
  [
    "Quality practice",
    "Accessible interaction, performance awareness, and details that make digital products feel reliable.",
  ],
];

export function Home() {
  return (
    <div id="top">
      <section className="hero container">
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">
              <span className="pulse-dot" />
              Frontend Engineer · Nigeria
            </p>
            <h1>
              Digital products with <em>clarity</em>, character, and a pulse.
            </h1>
            <p className="hero-description">
              I’m Noro Pam. I turn thoughtful product ideas into responsive,
              expressive interfaces that people enjoy using.
            </p>
            <div className="hero-actions">
              <MagneticLink className="button button-primary" href="#work">
                Explore selected work <span aria-hidden="true">↓</span>
              </MagneticLink>
              <a className="button button-secondary" href="#contact">
                Start a project
              </a>
            </div>
          </Reveal>
          <Reveal className="hero-visual-stage" delay={120}>
            <HeroPortraitCarousel />
          </Reveal>
        </div>
        <div className="hero-footer">
          <span>Scroll to explore</span>
          <span className="hero-line" />
          <span>01 / 05</span>
        </div>
      </section>
      <section id="about" className="about-section">
        <div className="ambient-grid" />
        <div className="container about-grid">
          <p className="section-index">( 01 )</p>
          <Reveal>
            <SectionHeading
              eyebrow="The person behind the interface"
              title="The best products make complicated things feel natural."
            />
            <p className="about-copy">
              I care about the details that earn trust: a responsive layout that
              holds up under real content, feedback that explains what happened,
              and systems that help teams move faster without losing quality.
            </p>
            <p className="about-copy">
              My approach combines practical front end engineering with a close
              eye for user experience. I like working where visual craft and
              product clarity meet.
            </p>
          </Reveal>
        </div>
        <Reveal className="container about-product-showcase" delay={140}>
          <div className="about-product-copy">
            <p className="eyebrow">Engineering in motion</p>
            <h3>Every detail should explain itself.</h3>
            <p>
              I use interaction, feedback, and visual rhythm to help people
              understand a product without making them work for it.
            </p>
          </div>
          <ProductScene />
        </Reveal>
      </section>
      <section id="work" className="work-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Experiences shaped around real product problems."
              description="A curated set of dashboard, business, and product-launch work—each shown as an interface, not a thumbnail."
            />
          </Reveal>
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal
                key={project.id}
                delay={index * 100}
                className={index === 0 ? "project-reveal-featured" : ""}
              >
                <ProjectCard project={project} featured={index === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="capabilities" className="capabilities-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Working style"
              title="Craft is more than the final screen."
            />
          </Reveal>
          <div className="capability-grid">
            {capabilities.map(([title, description], index) => (
              <Reveal key={title} delay={index * 90}>
                <article className="capability">
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section id="toolbox" className="toolbox-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Toolbox"
              title="The system behind the surface."
              description="Modern front end work is a connected practice: interface craft, product thinking, and dependable delivery."
            />
          </Reveal>
          <Reveal delay={100}>
            <Toolbox />
          </Reveal>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="container contact-grid">
          <Reveal>
            <div>
              <p className="eyebrow">Let’s work together</p>
              <h2>Let’s turn an idea into an experience people remember.</h2>
              <p>
                Tell me what you are building. I’ll bring focused front end
                engineering, product perspective, and careful interaction design
                to the work.
              </p>
              <div className="contact-links" aria-label="Contact Noro">
                <a className="contact-link" href={`mailto:${contact.email}`}>
                  <span>Email</span>
                  {contact.emailLabel} <b aria-hidden="true">↗</b>
                </a>
                <a
                  className="contact-link"
                  href={contact.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>LinkedIn</span>zanna-dev <b aria-hidden="true">↗</b>
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
