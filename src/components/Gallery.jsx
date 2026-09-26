import { ArchIcon } from './Ornament.jsx'

const PLATES = [
  { 
    image: '/nalli-nihari-stew-free-photo.webp', 
    name: 'Nahari', 
    note: 'Beef / mutton, slow-cooked' 
  },
  { 
    image: '/kulcha.webp', 
    name: 'Tandoor Kulcha', 
    note: 'Baked fresh to order' 
  },
  { 
    image: '/pasanda.webp', 
    name: 'Pasanda', 
    note: 'Papaya-marinated, grilled' 
  },
  { 
    image: '/biriyani.webp', 
    name: 'Biryani', 
    note: 'Slow-cooked, dum style' 
  },
  { 
    image: '/kheer.webp', 
    name: 'Kheer', 
    note: "The house's signature finish" 
  },
  { 
    image: '/sheermaal.webp', 
    name: 'Sheermal', 
    note: 'Saffron-kissed, tandoor-baked' 
  }
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">GALLERY</p>
          <h2>A taste of the table</h2>
          <p>
            Authentic preparations straight from our kitchen at Akbari Gate.
          </p>
        </div>
        <div className="gallery-grid">
          {PLATES.map((p) => (
            <div className="plate" key={p.name}>
              <ArchIcon>
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="plate-img" 
                  loading="lazy" 
                />
              </ArchIcon>
              <h4>{p.name}</h4>
              <p>{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}