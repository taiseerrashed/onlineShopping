import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/slices/userSlice";

const Navbar = ({toggle, setToggle}) => {

    const dispatch = useDispatch();
    const {online} = useSelector((state) => state.user);
    const handleLogout = () => {
        dispatch(logout());
    };

  return (
    <nav style={{right: toggle && "0"}} className="navbar">
        <div className="navbar-close-icon">
            <i onClick={() => setToggle(false)} className="bi bi-x-lg"></i>
        </div>
        <ul className="navbar-links">
            <li onClick={() => setToggle(false)} ><Link to="/" className="navbar-link">الصفحة الرئيسية</Link></li>
            <li onClick={() => setToggle(false)} ><Link to="/products" className="navbar-link">الإلكترونات والموبايلات</Link></li>
            <li onClick={() => setToggle(false)} ><Link to="/" className="navbar-link">المنزل والمطبخ</Link></li>
            <li onClick={() => setToggle(false)} ><Link to="/" className="navbar-link">الملابس</Link></li>
        </ul>
        <ul className="user-login">
            {online ? (
                <>
                    <li onClick={handleLogout}>
                        <Link to="/login" onClick={() => setToggle(false)}>
                            <i className="bi bi-box-arrow-right"></i>
                            تسجيل الخروج
                        </Link>
                    </li>
                    <li onClick={() => setToggle(false)}>
                        <Link to="/register">
                        <i className="bi bi-person-fill-add"></i>
                            إنشاء حساب
                        </Link>
                    </li>
                </>
                ) : (
                <>
                    <li onClick={() => setToggle(false)}>
                        <Link to="/login">
                            <i className="bi bi-person-fill"></i>
                            تسجيل الدخول
                        </Link>
                    </li>
                    <li onClick={() => setToggle(false)}>
                        <Link to="/register">
                        <i className="bi bi-person-fill-add"></i>
                            إنشاء حساب
                        </Link>
                    </li>
                </>
            )}
        </ul>
    </nav>
  );
};

export default Navbar;
