import React from 'react';
// Pastikan path gambar sesuai dengan struktur folder Anda
import heroImage from '../assets/ab01.jpg';

const HeroSection = () => {
    return (
        <section id="hero" className="position-relative">
            {/* Animated Background */}
            <div className="hero-background">
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
            </div>

            <div className="container">
                <div className="row align-items-center hero-row">
                    <div className="col-lg-7">
                        <div className="hero-content">
                            <div className="hero-badge mb-3">
                                <span className="badge-text">👋 Welcome to my portfolio</span>
                            </div>
                            <h1 className="hero-title mb-3">
                                Transforming Ideas into
                                <span className="text-gradient">Digital Reality</span>
                            </h1>
                            <p className="hero-subtitle mb-4">Full Stack Developer specializing in crafting modern and scalable
                                web applications</p>

                            <div className="hero-cta d-flex gap-3 mb-4">
                                <a href="#project" className="btn btn-gradient">
                                    <i className="bi bi-rocket-takeoff me-2"></i>Explore Projects
                                </a>
                                <a href="#contact" className="btn btn-outline-gradient">
                                    <i className="bi bi-envelope-paper me-2"></i>Get in Touch
                                </a>
                            </div>

                            <div className="hero-stats d-flex gap-4">
                                <div className="stat-item">
                                    <div className="stat-number">3+</div>
                                    <div className="stat-label">Years Experience</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">50+</div>
                                    <div className="stat-label">Projects</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">20+</div>
                                    <div className="stat-label">Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="hero-image-wrapper">
                            <div className="hero-image">
                                <img src={heroImage} alt="Hero" className="img-fluid" />
                            </div>
                            <div className="tech-stack-floating">
                                <div className="tech-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        alt="React" />
                                </div>
                                <div className="tech-item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                                        alt="Laravel" />
                                </div>
                                <div className="tech-item">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                                        alt="Tailwind" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
