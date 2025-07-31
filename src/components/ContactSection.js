import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-5 position-relative">
            <div className="floating-shapes">
                <div className="shape shape-contact-1"></div>
                <div className="shape shape-contact-2"></div>
                <div className="shape shape-contact-3"></div>
                <div className="shape shape-contact-4"></div>
            </div>

            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-6 text-center">
                        <h2 className="fw-bold mt-5">Get In Touch</h2>
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <i className="bi bi-envelope-paper-heart"></i>
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <form className="contact-form position-relative">
                            <div className="corner-decoration top-left"></div>
                            <div className="corner-decoration top-right"></div>
                            <div className="corner-decoration bottom-left"></div>
                            <div className="corner-decoration bottom-right"></div>

                            <div className="form-floating mb-4">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                                <label htmlFor="name"><i className="bi bi-person me-2"></i>Your Name</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                                <label htmlFor="email"><i className="bi bi-envelope me-2"></i>Your Email</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                                <label htmlFor="subject"><i className="bi bi-chat-left-text me-2"></i>Subject</label>
                            </div>
                            <div className="form-floating mb-4">
                                <textarea className="form-control" id="message" style={{ height: '150px' }} placeholder="Your Message"
                                    required></textarea>
                                <label htmlFor="message"><i className="bi bi-pencil me-2"></i>Massage</label>
                            </div>
                            <button type="submit" className="btn btn-gradient w-100 py-3 position-relative overflow-hidden">
                                <span className="btn-text">Send Message</span>
                                <i className="bi bi-send-fill btn-icon"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
