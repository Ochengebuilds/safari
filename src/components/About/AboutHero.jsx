import { motion } from 'framer-motion';
import './About.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <motion.div 
        className="about-hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="subtitle">Our Story</h4>
        <h1 className="title">Dedicated to <br/> <span>Wildlife Conservation</span></h1>
        <p>Founded in 2005, Zooland has grown from a small rescue center to a world-class sanctuary for exotic species.</p>
      </motion.div>
      
      <motion.div 
        className="about-hero-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="https://images.unsplash.com/photo-1516422317582-c4a05e4c9c22?q=80&w=1000&auto=format&fit=crop" alt="Savanna" />
        <div className="glass-card-3d">
          <h3>150+</h3>
          <p>Species Protected</p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;