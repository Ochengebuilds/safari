import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faUsers, faLeaf, faAward } from '@fortawesome/free-solid-svg-icons';
import './Stats.css';

const Stats = () => {
  const stats = [
    { icon: faPaw, count: "250+", label: "Exotic Species", detail: "Carefully protected animals" },
    { icon: faUsers, count: "50k+", label: "Happy Visitors", detail: "Annual nature lovers" },
    { icon: faLeaf, count: "15+", label: "Natural Habitats", detail: "Preserved ecosystems" },
    { icon: faAward, count: "12", label: "Global Awards", detail: "Excellence in wildlife care" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-header">
        <h4 className="stats-subtitle">Our Impact</h4>
        <h2 className="stats-title">Nature in Numbers</h2>
        <p className="stats-desc">
          We pride ourselves on providing a safe haven for wildlife while 
          offering an educational journey for our global community.
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon-circle">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <h3 className="stat-number">{item.count}</h3>
            <h4 className="stat-label">{item.label}</h4>
            <p className="stat-detail">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;