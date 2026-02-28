import React from 'react';
import './Hero.scss';
import heroImage from '../../assets/images/hero-leaves.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-script">Hello</div>
                <div className="hero-cta">
                    <h1 className="hero-title">Lily Organic Beautician</h1>
                    <p className="hero-subtitle">Hand Crafted Natural Treatments</p>
                    <a href="#" className="btn-primary">Book an Appointment</a>
                </div>
            </div>
            <div className="hero-image-container">
                <img src={heroImage} alt="Spa organic leaves" />
            </div>
        </section>
    );
};

export default Hero;
