import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import SpecialOffers from "../../components/special-offers/SpecialOffers";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import Slider from "../../components/slider/Slider";
import Brands from "../../components/brands/Brands";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCalls";

const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    const laptops = products.filter((p) => p.isLaptop === true);
    const mobiles = products.filter((p) => p.isLaptop === false);

  return (
    <>
        <Banner />
        <Category />
        <SpecialOffers />
        <HeadingTitle title="الجديد من اللابتوبات" />
        <Slider data={laptops} />
        <HeadingTitle title="الجديد من الموبايلات" />
        <Slider data={mobiles} />
        <HeadingTitle title="تسوق حسب المارك" />
        <Brands />
    </>
  );
};

export default Home;
