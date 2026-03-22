import './Hero.css';

const Hero = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h4 className="hero-subtitle">Welcome to Zooland</h4>
          <h1 className="hero-title">
            Adventure <br /> 
            <span>Awaits in the Wild</span>
          </h1>
          <p className="hero-description">
            Experience the majesty of nature through our immersive safari tours. 
            Get up close with exotic wildlife in their natural habitats.
          </p>
          <div className="hero-btns">
            <button className="btn-main">GET STARTED</button>
            <button className="btn-outline">LEARN MORE</button>
          </div>
        </div>

        <div className="hero-image-stack">
          {/* Main large image (Parrot) */}
          <div className="img-wrapper main-img">
            <img src="/src/assets/hero.png" alt="Safari Wildlife" />
          </div>
          {/* Smaller overlapping image (Tiger) */}
          <div className="img-wrapper sub-img">
            <img src="/src/assets/hero.png" alt="Tiger" /> 
            {/* Note: Use your tiger image here once ready */}
          </div>
          {/* Decorative 3D element */}
          <div className="accent-shape"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;