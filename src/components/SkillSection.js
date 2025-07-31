import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-5 position-relative">
            <div className="floating-shapes">
                <div className="shape shape-about-1"></div>
                <div className="shape shape-about-2"></div>
            </div>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-6 text-center">
                        <h2 className="fw-bold mt-5">About Me</h2>
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <i className="bi bi-person-workspace text-primary"></i>
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-content p-4 rounded-4 bg-white shadow-sm position-relative">
                            <div className="corner-decoration top-left"></div>
                            <div className="corner-decoration top-right"></div>
                            <div className="corner-decoration bottom-left"></div>
                            <div className="corner-decoration bottom-right"></div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="about-icon-wrapper me-4">
                                    <i className="bi bi-code-square"></i>
                                </div>
                                <div>
                                    <h3 className="fw-bold mb-2">Full Stack Developer</h3>
                                    <p className="text-muted mb-0">3+ Years of Experience</p>
                                </div>
                            </div>

                            <p className="lead mb-4">Passionate about creating innovative web solutions that combine beautiful
                                design with powerful functionality. Specialized in modern web technologies and best
                                practices.</p>

                            <div className="about-highlights mb-4">
                                <div className="highlight-item">
                                    <i className="bi bi-check2-circle text-primary"></i>
                                    <span>Clean & Maintainable Code</span>
                                </div>
                                <div className="highlight-item">
                                    <i className="bi bi-check2-circle text-primary"></i>
                                    <span>Responsive Design</span>
                                </div>
                                <div className="highlight-item">
                                    <i className="bi bi-check2-circle text-primary"></i>
                                    <span>Performance Optimization</span>
                                </div>
                                <div className="highlight-item">
                                    <i className="bi bi-check2-circle text-primary"></i>
                                    <span>Modern Technologies</span>
                                </div>
                            </div>

                            <a href="#contact" className="btn btn-primary btn-lg">
                                <i className="bi bi-envelope-paper-heart me-2"></i>Let's Collaborate
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row g-4">
                            <div className="col-6">
                                <div className="achievement-card text-center p-4 rounded-4 bg-white shadow-sm">
                                    <div className="achievement-icon mb-3">
                                        <i className="bi bi-briefcase"></i>
                                    </div>
                                    <div className="achievement-number-wrapper">
                                        <span className="achievement-number">50+</span>
                                    </div>
                                    <p className="achievement-text">Projects</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="achievement-card text-center p-4 rounded-4 bg-white shadow-sm">
                                    <div className="achievement-icon mb-3">
                                        <i className="bi bi-people"></i>
                                    </div>
                                    <div className="achievement-number-wrapper">
                                        <span className="achievement-number">20+</span>
                                    </div>
                                    <p className="achievement-text">Clients</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="achievement-card text-center p-4 rounded-4 bg-white shadow-sm">
                                    <div className="achievement-icon mb-3">
                                        <i className="bi bi-code-slash"></i>
                                    </div>
                                    <div className="achievement-number-wrapper">
                                        <span className="achievement-number">15+</span>
                                    </div>
                                    <p className="achievement-text">Technologies</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="achievement-card text-center p-4 rounded-4 bg-white shadow-sm">
                                    <div className="achievement-icon mb-3">
                                        <i className="bi bi-trophy"></i>
                                    </div>
                                    <div className="achievement-number-wrapper">
                                        <span className="achievement-number">10+</span>
                                    </div>
                                    <p className="achievement-text">Awards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
