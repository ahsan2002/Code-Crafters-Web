import React, { useState, useEffect } from 'react';
import './Carousel.css';

// const images =

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "images/carousel/img1.jpg",
        "images/carousel/img2.jpg",
        "images/carousel/img3.jpg",
        "images/carousel/img4.jpg",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [slides.length]);

    return (
        <div className="carousel">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ 
                        backgroundImage: `url(${slide}`,
                        
                    }}
                >
                    <div className="carousel-content">
                        <h2>ME</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carousel;
