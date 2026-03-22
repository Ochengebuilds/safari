import { motion } from 'framer-motion';
import './All.css';

const Team = () => {
  const members = [
    { name: "Dr. Sarah Wild", role: "Head Vet", img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=200&h=200&fit=crop" },
    { name: "Mark Safari", role: "Lead Guide", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop" },
    { name: "Elena Green", role: "Conservationist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&fit=crop" }
  ];

  return (
    <section className="team-section">
      <h2 className="section-title">Meet Our Experts</h2>
      <div className="team-grid">
        {members.map((member, i) => (
          <motion.div 
            className="team-card" 
            key={i}
            whileHover={{ scale: 1.05, rotateZ: 2 }}
          >
            <div className="team-img-wrapper">
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;