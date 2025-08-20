// components/Card/LargeCard.jsx

import React from 'react';
import "./LargeCard.css";

const LargeCard = ({ imageUrl, title, description, buttonText }) => {
    return (
        <div className="Large-card-container" style={{ backgroundImage: `url(${imageUrl})` }}>
            
            {/* The main content overlay for hover state (initially hidden) */}
            <div className="Large-card-hover-overlay">
                <div className="Large-card-hover-content">
                    <p className="Card-description">{description}</p>
                    {buttonText && <button>{buttonText}</button>}
                </div>
            </div>

            {/* The bottom title bar (always visible) */}
            <div className="Large-card-title-bar">
                <h3 className="Card-title">{title}</h3>
                <p className="Card-subtitle">WE ARE HUMANS</p>
            </div>
        </div>
    );
};

export default LargeCard;