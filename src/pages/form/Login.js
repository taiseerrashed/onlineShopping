import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "./form.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.user.users);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find((user) => user.username === username && user.password === password);
        if(!user) return toast.error("خطأ في اسم المستخدم أو كلمة السر");
        
        toast.success(`مرحبا ${user?.username}`);
        
        dispatch(login({ currentUser: user, password }));

        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    // Show Password Handler
    const ShowPassWordHandler = () => {
        setShowPassword((prev) => !prev)
    }

  return (
    <div className="form-wrapper">
        <ToastContainer style={{whiteSpace:"nowrap"}} />
        <h2 className="form-title">تسجيل الدخول</h2>
        <form className="form" onSubmit={handleSubmit}>
            <label>اسم المستخدم:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label> كلمة السر:</label>
            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required />
            {showPassword ? (
                <i onClick={ShowPassWordHandler} className="bi bi-eye-slash-fill show-password-icon"></i>
            ) : (
                <i onClick={ShowPassWordHandler} className="bi bi-eye-fill show-password-icon"></i>
            )}
            <button className="form-btn" type="submit">تسجيل الدخول</button>
        </form>
        <div className='form-footer'>
            ليس لديك حساب؟{" "}
            <Link to="/register" className='form-link'>إنشاء حساب جديد</Link>
        </div>
    </div>

  );
};

export default Login;
