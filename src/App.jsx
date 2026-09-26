import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Legacy from './components/Legacy.jsx'
import Gallery from './components/Gallery.jsx'
import Menu from './components/Menu.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { ArcadeDivider } from './components/Ornament.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <ArcadeDivider tone="ivory" />
      <Legacy />
      <ArcadeDivider tone="maroon" />
      <Gallery />
      <ArcadeDivider tone="ivory2" />
      <Menu />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}
