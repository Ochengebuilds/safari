import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './CSS/Tickets.css';

const Tickets = () => {
  const [selected, setSelected] = useState(1);

  const tiers = [
    { id: 0, name: 'Child', price: '15', features: ['Under 12 years', 'Access to Zoo', 'Bird Show', 'Free Map'] },
    { id: 1, name: 'Adult', price: '35', features: ['Access to Zoo', 'Safari Trek', 'Bird Show', 'Photo Op'] },
    { id: 2, name: 'Family', price: '90', features: ['2 Adults + 3 Kids', 'Full Zoo Access', 'Private Guide', 'Lunch Vouchers'] }
  ];

  return (
    <>
    
      <div className="tickets-page">
        <header className="tickets-header">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            Book Your <span>Adventure</span>
          </motion.h1>
          <p>Choose the perfect pass for your wild journey.</p>
        </header>

        <div className="tickets-grid">
          {tiers.map((tier) => (
            <motion.div 
              key={tier.id}
              className={`ticket-card ${selected === tier.id ? 'active-tier' : ''}`}
              onClick={() => setSelected(tier.id)}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: tier.id * 0.1 }}
            >
              {tier.id === 1 && <div className="popular-tag">MOST POPULAR</div>}
              <h2>{tier.name}</h2>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{tier.price}</span>
              </div>
              <ul className="features-list">
                {tier.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              <button className="btn-3d-primary">SELECT TICKET</button>
            </motion.div>
          ))}
        </div>

        <motion.div className="checkout-preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <h3>Ready to go?</h3>
          <button className="btn-3d-outline checkout-btn">PROCEED TO PAYMENT</button>
        </motion.div>
      </div>

    </>
  );
};

export default Tickets;