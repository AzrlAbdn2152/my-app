import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

// Import CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'; // Ini adalah file CSS kustom Anda (style.css)

function App() {
    useEffect(() => {
        // Inisialisasi Bootstrap JS
        import('bootstrap/dist/js/bootstrap.bundle.min.js');

        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
            <Footer />
            <BackToTop />
        </div>
    );
}

export default App;
