
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomeCarousel from "./components/carousel";


const HomePage = () => (
  <>
    /*
    <HomeCarousel

    
    slides = {[
      {
        imageUrl: '/assets/home-slider-1.jpg',
        title: 'Because they need your help',
        subtitle: 'Do not let them down',
      },
      {
        imageUrl: '/assets/home-slider-2.jpg',
        title: 'Together we can improve their lives',
        subtitle: 'So let\'s do it !',
      },
      {
        imageUrl: '/assets/home-slider-3.jpg',
        title: 'A penny is a lot of money, if you have not got a penny.',
        subtitle: 'You can make the difference !',
      },
    ]} 

    /> 

    <div>Home Page Content</div>
  </>
);
*/

const AboutPage = () => <div>About Page Content</div>;
const ContactUs = () => <div>Contact Us Page Content</div>;
const Causes = () => <div>Causes Page Content</div>;
const Gallery = () => <div>Gallery Page Content</div>;

function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Navbar>
        {/* Footer or other layout elements */}
      </div>
    </Router>
  );
}

export default App;

