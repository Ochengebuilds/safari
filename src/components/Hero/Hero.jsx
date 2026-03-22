import './Hero.css';


const Hero = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        {/* Left Side: Text */}
        <div className="hero-content">
          <h4 className="hero-subtitle">WELCOME TO ZOOLAND</h4>
          <h1 className="hero-title">
            Adventure <br /> 
            <span>Awaits in the Wild</span>
          </h1>
          <p className="hero-description">
            Experience the majesty of nature through our immersive safari tours. 
            Get up close with exotic wildlife in their natural habitats.
          </p>
         <div className="hero-btns">
  <button className="btn-3d-primary">GET STARTED</button>
  <button className="btn-3d-outline">LEARN MORE</button>
</div>
        </div>

        {/* Right Side: 3D Image Stack */}
        <div className="hero-image-stack">
          <div className="img-wrapper main-img">
            {/* Using a stock image URL that matches your vibe */}
            <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1000&auto=format&fit=crop" alt="Elephant" />
          </div>
          <div className="img-wrapper sub-img">
            <img src="https://images.unsplash.com/photo-1557950482-97573ee81a41?q=80&w=1000&auto=format&fit=crop" alt="Tiger" />
          </div>
          {/* This floating shape adds to the 3D effect */}
          <div className="accent-shape"></div>
        </div>
      </section>
    </div>
  );
};
export default Hero;