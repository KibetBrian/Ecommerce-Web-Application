import React from 'react'
import Categories from '../../Components/Categories/Categories'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Components/Slider/Slider'
import Products from '../../Components/Products/Products'
import './home.scss'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Footer from '../../Components/Footer/Footer'

function Home() {
    return (
        <div className = "home">
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home
