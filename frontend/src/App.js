import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import HomeCarousel from "./components/carousel/carousel.jsx";
import Card from "./components/Card/Card.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutPage from "./components/AboutPage/AboutPage.jsx"
import LargeCard from "./components/LargeCard/LargeCard.jsx";
import ContactPage from "./components/ContactPage/ContactPage.jsx";
import "./App.css"


const HomePage = () => {
  return (
    <div>
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

      <div className="Home-page-content">
{/*====================================== OUR IMPACT AREAS CARDS ===============================*/}
       <div className="Our-impact">
          <h2>Our Impact Areas</h2>
          <div className="Impact-Cards-section">
            {/* These will still have buttons because showButton defaults to true */}
            <Card  
              icon={<img src="/assets/our-mission-icon.png" alt="donations icon" />}
              title="OUR MISSION"
              description= "Our mission is to driven by commitment to create positive change in the lives of the children and elderly in Uganda"
            />

            <Card  
              icon={<img src="assets/make-donation-icon.png" alt="donations icon" />}
              title="MAKE DONATIONS"
              description= "Our mission is to driven by commitment to create positive change in the lives of the children and elderly in Uganda"
            />

            <Card  
              icon={<img src="/assets/help-icon.png" alt="donations icon" />}
              title="HELP & SUPPORT"
              description= "Our mission is to driven by commitment to create positive change in the lives of the children and elderly in Uganda"
            />

            <Card  
              icon={<img src="/assets/programs-icon.png" alt="donations icon" />}
              title="OUR PROGRAMS"
              description= "Our mission is to driven by commitment to create positive change in the lives of the children and elderly in Uganda"
            />
          </div>
        </div>
 {/*====================================== LARGE CARDS ===============================*/}
                {/* Correctly placing the Large-cards-section here */}
                <div className="Large-cards-section">
                    <LargeCard 
                        imageUrl="/assets/we-fight-together.jpg" // Corrected typo and syntax
                        title="WE FIGHT TOGETHER"
                        showButton={false} 
                    >
                        {/* Pass the paragraphs as children here */}
                        <p>Humanity faces a myriad of challenges, from the pervasive grip of poverty and the devastating impact of disease to the urgent need for environmental sustainability and the pursuit of social justice. </p>
                        <p>No single individual or isolated effort can hope to overcome these deeply entrenched issues alone. It is in our collective strength, in our unified purpose and unwavering solidarity, that we find the true power to enact meaningful and lasting change. </p>
                        <p> "We Fight Together" is not merely a slogan; it is the very foundation upon which our organization is built. We believe that by forging strong partnerships with individuals, communities, other organizations, and dedicated volunteers, we can amplify our impact and reach those who need us most.</p>
                    </LargeCard>

                    <LargeCard 
                        imageUrl="/assets/we-care-about.jpg" 
                        title="WE CARE ABOUT OTHERS"
                        showButton={false}
                    >
                        {/* You can add similar paragraphs for this card */}
                        <p>At the core of our organization's mission lies a profound and unwavering commitment to the well-being of others. "We Care About Others" is not just a statement; it is the guiding principle that informs every decision we make and every action we undertake.</p>
                        <p>It is born from a deep-seated belief in the inherent dignity and value of every human life, regardless of circumstance, background, or location.</p>
                        <p>Compassion is the bedrock of our work, driving us to reach out to those facing hardship, to offer solace in times of crisis, and to empower individuals to build brighter futures for themselves and their communities.</p>
                    </LargeCard>
                </div>

{/*=====================================OUR CAUSES  CARDS ===============================*/}
        <div className="Our-causes"> 
          <h2>OUR CAUSES</h2>
          <div className="Our-causes-card-section">
            
            <Card
              icon={<img src="/assets/hunger-682834_1280.jpg" alt="donations icon" />}
              title="HUNGER AND POVERTY"
              description="Join us in our critical mission to combat hunger and alleviate the devastating effects of poverty across Uganda. Your generous contribution will directly provide essential food supplies, clean water access"
              showButton={true}
            />

            <Card
              icon={<img src="/assets/africa-education.jpg" alt="donations icon" />}
              title="EDUCATION AND TRAINING"
              description="We are helping the future of Uganda by empowering individuals through access to quality education and essential skills training. Your contribution will help us provide school resources, build educational facilities"
              showButton={true}
            />

            <Card
              icon={<img src="/assets/human-rights.jpg" alt="donations icon" />}
              title="HUMAN RIGHTS"
              description="Stand with us in our unwavering commitment to upholding fundamental human rights and ensuring dignity and justice for all. Your support will directly contribute to our efforts in advocating for the vulnerable"
              showButton={true}
            />

            <Card
              icon={<img src="assets/old-books-436498_1280.jpg" alt="donations icon" />}
              title="ARTS AND CULTURE"
              description="Help us preserve and celebrate the rich and diverse tapestry of Ugandan arts and culture for generations to come. Your generous contribution will directly support local artists."
              showButton={true}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

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
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </Navbar>
        {/* Footer or other layout elements */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;