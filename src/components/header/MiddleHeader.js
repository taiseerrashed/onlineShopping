import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MiddleHeader = () => {
    const {cartItems} = useSelector((state) => state.cart);

  return (
    <div className="middle-header">
        <div className="middle-header-search-box">
            <input type="search" placeholder="بحث" />
            <i className="bi bi-search"></i>
        </div>
        <Link to="/cart" className="middle-header-shopping-cart">
            السلة
            <i className="bi bi-cart2"></i>
            {cartItems.length > 0 && (
                <span className="cart-notification">{cartItems.length}</span>
            )}
        </Link>
    </div>
  );
};

export default MiddleHeader;
