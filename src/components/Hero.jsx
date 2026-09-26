export default function Hero() {
  return (
    <header className="hero" id="top">
      <video className="hero-bg-video" src="/nihari-making.mp4" autoPlay muted loop playsInline />
      
      <div className="wrap hero-inner">
        <div className="hero-frame">
          <p className="eyebrow reveal r1">Akbari Gate · Chowk · Old Lucknow · Est. 1973</p>
          <h1 className="reveal r2">Mubeen's Kulche Nihari</h1>
          <p className="tag reveal r3">
            Slow-cooked overnight, served at dawn — the Nahari-Kulcha of old
            Chowk, from the same family for three generations.
          </p>
          <div className="cta-row reveal r4">
            <a className="btn btn-solid" href="tel:+911234567890">
              Call to Reserve
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
