import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import {register} from "../../redux/slices/userSlice";
import "./form.css";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const users = useSelector((state) => state.user.users);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!username || !email || !password || !confirmPassword) return toast.error("يجب ادخال جميع البيانات");

        // Load users from localStorage
        const localUsers = JSON.parse(localStorage.getItem("users")) || [];
        let dublicated = localUsers.some((user) => user.email === email);
        if(dublicated) return toast.error("هذا الإيميل موجود !!");
        
        if(password !== confirmPassword) return toast.error("كلمة السر غير متطابقة");

        toast.success("تم إنشاء الحساب بنجاح")

        dispatch(register({username, email, password, confirmPassword}));
        
        setTimeout(() => {
            navigate('/login');
        }, 1000); 
    };

  return (
    <div className="form-wrapper">
        <ToastContainer style={{whiteSpace:"nowrap"}} />
        <h2 className="form-title">إنشاء حساب جديد</h2>
        <form className="form" onSubmit={handleSubmit}>
            <div className="email-username">
                <input type="text" placeholder="اسم المستخدم" value={username} onChange={(e) => setUsername(e.target.value)} />   
                <input type="email" placeholder="الإيميل" value={email} onChange={(e) => setEmail(e.target.value)}  />        
            </div>
            <input type="password" placeholder="كلمة السر" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="تأكيد كلمة السر" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />
            <button className="form-btn" type="submit">إنشاء حساب</button>
        </form>
        <div className='form-footer'>
            لديك حساب بالفعل؟{" "}
            <Link to="/login" className='form-link'>تسجيل الدخول</Link>
        </div>
    </div>
  );
};

export default Register;
