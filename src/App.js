import './App.css';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Personalized from './components/Personalized';
import Testimonials from './components/Testimonials';
import Thanks from './components/Thanks';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/> 
      <Categories/>
      <Testimonials/>
      <Personalized/>
      <Offers/>
      <Thanks/>
      <Footer/>
     
    </div>
  );
}

export default App;
