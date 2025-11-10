import React from 'react';
import '../stylesheet/LoadingScreen.css';

const LOGO_TEXT = "ielp";
const LOGO_COLOR = '#6488BF'; // Your logo's muted blue

const LoadingScreen = () => {
    return (
        <div className="loader-container">
            <div className="logo-loader" style={{ color: LOGO_COLOR }}>
                {/* Map over the letters and apply staggered animation delay */}
                {LOGO_TEXT.split('').map((letter, index) => (
                    <span
                        key={index}
                        className="letter"
                        // Apply CSS custom property for staggered delay
                        style={{ '--delay': `${index * 0.3}s` }}
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default LoadingScreen;