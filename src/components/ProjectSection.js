import React from 'react';

const ProjectSection = () => {
    const handleClick = () => {}
    return (
        <section id="project" className="py-5 position-relative">
            <div className="floating-shapes">
                <div className="shape shape-project-1"></div>
                <div className="shape shape-project-2"></div>
            </div>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-6 text-center">
                        <h2 className="fw-bold mt-5">Featured Projects</h2>
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                                <i className="bi bi-folder2-open text-primary"></i>
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="project-card position-relative">
                            <div className="project-image-wrapper">
                                <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
                                    alt="Project 1" className="img-fluid" />
                                <div className="project-overlay">
                                    <div className="project-overlay-content">
                                        <i className="bi bi-eye-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content p-4">
                                <div className="project-header">
                                    <div className="project-type mb-2">
                                        <span className="badge bg-light text-dark"><i
                                            className="bi bi-cart me-1"></i>E-Commerce</span>
                                    </div>
                                    <h4>E-Commerce Website</h4>
                                    <p className="text-muted">A full-stack e-commerce platform built with Laravel and React</p>
                                </div>
                                <div className="tech-stack mb-3">
                                    <span className="badge bg-primary">Laravel</span>
                                    <span className="badge bg-info">React</span>
                                    <span className="badge bg-success">MySQL</span>
                                </div>
                                <div className="project-links d-flex gap-2">
                                    <a href="#" className="btn btn-outline-dark btn-sm flex-grow-1">
                                        <i className="bi bi-github me-1"></i>View Code
                                    </a>
                                    <a href="#" className="btn btn-primary btn-sm flex-grow-1">
                                        <i className="bi bi-link-45deg me-1"></i>Live Demo
                                    </a>
                                </div>
                            </div>
                            <div className="corner-decoration top-left"></div>
                            <div className="corner-decoration top-right"></div>
                            <div className="corner-decoration bottom-left"></div>
                            <div className="corner-decoration bottom-right"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="project-card position-relative">
                            <div className="project-image-wrapper">
                                <img src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
                                    alt="Project 2" className="img-fluid" />
                                <div className="project-overlay">
                                    <div className="project-overlay-content">
                                        <i className="bi bi-eye-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content p-4">
                                <div className="project-header">
                                    <div className="project-type mb-2">
                                        <span className="badge bg-light text-dark"><i className="bi bi-check2-circle me-1"></i>Task
                                            Management</span>
                                    </div>
                                    <h4>Task Management App</h4>
                                    <p className="text-muted">A responsive task management application with real-time updates
                                    </p>
                                </div>
                                <div className="tech-stack mb-3">
                                    <span className="badge bg-warning">JavaScript</span>
                                    <span className="badge bg-info">Bootstrap</span>
                                    <span className="badge bg-secondary">PostgreSQL</span>
                                </div>
                                <div className="project-links d-flex gap-2">
                                    <a href="#" className="btn btn-outline-dark btn-sm flex-grow-1">
                                        <i className="bi bi-github me-1"></i>View Code
                                    </a>
                                    <a href="#" className="btn btn-primary btn-sm flex-grow-1">
                                        <i className="bi bi-link-45deg me-1"></i>Live Demo
                                    </a>
                                </div>
                            </div>
                            <div className="corner-decoration top-left"></div>
                            <div className="corner-decoration top-right"></div>
                            <div className="corner-decoration bottom-left"></div>
                            <div className="corner-decoration bottom-right"></div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="project-card position-relative">
                            <div className="project-image-wrapper">
                                <img src="https://images.pexels.com/photos/7376/startup-photos.jpg" alt="Project 3"
                                    className="img-fluid" />
                                <div className="project-overlay">
                                    <div className="project-overlay-content">
                                        <i className="bi bi-eye-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="project-content p-4">
                                <div className="project-header">
                                    <div className="project-type mb-2">
                                        <span className="badge bg-light text-dark"><i
                                            className="bi bi-bar-chart me-1"></i>Analytics</span>
                                    </div>
                                    <h4>Analytics Dashboard</h4>
                                    <p className="text-muted">A modern analytics dashboard with interactive charts</p>
                                </div>
                                <div className="tech-stack mb-3">
                                    <span className="badge bg-danger">HTML5</span>
                                    <span className="badge bg-info">Tailwind</span>
                                    <span className="badge bg-success">MySQL</span>
                                </div>
                                <div className="project-links d-flex gap-2">
                                    <a href="#" className="btn btn-outline-dark btn-sm flex-grow-1">
                                        <i className="bi bi-github me-1"></i>View Code
                                    </a>
                                    <a href="#" className="btn btn-primary btn-sm flex-grow-1" >
                                        <i className="bi bi-link-45deg me-1"></i>Live Demo
                                    </a>
                                </div>
                            </div>
                            <div className="corner-decoration top-left"></div>
                            <div className="corner-decoration top-right"></div>
                            <div className="corner-decoration bottom-left"></div>
                            <div className="corner-decoration bottom-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
