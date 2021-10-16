import React from 'react'
import './product.scss'
import {ShoppingCartOutlined, Search, FavoriteBorder} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Product({productData}) {
    return (
        <div className = "product">
            <img src={productData.productImage} alt={productData.productName} />
            <div className="more">
               <ShoppingCartOutlined className = "icon"/>
               <Link style = {{color: "#000"}} to = {`/product-details/`+ productData._id}>
                    <Search className = "icon"/>
               </Link>
               <FavoriteBorder className = "icon"/>
            </div>
            <div className="productInfo">
                <p>{productData.productName}</p>
                <p>$ {productData.productPrice}</p>
            </div>
            <div className="buttonContainer">
                <button>Add to Cart</button>
            </div>         
        </div>
    )
}

export default Product
