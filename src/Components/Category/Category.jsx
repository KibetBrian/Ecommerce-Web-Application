import React from 'react'
import './category.scss'

function Category({data}) {
    return (
        <div className = "category">
           <img src= {data.image} alt="Category" />
           <div className="info">
               <h1>{data.title}</h1>
               <button>SHOP NOW</button>
           </div>
        </div>
    )
}

export default Category
