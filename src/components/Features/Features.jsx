import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        
        {/* Left Side: 3D Image Stack */}
        <div className="features-visual">
          <div className="image-card-main">
            <img src="/src/assets/hero.png" alt="Safari Experience" />
          </div>
          <div className="experience-sticker">
            <span className="sticker-num">20+</span>
            <span className="sticker-text">Years of <br/> Adventure</span>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="features-info">
          <h4 className="feat-subtitle">Why Choose Zooland</h4>
          <h2 className="feat-title">The Best Destination For Your Family Vacation</h2>
          <p className="feat-description">
            We provide a unique blend of adventure and education, ensuring 
            every visitor leaves with a deeper respect for the wild.
          </p>

          <div className="feat-list">
            <div className="feat-list-item">
              <FontAwesomeIcon icon={faCheckCircle} className="feat-check" />
              <span>Professional Safari Guides</span>
            </div>
            <div className="feat-list-item">
              <FontAwesomeIcon icon={faCheckCircle} className="feat-check" />
              <span>Safety First Environment</span>
            </div>
            <div className="feat-list-item">
              <FontAwesomeIcon icon={faCheckCircle} className="feat-check" />
              <span>Exotic Wildlife Species</span>
            </div>
          </div>

          <button className="btn-main">EXPLORE MORE</button>
        </div>

      </div>
    </section>
  );
};

export default Features;