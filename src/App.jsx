import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import Atractions from './pages/Atractions';
import Tickets from './pages/Tickets';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/attractions" element={<Atractions />} />
        <Route path="/tickets" element={<Tickets />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;