import { Link, useParams } from "react-router-dom";
import dashboard from "../../assets/images/opsflow/opsflow-dashboard.png";
import { OpsflowCaseStudy } from "../../components/portfolio/OpsflowCaseStudy";
import { projects } from "../../data/projects";

export function ProjectExplore() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);
  const isOpsflow = project?.id === "opsflow";

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
          {isOpsflow ? (
            <figure className="explore-preview explore-preview--image">
              <img src={dashboard} alt="OPSFLOW overview dashboard." />
              <figcaption>OPSFLOW / Overview workspace</figcaption>
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
        {isOpsflow ? (
          <OpsflowCaseStudy />
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
      </div>
    </section>
  );
}
