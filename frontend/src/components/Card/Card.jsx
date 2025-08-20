// src/components/Card/Card.jsx

import React from "react";
import "./Card.css"

function Card ({icon, image, title, description, showButton = true}) {
    return (
        <div className="Card">
            <div className="Card-icon">
                {icon}
            </div>
            <h3 className="Card-title">{title}</h3>
            <p className="Card-description">{description}</p>
            {showButton && <button className="Card-button">Read more</button>}
        </div>
    );
}

export default Card;