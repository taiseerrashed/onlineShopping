import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../../components/rating/Rating";
import ProductDescription from "../special-offer-page/ProductDescription";
import "./single-product.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/apiCalls/productApiCalls";
import Spinner from "../../components/spinner/Spinner";
import { addTocart } from "../../redux/apiCalls/cartApiCalls";

const SingleProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} =useParams();

    const { product, loading } = useSelector((state) => state.product);
    const {online} = useSelector((state) => state.user);
    
    const [qty, setQty] = useState(1);

    useEffect(() => {
        dispatch(getProductById(id));
        window.scrollTo(0, 0);
    }, [id]);

    // Add To Cart Handler
    const addToCartHandler = () => {
        dispatch(
            addTocart({
                id: product?.id,
                quantity: qty,
                price: product?.price,
                title: product?.title,
                image: product?.image,
            }),
        );
    };

    if(loading) return <Spinner />

  return (
    <div className="single-product">
        <div className="product-wrapper">
            <div className="product-image-wrapper">
                <img src={product?.image} alt="" />
            </div>
            <div className="product-info">
                <h2 className="product-title">{product?.title}</h2>
                <Rating rating={product?.rating} reviews={product?.reviews} />
                <div className="product-price">{product?.price}</div>
                <div className="product-add-to-cart">
                    <div>الكمية</div>
                    <input value={qty} onChange={(e) => setQty(e.target.value)} type="number" min="1" max="10" />
                    <button disabled={!online} onClick={addToCartHandler} className="add-to-cart-btn">إضافة إلى السلة</button>
                </div>
                <button onClick={() => navigate(-1)} className="back-btn">الصفحة السابقة</button>
            </div>
        </div>
        <ProductDescription />
    </div>
  );
};

export default SingleProduct;
