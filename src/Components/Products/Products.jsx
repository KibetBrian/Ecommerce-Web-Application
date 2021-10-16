import React, { useState, useEffect } from 'react'
import Product from '../Product/Product'
import axios from 'axios'
import './products.scss'
import Categories from '../Categories/Categories';

function Products({category, filters, sortParams}) {
    const [productsData, setProductsData] = useState([]);
    const [filteredProducts, setFilteredProducts]= useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);

    //Fetch products use effect 
   useEffect(()=>
   {
    const fetchProducts = async()=>
    {
        try 
        {
            const productData = await axios.get(category ? `/products/allproducts?category=${category}`: `/products/allproducts` );
            setProductsData(productData.data)
        }catch (err)
        {
            console.log(err)
        }
    }
    fetchProducts();
   }, [category]);

   //Filter products use effect
   useEffect(()=>
   {
      filters && setFilteredProducts(
           productsData.filter((productData)=>
            Object.entries(filters).every(([key, value])=>
            productData[key]?.includes(value))))
   }, [category, filters, productsData]);

   //Sort products use effect

   useEffect(()=>
   {
    if (sortParams === 'latest')
    {
        setFilteredProducts(prev=> [...prev].sort((a, b)=>a.createdAt - b.createdAt))
    }
    if (sortParams === 'price')
    {
        setFilteredProducts(prev=> [...prev].sort((a, b)=>a.productPrice - b.productPrice))
    }
    if (sortParams === 'oldest')
    {
        setFilteredProducts(prev=> [...prev].sort((a, b)=>b.productPrice - a.productPrice))
    }
    if (sortParams === 'most-liked')
    {
        setFilteredProducts(prev=> [...prev].sort((a, b)=>a.productLikes - b.productLikes))
    }
   }, [sortParams]);

    return (
        <div className = "products">
            {
                productsData.slice(0, 8).map(eachProductData=>
                    (
                        <Product key = {eachProductData._id} productData = {eachProductData} />
                    )
                    )
            }
        </div>
    )
}

export default Products
