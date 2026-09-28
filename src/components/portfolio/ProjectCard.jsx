import { Link } from "react-router-dom";
import opsflowOverview from '../../assets/images/opsflow/opsflow-dashboard.png';

export function ProjectCard({ project, featured = false }) {
  return (
    <article
      id={`project-${project.id}`}
      className={`project-card project-card--${project.accent} ${featured ? "project-card--featured" : ""}`}
    >
      <div className="project-art" aria-hidden="true">
        {project.id === 'opsflow' ? <img className="project-art-image" src={opsflowOverview} alt="" /> : <div className="project-browser">
          <div className="browser-bar">
            <i />
            <i />
            <i />
            <span>{project.category}</span>
          </div>
          <div className="browser-content">
            <div className="browser-sidebar" />
            <div className="browser-main">
              <div className="browser-kicker" />
              <div className="browser-title" />
              <div className="browser-chart">
                <b />
                <b />
                <b />
                <b />
                <b />
              </div>
            </div>
          </div>
        </div>}
        <span className="project-number">{project.number}</span>
      </div>
      <div className="project-content">
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-actions">
          <Link
            to={`/projects/${project.id}`}
            className="text-link"
            aria-label={`Explore ${project.title}`}
          >
            Explore project <span aria-hidden="true">↗</span>
          </Link>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-live-link">
              Live product <span aria-hidden="true">↗</span>
            </a>
          ) : <span>Prototype</span>}
        </div>
      </div>
    </article>
  );
}
