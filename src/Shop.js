import React, { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import Categories from './components/Sections/Categories'
import Category from './components/Sections/Categories/Category'
import content from './data/content.json';
import Footer from './components/Footer/Footer'
import { useDispatch } from 'react-redux';
import { setLoading } from './store/features/common';
import { getAllProducts } from './api/fetchProducts';

const Shop = () => {

  const dispatch = useDispatch();
  const [productsForMen,setProductsForMen] = useState([]);
  const [productsForWoMen,setProductsForWomen] = useState([]);

  useEffect(()=>{
      dispatch(setLoading(true));
      getAllProducts("2645f58b-ba0c-4a99-b08d-fe5c78bbebca").then(res=>{
        setProductsForMen(res);
      }).catch(err=>{
      }).finally(()=>{
        dispatch(setLoading(false));
      })
    },[dispatch]);


    useEffect(()=>{
      dispatch(setLoading(true));
      getAllProducts("f7085077-de17-4f14-abee-7e0cb07c3bf8").then(res=>{
        setProductsForWomen(res);
      }).catch(err=>{
      }).finally(()=>{
        dispatch(setLoading(false));
      })
    },[dispatch]);
  return (
    <>
      <HeroSection />
      <Categories />
      <Category title={"Dành cho Nam"} data={productsForMen} />
      <Category title={"Dành Cho Nữ"} data={productsForWoMen} />
      <Footer content={content?.footer}/>
    </>
  )
}

export default Shop