import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { 
  Billing, 
  About, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Team,
  Hero, 
  Navbar, 
  Stats, 
  ContactUs,
  Events,
  Testimonials,
  Chapters,
} from './components';
import styles from './style';

const App = () => {
  return (
    <Router>
      <div className='bg-primary w-full overflow-hidden'>
        {/* Navbar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Routes */}
        <Routes>
          {/* Home Route (with section components for smooth scrolling) */}
          <Route path="/" element={
            <div className="space-y-5">  {/* Adds vertical space between sections */}
                
                  <Hero />
                {/*
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Stats id="stats" />
                </div>
              </div>
            Text and Heading */}

              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <About id="about"/>
                </div>
              </div>

              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Testimonials id="research-initiatives" />
                </div>
              </div>

              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Billing id="billing" />
                </div>
              </div>

              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <CardDeal id="card-deal" />
                </div>
              </div>

              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <CTA id="cta" />
                </div>
              </div>

              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <ContactUs id="contact" />
                </div>
              </div>
            </div>
          } />

          {/* Page Routes */}
          <Route path="/event" element={<Events />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/chapters" element={<Chapters />} />
        </Routes>

        {/* Common Footer */}
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;


