import React from "react";
import "./menu-item.style.scss";

export const MenuItem = ({title, img, size}) => (
    <div className= {`menu-item ${size}`}>
        <div className="background-image" 
        style = {{
        backgroundImage: `url(${img})`
        }}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)