import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <div className="container">
          <a href="/" className="logo">SkillAid</a>
          <nav>
            <a href="#how-it-works">How It Works</a>
            <a href="#featured-ngos">Featured NGOs</a>
            <a href="#testimonials">Testimonials</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Connect. Volunteer. Impact.</h1>
            <p>Join SkillAid to make a difference in the world</p>
            <button className="cta-button">Join Us to Make a Difference</button>
          </div>
        </section>

        <section className="introduction">
          <div className="container">
            <h2>Our Mission</h2>
            <p>SkillAid bridges the gap between skilled volunteers and NGOs, creating a community where talent meets purpose. Together, we're building a better world, one skill at a time.</p>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works">
          <div className="container">
            <h2>How It Works</h2>
            <div className="steps">
              {[
                { icon: '👤', title: 'Sign Up', description: 'Create your account in minutes' },
                { icon: '📄', title: 'Create Your Profile', description: 'Showcase your skills and experience' },
                { icon: '🤝', title: 'Connect with NGOs', description: 'Find projects that match your expertise' },
              ].map((step, index) => (
                <div key={index} className="step">
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="featured-ngos" className="featured-ngos">
          <div className="container">
            <h2>Featured NGOs</h2>
            <div className="ngo-list">
              {[
                {
                  name: 'EcoGuardians',
                  description: 'Protecting endangered species and their habitats',
                  image: 'placeholder.webp',
                },
                {
                  name: 'TechForAll',
                  description: 'Bringing technology education to underserved communities',
                  image: 'placeholder.webp',
                },
                {
                  name: 'GlobalHealth',
                  description: 'Providing healthcare services in developing countries',
                  image: 'placeholder.webp',
                },
              ].map((ngo, index) => (
                <div key={index} className="ngo-card">
                  <img src={ngo.image} alt={ngo.name} />
                  <h3>{ngo.name}</h3>
                  <p>{ngo.description}</p>
                  <button>Learn More</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <div className="container">
            <h2>What People Say</h2>
            <div className="testimonial-carousel">
              {[
                {
                  quote: 'SkillAid helped me find the perfect opportunity to use my skills for a cause I\'m passionate about.',
                  author: 'Sarah L., Graphic Designer',
                },
                {
                  quote: 'The volunteers we\'ve connected with through SkillAid have been instrumental in our project\'s success.',
                  author: 'John D., NGO Director',
                },
              ].map((testimonial, index) => (
                <div key={index} className="testimonial">
                  <blockquote>"{testimonial.quote}"</blockquote>
                  <cite>- {testimonial.author}</cite>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SkillAid</h3>
              <p>Connecting skilled volunteers with NGOs to make a difference.</p>
            </div>
            <div className="footer-section">
              <h3>Connect With Us</h3>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Stay Updated</h3>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} SkillAid. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;