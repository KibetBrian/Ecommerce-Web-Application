import React from 'react'
import './categories.scss'
import { CategoriesData } from '../../dummyData'
import Category from '../Category/Category'
import { Link } from 'react-router-dom'

function Categories() {
    return (
        <div className = "categories">
            {CategoriesData.map(eachCategoryData=>
                (
                    <Link to = {`/products/${eachCategoryData.category}`}>
                      <Category key= {eachCategoryData.id} className = "category" data = {eachCategoryData} />
                    </Link>
                ) )}
        </div> 
    )
}

export default Categories
