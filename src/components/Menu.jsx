import { MenuFrame } from './Ornament.jsx'

const GROUPS = [
  {
    title: 'Nahari & Kulcha',
    items: [
      { name: 'Beef Nahari', note: 'Slow-cooked overnight, served with kulcha' },
      { name: 'Mutton Nahari', note: 'Bone marrow, thin gravy, tandoor kulcha' },
      { name: 'Extra Kulcha', note: 'Baked to order, clay tandoor' },
      { name: 'Khameeri Roti', note: 'Whole-wheat, leavened' }
    ]
  },
  {
    title: 'Grills & Biryani',
    items: [
      { name: 'Mutton Pasanda', note: 'Papaya-marinated, grilled in a copper lagan' },
      { name: 'Mutton Biryani' },
      { name: 'Chicken Biryani' }
    ]
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Kheer', note: "The house's signature finish" },
      { name: 'Sevaiyan', note: 'if served' }
    ]
  },
  {
    title: 'Add your own',
    items: [
      { name: 'Item name', note: 'Short description' },
      { name: 'Item name', note: 'Short description' }
    ]
  }
]

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">THE MENU</p>
          <h2>What's on the tandoor today</h2>
          <p>
            Dishes are confirmed from the house's known specialities — prices are
            placeholders for you to fill in.
          </p>
        </div>
        <MenuFrame>
          <div className="menu-groups">
            {GROUPS.map((group) => (
              <div className="menu-group" key={group.title}>
                <h3>{group.title}</h3>
                {group.items.map((item) => (
                  <div className="menu-row" key={item.name}>
                    <span className="name">
                      {item.name}
                      {item.note && <small>{item.note}</small>}
                    </span>
                    <span className="leader" />
                    <span className="price ph">add price</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </MenuFrame>
        <p className="menu-note">
          Menu categories and dish names above reflect Mubeen's known specialities.
          Exact prices, portion sizes, and any additional items should be added by
          the restaurant — replace every "add price" placeholder.
        </p>
      </div>
    </section>
  )
}
