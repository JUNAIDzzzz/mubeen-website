const REVIEWS = [
  {
    stars: 5,
    quote:
      'Add a real customer review here — keep it short and specific to a dish or visit.',
    who: 'Placeholder, Google Reviews'
  },
  {
    stars: 5,
    quote:
      'Add a real customer review here — mention what stood out, the nihari, the kulcha, the service.',
    who: 'Placeholder, Zomato'
  },
  {
    stars: 4,
    quote:
      'Add a real customer review here — a line about the old-city atmosphere works well too.',
    who: 'Placeholder, Walk-in guest'
  }
]

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">REVIEWS</p>
          <h2>What people say</h2>
          <p>Sample testimonials for layout — replace with your own customers' words.</p>
        </div>
        <div className="review-grid">
          {REVIEWS.map((r, i) => (
            <div className="review-card" key={i}>
              <p className="stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</p>
              <p className="quote">"{r.quote}"</p>
              <p className="who">— {r.who}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
