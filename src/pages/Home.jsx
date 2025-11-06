import Header from '../components/Header';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import FeaturedContent from '../components/FeaturedContent';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <FilterBar />
      <FeaturedContent />
      <Footer />
    </div>
  );
};

export default Home;
