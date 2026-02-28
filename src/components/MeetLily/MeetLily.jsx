import React from 'react';
import './MeetLily.scss';
import lilyImage from '../../assets/images/meet-lily.jpg';

const FloralLineartIcon = () => (
  <svg
    viewBox="0 0 400 150"
    width="100%"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="floral-lineart-svg"
  >
    <path d="M20,130 C100,100 180,60 280,50" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30,120 C110,80 180,50 275,40" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M280,50 C310,70 340,110 380,-40" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M275,40 C320,50 350,90 390,-10" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M280,50 C260,20 280,0 300,0 C320,0 300,30 280,50 Z" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M280,50 C280,30 290,10 300,0" stroke="#111" strokeWidth="1.5" />
    <path d="M280,50 C250,70 240,110 240,130 C250,130 280,90 280,50 Z" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M280,50 C260,70 250,90 240,130" stroke="#111" strokeWidth="1.5" />
    <path d="M280,50 C290,80 300,120 320,120 C320,110 300,70 280,50 Z" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M280,50 C290,70 300,90 320,120" stroke="#111" strokeWidth="1.5" />
  </svg>
);

const MeetLily = () => {
    return (
        <section className="meet-lily">
            <div className="meet-image-container">
                <img src={lilyImage} alt="Lily, Beautician" />
            </div>
            <div className="meet-content-container">
                <div className="floral-lineart-container">
                    <FloralLineartIcon />
                </div>
                <h2 className="section-label">Meet Lily</h2>
                <h3 className="meet-title">Hi, I'm Lily</h3>
                <div className="meet-desc">
                    <p>I am a paragraph. Click here to add your own text and edit me. It is easy. Just click Edit Text or double click me to add your own content and make changes to the font.</p>
                    <p>Feel free to drag and drop me anywhere you like on your page. I am a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
            </div>
        </section>
    );
};

export default MeetLily;
