import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { removeFromCart } from "../../redux/apiCalls/cartApiCalls";
import { Link } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const {cartItems} = useSelector((state) => state.cart);

  return (
    cartItems.length < 1 ? (
        <div className="empty-cart">
            <h1>سلة التسوق الخاصة بك فارغة</h1>
            <p>لا توجد سلع</p>
            <Link to="/products" className="empty-cart-link">صفحة السلع</Link>
        </div>
    ) : (
        <section className="cart">
            <h2 className="cart-title">سلة التسوق</h2>
            <div className="cart-wrapper">
                <div className="cart-items">
                    {cartItems.map((item) => 
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-img-wrapper">
                                <img src={item.image} alt={item.title} className="cart-item-img" />
                            </div>
                            <div className="cart-item-info">
                                <div className="cart-item-title">{item.title}</div>
                                <div className="cart-item-quantity">
                                    الكمية:
                                    <span>{item.quantity}</span>
                                </div>
                                <div className="cart-item-price">
                                    السعر:
                                    <span>{item.price * item.quantity}$</span>
                                </div>
                                <i onClick={() => dispatch(removeFromCart(item.id))} className="bi bi-trash cart-item-delete-icon"></i>
                            </div>
                        </div>
                    )}
                </div>
                <div className="cart-summary">
                    <div className="cart-summary-text">
                        <i className="bi bi-check-circle-fill"></i>
                        جزء من طلبك مؤهل للشحن المجاني. قم بتحديد هذا الخيار عند الدفع
                    </div>
                    <div className="cart-summary-total">
                        المجموع: {" "}
                        <span>
                            {
                                cartItems.reduce((acc, cur) => (acc + cur.price * cur.quantity ), 0)
                            }$
                        </span>
                    </div>
                    <button className="cart-summary-btn">تابع عمليات الشراء</button>
                </div>
            </div>
        </section>
    )   
  );
};

export default Cart;
