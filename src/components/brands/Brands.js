import React from "react";
import "./brands.css";
import { brands } from "../../data/brands"

const Brands = () => {
  return (
    <section className="brands-wrapper">
        {brands.map((brand) => 
            <div key={brand.id} className="brand">
                <img src={brand.image} alt="" className="brand-img" />
            </div>
        )}
    </section>
  );
};

export default Brands;
