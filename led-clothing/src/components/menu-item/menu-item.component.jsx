import React from "react";
import "./menu-item.style.scss";

export const MenuItem = ({title, img, size}) => (
    <div style = {{
        backgroundImage: `url(${img})`
    }} className= {`menu-item ${size}`}>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)