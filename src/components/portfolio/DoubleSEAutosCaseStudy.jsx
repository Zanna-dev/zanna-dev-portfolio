import collection from '../../assets/images/double-s-e-autos/autos-collection.png';
import enquiry from '../../assets/images/double-s-e-autos/autos-enquiry.png';
import showroom from '../../assets/images/double-s-e-autos/autos-showroom.png';
import footer from '../../assets/images/double-s-e-autos/autos-footer.png';

const screens = [
  { src: collection, label: 'Search the collection', alt: 'Double S.E. Autos collection screen with vehicle filters and vehicle cards.', detail: 'A structured collection view makes it easy to search by vehicle type, condition, currency, and availability.' },
  { src: enquiry, label: 'Start a conversation', alt: 'Double S.E. Autos enquiry form.', detail: 'A focused enquiry flow gathers the right details before moving a customer into WhatsApp or email.' },
  { src: showroom, label: 'The showroom', alt: 'Double S.E. Autos showroom screen with vehicle discovery controls.', detail: 'The showroom gives visitors a clear route from curated discovery to a refined search experience.' },
  { src: footer, label: 'A considered close', alt: 'Double S.E. Autos footer with contact details and navigation.', detail: 'A detailed footer keeps location, contact paths, and next actions within reach at the end of the journey.' },
];

export function DoubleSEAutosCaseStudy() {
  return <>
    <section className="autos-intro" aria-labelledby="autos-in-practice">
      <div><p className="eyebrow">Digital dealership</p><h2 id="autos-in-practice">Vehicle discovery designed to feel as considered as the drive.</h2></div>
      <p>Double S.E. Autos pairs premium visual pacing with practical product interactions—helping visitors browse, compare, and begin an enquiry without losing their place.</p>
    </section>
    <section className="autos-screen-grid" aria-label="Double S.E. Autos product screens">
      {screens.map((screen, index) => <article key={screen.label} className="autos-screen">
        <div className="autos-screen-media"><img src={screen.src} alt={screen.alt} loading="lazy" /></div>
        <p className="eyebrow">0{index + 1} / {screen.label}</p><p>{screen.detail}</p>
      </article>)}
    </section>
    <section className="autos-outcomes" aria-label="Double S.E. Autos project approach">
      <article><p className="eyebrow">Discovery</p><h3>A showroom built for decisions.</h3><p>Search, filters, detailed galleries, and vehicle categorisation help a buyer move from curiosity to a shortlist with confidence.</p></article>
      <article><p className="eyebrow">Conversion</p><h3>Every route leads to a conversation.</h3><p>WhatsApp, email, and a considered enquiry flow make it simple to continue the buying journey on the customer’s terms.</p></article>
      <article><p className="eyebrow">Craft</p><h3>Premium across every viewport.</h3><p>Responsive composition, light and dark themes, and measured motion carry the showroom’s character through every screen size.</p></article>
    </section>
  </>;
}
