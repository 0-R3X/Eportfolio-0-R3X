import React, { useState, useEffect, useRef } from 'react';
import TypedText from './TypedText';

import "../css/style.switcher.css"
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';
import NavItem from './NavItem';

export default function Home({ isScrolled, setIsScrolled }) {

const [activeSection, setActiveSection] = useState('home');
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const handleSectionIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observeElement = (elementRef) => {
      if (elementRef.current) {
        const observer = new IntersectionObserver(handleSectionIntersection, options);
        observer.observe(elementRef.current);
        return observer;
      }
      return null;
    };

    const observers = [
      observeElement(homeRef),
      observeElement(aboutRef),
      observeElement(portfolioRef),
      observeElement(contactRef),
    ].filter(Boolean);

    return () => {
      observers.forEach((observer) => {
        if (observer) {
          observer.disconnect();
        }
      });
    };
  }, []);
  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
    setIsScrolled(true);
  };

  const handleHireMeClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="aside">
          <div className="logo">
              <a href="/"><span>E</span>-Portfolio</a>
          </div>
          <div className="nav-toggler">
              <span></span>
          </div>
          <ul className="nav">
            <NavItem targetSection="home" active={activeSection === 'home'} handleClick={handleNavClick} scrolled={isScrolled}/>
            <NavItem targetSection="about" active={activeSection === 'about'} handleClick={handleNavClick} scrolled={isScrolled}/>
            <NavItem targetSection="portfolio" active={activeSection === 'portfolio'} handleClick={handleNavClick} scrolled={isScrolled}/>
            <NavItem targetSection="contact" active={activeSection === 'contact'} handleClick={handleNavClick} scrolled={isScrolled}/>
          </ul>  
      </div>
    </nav>
    <section ref={homeRef}>
        <div className="main-container">
        <div className="main-content">
            <section className="home section" id="home">
                <div className="container">
                    <div className="row">
                        <div className="home-info padd-15">
                            <h3 className="hello">
                                Hello, my name is <span className="name">Satyam Uniyal</span>
                            </h3>
                            <h3 className="my-profession">
                                I'm a <TypedText />
                            </h3>
                            <p>My expertise is to create and design web applications and solve the bugs in a Software and many more...</p>
                            <button  className="btn" onClick={handleHireMeClick}>
                                Know Me
                            </button>
                        </div>
                        <div className="home-img padd-15">
                            <img src="img/DSC_0956.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <About  ref={aboutRef}/>
            <Portfolio  ref={portfolioRef}/>
            <Contact  ref={contactRef}/>           

        </div>
    </div>
    </section>
    </div>
  )
}
