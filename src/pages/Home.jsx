import Hero from '../components/Hero/Hero'; // If you moved hero to a component
import Stats from '../components/Stats/Stats';
import Features from '../components/Features/Features';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
    </>
  );
};

export default Home;