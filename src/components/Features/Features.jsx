import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-image-side">
          <img src="/src/assets/hero.png" alt="Elephant" className="feat-img-1" />
          <div className="experience-badge">
            <h3>20+</h3>
            <p>Years Experience</p>
          </div>
        </div>
        
        <div className="features-text-side">
          <h4 className="section-subtitle">Why Choose Us</h4>
          <h2 className="section-title">The Best Destination For Your Vacation</h2>
          <p className="section-desc">
            We provide a unique blend of adventure and relaxation, ensuring 
            every visitor leaves with memories that last a lifetime.
          </p>
          
          <div className="feature-tabs">
            <button className="tab-btn active">Our Mission</button>
            <button className="tab-btn">Our Vision</button>
          </div>
          <div className="tab-content">
            <p>To protect wildlife and provide world-class education through immersive safari experiences.</p>
          </div>
          
          <button className="btn-main">READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Features;