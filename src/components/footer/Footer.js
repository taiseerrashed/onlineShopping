import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-top">
            <h3 className="footer-top-title">متواجدين دائما لمساعدتك</h3>
            <div className="footer-top-email">
                <span className="footer-top-text">تواصل معنا عبر الإيميل</span>
                <span className="footer-top-email-address">
                    <i className="bi bi-envelope"></i>
                    store@fakeemail.com
                </span>
            </div>
        </div>
        <div className="footer-items-wrapper">
            <div className="footer-item">
                <h4 className="footer-item-title">الإلكترونيات</h4>
                <ul className="footer-item-links">
                    <li className="footer-item-link">الكاميرات وتسجيل الفيديو</li>
                    <li className="footer-item-link">الأجهزةالمنزلية</li>
                    <li className="footer-item-link">الهواتف</li>
                    <li className="footer-item-link">سماعات الرأس</li>
                    <li className="footer-item-link">التلفزيونات</li>
                    <li className="footer-item-link">أجهزةالتابلت</li>
                </ul>
            </div>
            <div className="footer-item">
                <h4 className="footer-item-title">الأزياء</h4>
                <ul className="footer-item-links">
                    <li className="footer-item-link">أزياء رجالية</li>
                    <li className="footer-item-link">أزياء نسائية</li>
                    <li className="footer-item-link">أزياءالأولاد</li>
                    <li className="footer-item-link">نظارات</li>
                    <li className="footer-item-link">المجوهرات</li>
                    <li className="footer-item-link">السماعات</li>
                </ul>
            </div>
            <div className="footer-item">
                <h4 className="footer-item-title">المطبخ والأجهزةالمنزلية</h4>
                <ul className="footer-item-links">
                    <li className="footer-item-link">ديكورات منازل</li>
                    <li className="footer-item-link">الأثاث</li>
                    <li className="footer-item-link">المطبخ وأدوات الطعام</li>
                    <li className="footer-item-link">مستلزمات الحمام</li>
                    <li className="footer-item-link">أجهزة صوت وفيديو</li>
                    <li className="footer-item-link">مستلزمات الحدائق</li>
                </ul>
            </div>
            <div className="footer-item">
                <h4 className="footer-item-title">الجمال</h4>
                <ul className="footer-item-links">
                    <li className="footer-item-link">العطور</li>
                    <li className="footer-item-link">المكياج</li>
                    <li className="footer-item-link">العناية بالشعر</li>
                    <li className="footer-item-link">العناية بالبشرة</li>
                    <li className="footer-item-link">الجسم والاستحمام</li>
                    <li className="footer-item-link">منتجات الرعاية الصحية</li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <i className="bi bi-c-circle"></i> 2024
            كل الحقوق محفوظة
        </div>
    </footer>
  );
};

export default Footer;
