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
                <div>

                    {/* Carousel SLides */}
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''} ${index !== 1 ? "grayscale" : ""}`}
                        style={{
                            backgroundImage: `url(${slide}`,
                        }}
                    >
                    </div>

                    <div className={`carousel-content-container ${index === currentSlide ? 'active' : ''}`}>
                        <div className="carousel-content">
                            <h1 className='title' > WELCOME TO
                                <span
                                    style={{
                                        color: "linear-gradient(to right, #004e92, #000428)",
                                    }}
                                    className='title'
                                > RCAI</span></h1>
                            <div className='subHeading'>Innovation | Inspiration | Impact</div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Carousel;
