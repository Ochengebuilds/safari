import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './CSS/Atractions.css';

const Attractions = () => {
  const [filter, setFilter] = useState('all');

  const items = [
    { id: 1, category: 'mammals', title: 'African Lion', img: 'https://images.unsplash.com/photo-1614027126733-757680ca3ad6?q=80&w=400&h=500&fit=crop' },
    { id: 2, category: 'birds', title: 'Flamingo Lake', img: 'https://images.unsplash.com/photo-1510629954389-c1e0da47d414?q=80&w=400&h=500&fit=crop' },
    { id: 3, category: 'experiences', title: 'Jungle Trek', img: 'https://images.unsplash.com/photo-1581262177000-813d944a9517?q=80&w=400&h=500&fit=crop' },
    { id: 4, category: 'mammals', title: 'Giant Elephant', img: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=400&h=500&fit=crop' },
    { id: 5, category: 'birds', title: 'Golden Eagle', img: 'https://images.unsplash.com/photo-1470116942485-52f23b351714?q=80&w=400&h=500&fit=crop' },
    { id: 6, category: 'experiences', title: 'Night Safari', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=400&h=500&fit=crop' },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  return (
    <>
      
      <div className="attractions-page">
        <header className="attr-header">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            Explore Our <span>Wild World</span>
          </motion.h1>
          
          <div className="filter-bar">
            {['all', 'mammals', 'birds', 'experiences'].map((cat) => (
              <button 
                key={cat}
                className={filter === cat ? 'active' : ''} 
                onClick={() => setFilter(cat)}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <motion.div layout className="attr-grid">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                className="attr-card"
              >
                <div className="attr-img-container">
                  <img src={item.img} alt={item.title} />
                  <div className="attr-overlay">
                    <h3>{item.title}</h3>
                    <button className="btn-mini">View Details</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Attractions;