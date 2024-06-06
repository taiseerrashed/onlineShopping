import React from "react";
import "./special-offer.css";
import { specialOffers } from "../../data/special-offers";
import Offer from "./Offer";

const SpecialOffers = () => {
  return (
    <section className="special-offers">
        <h2 className="special-offers-title">عروض كبيرة لليوم
            <span className="special-offers-icon-wrapper">
                <i className="bi bi-stopwatch"></i> ل 24 ساعة فقط
            </span>
        </h2>
        <div className="special-offers-wrapper">
            {specialOffers.map((offer) => <Offer key={offer.id} offer={offer} /> )}
        </div>
    </section>
  );
};

export default SpecialOffers;
