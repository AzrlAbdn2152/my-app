import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 position-relative">
            <div className="floating-shapes">
                <div className="shape shape-footer-1"></div>
                <div className="shape shape-footer-2"></div>
                <div className="shape shape-footer-3"></div>
            </div>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <h4 className="fw-bold mb-3">Azril Abidin</h4>
                        <p className="mb-3">Creating innovative web solutions with modern technologies and best practices.</p>
                        <div className="social-links-footer">
                            <a href="https://www.linkedin.com/in/azril-abidin-567b22295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link-footer"><i className="bi bi-linkedin"></i></a>
                            <a href="https://github.com/AzrlAbdn2152" className="social-link-footer"><i className="bi bi-github"></i></a>
                            <a href="https://www.instagram.com/azrilll_21/" className="social-link-footer"><i className="bi bi-instagram"></i></a>
                            <a href="https://x.com/azril2152?t=E0Hi3jpfxwmxm6HErzH6vQ&s=08" className="social-link-footer"><i className="bi bi-twitter-x"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6"> {/* Removed data-aos attributes for simplicity, add back if using AOS */}
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skill">Skills</a></li>
                            <li><a href="#project">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-12"> {/* Removed data-aos attributes for simplicity, add back if using AOS */}
                        <h5 className="mb-3">Contact Info</h5>
                        <div className="footer-contact-info">
                            <div className="contact-item mb-3">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                <span>Bogor, Indonesia</span>
                            </div>
                            <div className="contact-item mb-3">
                                <i className="bi bi-envelope-fill me-2"></i>
                                <span>azrilabidin34.email@example.com</span>
                            </div>
                            <div className="contact-item mb-3">
                                <i className="bi bi-phone-fill me-2"></i>
                                <span>+62 831 5200 7236</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Azril Abidin. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
