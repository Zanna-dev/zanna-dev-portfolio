import facilities from '../../assets/images/kyauta-health/kyauta-facilities.png';
import howItWorks from '../../assets/images/kyauta-health/kyauta-how-it-works.png';
import careStories from '../../assets/images/kyauta-health/kyauta-care-stories.png';
import results from '../../assets/images/kyauta-health/kyauta-results.png';
import facilityPartners from '../../assets/images/kyauta-health/kyauta-facility-partners.png';
import filteredSearch from '../../assets/images/kyauta-health/kyauta-filtered-search.png';
import facilityDetail from '../../assets/images/kyauta-health/kyauta-facility-detail.png';
import footer from '../../assets/images/kyauta-health/kyauta-footer.png';

const screens = [
  {
    src: facilities,
    label: 'Care, in view',
    alt: 'KyautaHealth facility cards for clinics, diagnostics, and dental care.',
    detail: 'A clear first layer makes it easy to compare facilities, services, locations, and illustrative opening status at a glance.',
  },
  {
    src: results,
    label: 'Location-led results',
    alt: 'KyautaHealth care facilities search results for Abuja.',
    detail: 'Search results use filters and concise listing details to help a visitor narrow a broad care search without feeling lost.',
  },
  {
    src: filteredSearch,
    label: 'Focused search',
    alt: 'KyautaHealth filtered search results for teeth cleaning in Abuja.',
    detail: 'A service-specific path keeps the selected need visible, then returns a simple, relevant result instead of excess choice.',
  },
  {
    src: facilityDetail,
    label: 'Plan the visit',
    alt: 'KyautaHealth facility detail page with service information and opening hours.',
    detail: 'Facility details bring services, opening hours, location cues, and visit guidance into one reassuring decision point.',
  },
  {
    src: howItWorks,
    label: 'Guided next steps',
    alt: 'KyautaHealth how it works section explaining care discovery.',
    detail: 'A short three-step explanation establishes the product boundary: discovery and preparation, with booking handled by the facility.',
  },
  {
    src: careStories,
    label: 'Care context',
    alt: 'KyautaHealth care stories and care environment cards.',
    detail: 'People-first imagery and quiet supporting content help a clinical directory feel approachable and human.',
  },
  {
    src: facilityPartners,
    label: 'For facilities',
    alt: 'KyautaHealth facility participation information.',
    detail: 'A dedicated facilities view clearly communicates how profiles stay current and what responsible information management means.',
  },
  {
    src: footer,
    label: 'A confident close',
    alt: 'KyautaHealth footer with care discovery links and product guidance.',
    detail: 'The closing call to action reinforces the platform purpose and gives people, facilities, and returning visitors clear onward paths.',
  },
];

export function KyautaHealthCaseStudy() {
  return (
    <>
      <section className="kyauta-intro" aria-labelledby="kyauta-in-practice">
        <div>
          <p className="eyebrow">Healthcare discovery</p>
          <h2 id="kyauta-in-practice">Care information made easier to find, understand, and act on.</h2>
        </div>
        <p>
          KyautaHealth turns a potentially stressful search into a calm, responsive path: find local care, understand what a facility offers, and plan the next step with confidence.
        </p>
      </section>

      <section className="kyauta-screen-grid" aria-label="KyautaHealth product screens">
        {screens.map((screen, index) => (
          <article key={screen.label} className="kyauta-screen">
            <div className="kyauta-screen-media">
              <img src={screen.src} alt={screen.alt} loading="lazy" />
            </div>
            <p className="eyebrow">{String(index + 1).padStart(2, '0')} / {screen.label}</p>
            <p>{screen.detail}</p>
          </article>
        ))}
      </section>

      <section className="kyauta-outcomes" aria-label="KyautaHealth project approach">
        <article>
          <p className="eyebrow">Find</p>
          <h3>Search starts with place and need.</h3>
          <p>Location-aware discovery, service terms, filters, and saved facilities give visitors a practical route into their options.</p>
        </article>
        <article>
          <p className="eyebrow">Know</p>
          <h3>Details stay close to the decision.</h3>
          <p>Services, opening hours, care context, and transparent demonstration states help people arrive better prepared.</p>
        </article>
        <article>
          <p className="eyebrow">Build</p>
          <h3>Ready for the next layer.</h3>
          <p>React and TypeScript establish a responsive frontend foundation for the planned backend, verified listings, and live information.</p>
        </article>
      </section>
    </>
  );
}
