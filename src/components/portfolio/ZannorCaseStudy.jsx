import storefront from '../../assets/images/zannor/zannor-storefront.png';
import edits from '../../assets/images/zannor/zannor-edits.png';
import collection from '../../assets/images/zannor/zannor-collection.png';
import journal from '../../assets/images/zannor/zannor-journal.png';
import bag from '../../assets/images/zannor/zannor-bag.png';

const screens = [
  { src: storefront, label: 'The selected collection', alt: 'Zannor storefront landing page with editorial product imagery.', detail: 'A composed storefront combines search, category navigation, and an editorial feature to make discovery feel unhurried.' },
  { src: edits, label: 'Curated edits', alt: 'Zannor category discovery and editorial shopping cards.', detail: 'Distinct editorial paths give visitors a clear reason to explore beyond a standard product grid.' },
  { src: collection, label: 'Refined discovery', alt: 'Zannor product collection with filters, category navigation, and product cards.', detail: 'Filtering, quick product context, and considered pricing details make a broad collection easy to navigate.' },
  { src: journal, label: 'Everyday living', alt: 'Zannor editorial journal feature with fashion and home products.', detail: 'Content-led moments extend the experience from purchasing into a richer, brand-defining browsing journey.' },
  { src: bag, label: 'A clear bag', alt: 'Zannor shopping bag drawer with selected products and checkout actions.', detail: 'A focused bag panel keeps quantities, prices, and next steps visible without disrupting the shopping flow.' },
];

export function ZannorCaseStudy() {
  return <>
    <section className="zannor-intro" aria-labelledby="zannor-in-practice">
      <div><p className="eyebrow">Editorial commerce</p><h2 id="zannor-in-practice">A shop shaped around taste, not just transactions.</h2></div>
      <p>Zannor brings visual storytelling and practical commerce patterns together, helping customers discover a world of products while keeping search, selection, and checkout intuitive.</p>
    </section>
    <section className="zannor-screen-grid" aria-label="Zannor product screens">
      {screens.map((screen, index) => <article key={screen.label} className="zannor-screen">
        <div className="zannor-screen-media"><img src={screen.src} alt={screen.alt} loading="lazy" /></div>
        <p className="eyebrow">0{index + 1} / {screen.label}</p><p>{screen.detail}</p>
      </article>)}
    </section>
    <section className="zannor-outcomes" aria-label="Zannor project approach">
      <article><p className="eyebrow">Discovery</p><h3>More ways to find a good thing.</h3><p>Category stories, curated edits, search, and filters support different shopping mindsets without creating visual noise.</p></article>
      <article><p className="eyebrow">Commerce</p><h3>Details stay close to the decision.</h3><p>Product cards, selected variants, bag visibility, and pricing information help customers move forward with confidence.</p></article>
      <article><p className="eyebrow">Craft</p><h3>Editorial rhythm, responsive by design.</h3><p>Typography, spacious layouts, and adaptive interface patterns keep the experience premium from large screens to small ones.</p></article>
    </section>
  </>;
}
