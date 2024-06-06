import React, { useState } from "react";
import "./slider.css"
import Rating from "../rating/Rating";
import { Link } from "react-router-dom";

const Slider = ({data}) => {
    const [slideIndex, setSlideIndex] = useState(0);

    // Handle Click
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(slideIndex + 1);
        }
    };

  return (
    <section className="slider-container">
        <button
          disabled={slideIndex === -data.length}
          onClick={() => handleClick("left")}
          className="arrow-left">
            <i className="bi bi-chevron-left"></i>
        </button>
        <div style={{transform: `translateX(${slideIndex * -250}px)`}} className="slider-wrapper">
            {data.map((item) => 
                <Link to={`/products/${item.id}`} key={item.id} className="slide">
                    <img src={item.image} alt={item.title} className="slide-img" />
                    <h3 className="slide-title">{item.title}</h3>
                    <Rating rating={item.rating} reviews={item.reviews} />
                    <div className="slide-price">${item.price}</div>
                </Link>
            )}
        </div>
        <button
          disabled={slideIndex === 1}
          onClick={() => handleClick("right")}
          className="arrow-right">
            <i className="bi bi-chevron-right"></i>
        </button>    
    </section>
  );
};

export default Slider;
