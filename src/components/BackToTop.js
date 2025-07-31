import React, { useEffect, useState } from 'react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <a
            href="#"
            className={`back-to-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
            onClick={scrollToTop}
            style={{ display: isVisible ? 'flex' : 'none' }} // Control display based on visibility
        >
            <i className="bi bi-arrow-up-short"></i>
        </a>
    );
};

export default BackToTop;
