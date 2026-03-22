import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorse, faUsers, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Stats.css';

const Stats = () => {
  const statData = [
    { icon: faHorse, count: "200+", label: "Exotic Animals" },
    { icon: faUsers, count: "300+", label: "Daily Visitors" },
    { icon: faCoffee, count: "100+", label: "Food & Drinks" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {statData.map((stat, index) => (
          <div className="stat-card" key={index}>
            <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
            <h2 className="stat-count">{stat.count}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;