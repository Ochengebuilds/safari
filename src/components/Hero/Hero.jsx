import { motion } from 'framer-motion';
import './Hero.css';
const Hero = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const image3D = {
    hidden: { opacity: 0, x: 100, rotateY: 30 },
    visible: { opacity: 1, x: 0, rotateY: -10, transition: { duration: 1, delay: 0.2 } }
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        {/* Animated Text Side */}
        <motion.div 
          className="hero-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h4 className="hero-subtitle">WELCOME TO ZOOLAND</h4>
          <h1 className="hero-title">Adventure <br /> <span>Awaits in the Wild</span></h1>
          <p className="hero-description">Experience the majesty of nature through our immersive safari tours.</p>
          <div className="hero-btns">
            <button className="btn-3d-primary">GET STARTED</button>
            <button className="btn-3d-outline">LEARN MORE</button>
          </div>
        </motion.div>

        {/* Animated 3D Image Side */}
        <motion.div 
          className="hero-image-stack"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={image3D}
        >
          <div className="img-wrapper main-img float-animation">
            <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1000&auto=format&fit=crop" alt="Elephant" />
          </div>
          <div className="accent-shape"></div>
        </motion.div>
      </section>
    </div>
  );
};
export default Hero;