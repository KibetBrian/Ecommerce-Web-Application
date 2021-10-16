import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Products from '../../Components/Products/Products'
import { useLocation } from 'react-router-dom';
import './productList.scss'

function ProductList() {
    const location = useLocation ().pathname;
    const category = location.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sortedProduct, setSortedProduct] = useState("latest");
    const handleChange = (e)=>
    {
        setFilters
        (
            {
                ...filters,
                [e.target.name]: e.target.value
            }
        );
    }
    const handleSort = (e)=>
    {
        setSortedProduct(e.target.value)
    }
    return (
        <div className = "productList">
            <Navbar />
            <h1 className = "productListTitle" >{filters.filterProducts? filters.filterProducts: "Category"}</h1> 
            <div className="filterContainer">
                <div className="leftFilterContainer">
                    <span>Filter Products: </span>
                    <select name = "productCategory" onChange = {handleChange} className = "select" name="filterProducts" id="filterProducts">
                        <option disabled selected>Category</option>
                        <option value="t-shirts">T-Shirts</option>
                        <option value="trousers">Trousers</option>
                        <option value="shoes">Shoes</option>
                        <option value="hats">Hats</option>
                    </select>
                    <select name = "color" onChange={handleChange} className = "select" name="productColor" id="productColor">
                        <option selected disabled>Color</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="Pink">Pink</option>
                        <option value="Yellow">Yellow</option>
                    </select>
                </div>
                <div className="rightFilterContainer">
                <span>Sort Products: </span>
                    <select  onChange={handleSort} name = "sort" className = "select" name="sortProducts" id="sortProducts">
                        <option disabled selected value="size">Sort</option>
                        <option value="price">Price</option>
                        <option value="size">Size</option>
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                        <option value="most-liked">Most Liked</option>
                    </select>
                </div>
            </div>
            <Products category = {category} filters = {filters} sortParams = {sortedProduct}/>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default ProductList
