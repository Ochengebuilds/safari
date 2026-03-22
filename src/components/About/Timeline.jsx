import { motion } from 'framer-motion';
import './All.css';
const Timeline = () => {
  const events = [
    { year: "2005", title: "The Beginning", desc: "Started as a small rescue center for local wildlife." },
    { year: "2012", title: "Expansion", desc: "Opened 500 acres of protected savanna habitat." },
    { year: "2018", title: "Global Recognition", desc: "Awarded for excellence in animal conservation." },
    { year: "2026", title: "Modern Sanctuary", desc: "Launched 3D immersive education programs." }
  ];

  return (
    <section className="timeline-section">
      <h2 className="section-title">Our Journey</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {events.map((event, i) => (
          <motion.div 
            className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="timeline-content-3d">
              <span className="year-tag">{event.year}</span>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;