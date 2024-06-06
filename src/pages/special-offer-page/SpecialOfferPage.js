import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { specialOffers } from "../../data/special-offers"
import Rating from "../../components/rating/Rating";
import "./special-offer-page.css";
import ProductDescription from "./ProductDescription";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/apiCalls/cartApiCalls";

const SpecialOfferPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {online} = useSelector((state) => state.user);

    const product = specialOffers.find((p) => p.id === +id);
    const { images, title, rating, reviews, price, discount } = product;

    const [imgIndex, setImgIndex] = useState(0);
    const [qty, setQty] = useState(1);

    const calculateDiscount = price - (discount * price) / 100;

    useEffect(() => {
        window.scrollTo(0, 0);
    } , []);

    // Add To Cart Handler
    const addToCartHandler = () => {
        dispatch(
            addTocart({
                id: id,
                quantity: qty,
                price: price,
                title: title,
                image: images[0],
            }),
        );
    };

  return (
    <>
        <div className="special-offer-page">
            <div className="special-offer-page-img-wrapper">
                <img src={images[imgIndex]} alt="" className="special-offer-page-img" />
                <div className="special-offer-page-select-img">
                    {images.map((source, index) => 
                        <img onClick={() => setImgIndex(index)} key={index} src={source} alt="" className="select-img" />
                    )}
                </div>
            </div>
            <div className="special-offer-page-info">
                <h3 className="special-offer-page-title">{title}</h3>
                <Rating rating={rating} reviews={reviews} />
                <div className="special-offer-page-price">
                    <b className="special-offer-price-item"><del>{price}</del></b>
                    <b className="special-offer-final-price-item">{calculateDiscount}</b>
                </div>
                <div className="special-offer-page-add-to-cart">
                    <div>الكمية</div>
                    <input value={qty} onChange={(e) => setQty(e.target.value)} type="number" min="1" max="10" />
                    <button disabled={!online} onClick={addToCartHandler} className="add-to-cart-btn">إضافة إلى السلة</button>
                </div>
            </div>
        </div>
        <ProductDescription />
    </>
  );
};

export default SpecialOfferPage;
