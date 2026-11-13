import { Link, useParams } from "react-router-dom";
import dashboard from "../../assets/images/opsflow/opsflow-dashboard.png";
import { OpsflowCaseStudy } from "../../components/portfolio/OpsflowCaseStudy";
import autosHero from '../../assets/images/double-s-e-autos/autos-hero.png';
import { DoubleSEAutosCaseStudy } from '../../components/portfolio/DoubleSEAutosCaseStudy';
import zannorCover from '../../assets/images/zannor/zannor-cover.png';
import { ZannorCaseStudy } from '../../components/portfolio/ZannorCaseStudy';
import kyautaHealthHero from '../../assets/images/kyauta-health/kyauta-hero.png';
import { KyautaHealthCaseStudy } from '../../components/portfolio/KyautaHealthCaseStudy';
import { projects } from "../../data/projects";

export function ProjectExplore() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);
  const projectIndex = projects.findIndex((item) => item.id === projectId);
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex >= 0 && projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;
  const isAlinvero = project?.id === "alinvero";
  const isDoubleSEAutos = project?.id === 'double-s-e-autos';
  const isZannor = project?.id === 'zannor';
  const isKyautaHealth = project?.id === 'kyauta-health';

  if (!project)
    return (
      <section className="project-explore container">
        <p className="eyebrow">Project not found</p>
        <h1>This project is not available.</h1>
        <Link className="button button-primary" to="/">
          Return home
        </Link>
      </section>
    );

  return (
    <section className={`project-explore project-explore--${project.accent}`}>
      <div className="container">
        <Link className="back-link" to="/" state={{ focusProject: project.id }}>
          ← Back to selected work
        </Link>
        <div className="project-explore-hero">
          <div>
            <p className="eyebrow">
              {project.number} · {project.category}
            </p>
            <h1>{project.title}</h1>
            <p className="project-explore-summary">{project.description}</p>
            <div className="project-explore-stack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            {project.liveUrl && (
              <a
                className="button button-primary project-live-button"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit live product <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
          {isKyautaHealth ? (
            <figure className="explore-preview explore-preview--image explore-preview--kyauta">
              <img src={kyautaHealthHero} alt="KyautaHealth home page for discovering care in Abuja." />
              <figcaption>KyautaHealth / Care discovery</figcaption>
            </figure>
          ) : isAlinvero ? (
            <figure className="explore-preview explore-preview--image">
              <img src={dashboard} alt="Alinvero overview dashboard." />
              <figcaption>Alinvero / Overview workspace</figcaption>
            </figure>
          ) : isDoubleSEAutos ? (
            <figure className="explore-preview explore-preview--image explore-preview--autos">
              <img src={autosHero} alt="Double S.E. Autos luxury automotive dealership home page." />
              <figcaption>Double S.E. Autos / Digital showroom</figcaption>
            </figure>
          ) : isZannor ? (
            <figure className="explore-preview explore-preview--image explore-preview--zannor">
              <img src={zannorCover} alt="Zannor editorial shopping experience." />
              <figcaption>Zannor / Editorial shopping</figcaption>
            </figure>
          ) : (
            <div className="explore-preview" aria-hidden="true">
              <div className="explore-toolbar">
                <i />
                <i />
                <i />
                <span>project / {project.id}</span>
              </div>
              <div className="explore-workspace">
                <aside>
                  <b />
                  <b />
                  <b />
                  <b />
                </aside>
                <main>
                  <div className="explore-heading" />
                  <div className="explore-stat-grid">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="explore-table">
                    <b />
                    <b />
                    <b />
                    <b />
                  </div>
                </main>
              </div>
            </div>
          )}
        </div>
        {isKyautaHealth ? (
          <KyautaHealthCaseStudy />
        ) : isAlinvero ? (
          <OpsflowCaseStudy />
        ) : isDoubleSEAutos ? (
          <DoubleSEAutosCaseStudy />
        ) : isZannor ? (
          <ZannorCaseStudy />
        ) : (
          <div className="project-explore-details">
            <article>
              <p className="eyebrow">Product focus</p>
              <h2>Making complex work easier to move through.</h2>
              <p>
                This explore page is the starting point for the full case study:
                product context, interface decisions, technical approach, and
                outcomes can be added here as the project documentation is
                ready.
              </p>
            </article>
            <article>
              <p className="eyebrow">What this demonstrates</p>
              <ul>
                <li>Responsive product interface thinking</li>
                <li>Clear information hierarchy and workflow states</li>
                <li>Reusable front end patterns built to scale</li>
              </ul>
            </article>
          </div>
        )}
        <nav className="project-pager" aria-label="Browse projects">
          {previousProject ? <Link className="project-pager-link project-pager-link--previous" to={`/projects/${previousProject.id}`}><span>Previous project</span><strong>← {previousProject.title}</strong></Link> : <span />}
          <Link className="project-pager-all" to="/#work">All selected work</Link>
          {nextProject ? <Link className="project-pager-link project-pager-link--next" to={`/projects/${nextProject.id}`}><span>Next project</span><strong>{nextProject.title} →</strong></Link> : <span />}
        </nav>
      </div>
    </section>
  );
}
