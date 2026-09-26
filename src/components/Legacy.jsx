const TIMELINE = [
  {
    year: '1973',
    title: 'Haji Mubeen opens the shop',
    body: 'A small eatery at Akbari Gate begins serving Nahari-Kulcha and Pasanda to the old city.'
  },
  {
    year: 'Second generation',
    title: 'Mohammad Rizwan carries it forward',
    body: "Haji Mubeen's son takes on the kitchen, keeping the recipes and the slow method unchanged."
  },
  {
    year: 'Third generation',
    title: 'The grandsons join the kitchen',
    body: 'Today Mohammad Rizwan runs the house alongside his sons — still cooked overnight, still served the same way, a fixture of old-city Lucknow.'
  }
]

export default function Legacy() {
  return (
    <section className="legacy" id="legacy">
      <div className="wrap legacy-grid">
        <div>
          <div className="section-head">
            <p className="kicker">THE LEGACY</p>
            <h2>Three generations at Akbari Gate</h2>
          </div>
          <div className="legacy-copy">
            <p>
              In the lanes of old Chowk, near Akbari Gate, Haji Mubeen began serving
              real Mughlai food — the kind cooked the long way, overnight, over slow
              charcoal heat. What started as a modest eatery grew into one of
              Lucknow's most trusted names for Nahari-Kulcha, spoken of in the same
              breath as the city's oldest nihari houses.
            </p>
            <p>
              The nihari here is cooked through the night — meat and marrow simmered
              for hours until it turns silken, sometimes finished the traditional
              Shab-Deg way. It's eaten with kulcha baked fresh in a clay tandoor, the
              dough enriched with milk and ghee so it stays soft at the centre and
              faintly smoky at the edge.
            </p>
            <p>
              The kitchen's other signature, Pasanda — thin cuts of mutton marinated
              in raw papaya and grilled on skewers in a copper lagan — was
              popularised in Lucknow by Haji Mubeen himself, adapted from a Bhopal
              original into something the city now calls its own.
            </p>
            <p className="signoff">
              "Our food is no less than any cuisine in the world — we've just never
              needed to say so."
            </p>
          </div>
        </div>
        <div className="timeline">
          {TIMELINE.map((item) => (
            <div className="tl-item" key={item.year}>
              <p className="tl-year">{item.year}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
