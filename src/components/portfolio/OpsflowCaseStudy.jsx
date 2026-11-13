import dashboard from '../../assets/images/opsflow/opsflow-dashboard.png';
import signIn from '../../assets/images/opsflow/opsflow-signin.png';
import people from '../../assets/images/opsflow/opsflow-people-hero.png';
import projects from '../../assets/images/opsflow/opsflow-project-cards.png';
import directory from '../../assets/images/opsflow/opsflow-directory.png';
import employeeForm from '../../assets/images/opsflow/opsflow-add-employee.png';

const productScreens = [
  {
    src: signIn,
    alt: 'Alinvero sign-in screen with a product workspace preview.',
    label: 'Confident entry point',
    detail: 'The welcome screen introduces the product’s visual language before a user enters the workspace.',
  },
  {
    src: people,
    alt: 'Alinvero project momentum chart and completion dashboard.',
    label: 'Project momentum',
    detail: 'A visual progress view gives delivery teams a clearer picture of portfolio completion over time.',
  },
  {
    src: projects,
    alt: 'Alinvero project portfolio cards.',
    label: 'Project portfolio',
    detail: 'Project cards carry status, ownership, dates, and task progress at a glance.',
  },
  {
    src: directory,
    alt: 'Alinvero employee directory with search, filters, and actions.',
    label: 'Searchable directory',
    detail: 'Filters and clear row actions support quick, confident workspace administration.',
  },
  {
    src: employeeForm,
    alt: 'Alinvero add employee form.',
    label: 'Intentional flows',
    detail: 'Focused form structure turns administrative tasks into a guided, low-friction experience.',
  },
];

export function OpsflowCaseStudy() {
  return <>
    <section className="opsflow-intro" aria-labelledby="opsflow-in-practice">
      <div>
        <p className="eyebrow">Product in practice</p>
        <h2 id="opsflow-in-practice">A shared workspace for the people behind the progress.</h2>
      </div>
      <p>Alinvero turns dense operational work into a readable system: a clear hierarchy, calm data surfaces, and direct actions for managing people and project delivery.</p>
    </section>

    <figure className="opsflow-feature-shot">
      <div className="opsflow-feature-media"><img src={dashboard} alt="Alinvero dashboard showing workspace metrics and primary actions." /></div>
      <figcaption><span>01 / Overview</span> A dashboard that keeps the next decision in view.</figcaption>
    </figure>

    <section className="opsflow-screen-grid" aria-label="Alinvero product screens">
      {productScreens.map((screen, index) => <article key={screen.label} className={`opsflow-screen opsflow-screen--${index + 1}`}>
        <div className="opsflow-screen-image"><img src={screen.src} alt={screen.alt} loading="lazy" /></div>
        <p className="eyebrow">0{index + 2} / {screen.label}</p>
        <p>{screen.detail}</p>
      </article>)}
    </section>

    <section className="opsflow-outcomes" aria-label="Alinvero project approach">
      <article><p className="eyebrow">Focus</p><h3>Operations without the visual noise.</h3><p>Information is grouped around the questions a manager needs answered—not around the underlying data model.</p></article>
      <article><p className="eyebrow">Interface system</p><h3>One language across people and projects.</h3><p>Reusable navigation, cards, filters, forms, and feedback states help the workspace feel consistent from task to task.</p></article>
      <article><p className="eyebrow">Engineering</p><h3>Built for real product behaviour.</h3><p>Responsive views, data states, focused forms, and confirmation patterns make the prototype feel considered beyond its happy path.</p></article>
    </section>
  </>;
}
