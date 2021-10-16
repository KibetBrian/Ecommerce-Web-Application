import { Add, FavoriteOutlined, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { useDispatch    } from 'react-redux'
import axios from 'axios'
import './productDetails.scss'
import { addProduct } from '../../Redux/cartRedux'

function ProductDetails() {
    const location = useLocation ();
    const productId = location.pathname.split('/')[2];
    const [product, setProduct] =  useState({});
    const [productQuantity, setProductQuantity] = useState(1);
    const dispatch = useDispatch();
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);
    

    const handleProductQuantity = (action)=>
    {
        if (action === 'add')
        {
            setProductQuantity(productQuantity +1);
        }
        if (action === 'remove' & productQuantity > 1)
        {
            setProductQuantity (productQuantity -1)
        }
    }
    const pushToCart =  ()=>
    {
        dispatch(addProduct({...product, productQuantity, color, size}))
    }
    console.log(product)

    useEffect(()=>
    {
        const fetchProductData = async ()=>
        {
            const productData = await axios.get(`/products/product/${productId}`);
            setProduct(productData.data)
        }
        fetchProductData();
    }, [productId]);
    return (
        <div className = "productDetails">
            <Navbar />
            <div className="productDetailsWrapper">
                <div className="productDetailsLeft">
                    <img src={product.productImage} alt="productImage" />
                </div>
                <div className="productDetailsRight">
                    <h1 className="productName">{product.productName}</h1>
                    <p className="productPrice">$ {product.productPrice} </p>
                    <div className="colorContainer">
                        <div className="colorAndSize">
                            <div className="colorsContainer">
                                <p>Color</p>
                                <div className="colors">
                                    {product.productColor?.map(eachColor=>(<div key = {eachColor} onClick={()=>setColor(eachColor)} style ={{backgroundColor: `${eachColor}`}}></div>))}  
                                </div>
                            </div>
                        </div>
                        <div className="size">
                            <p>Size</p>
                            <select onClick = {(e)=>setSize(e.target.value)} className = "productSizeSelect" name="product-size" id="productSize">
                                <option disabled selected value="Size">Size</option>
                                {product.productSize?.map(eachSize=>
                                    (
                                        <option value = {eachSize}>{eachSize}</option>
                                    ))}
                            </select>
                        </div>
                    </div>
                    <div className="quantityContainer">
                        <div className="quantity">
                            <p>Quantity</p>
                            <div className="quantityDisplay">
                                <div onClick={()=>handleProductQuantity('remove')} className="removeContainer">
                                    <Remove />
                                </div>
                                <div className="quantityBox">{productQuantity}</div>
                                <div onClick={()=>handleProductQuantity('add')} className="addContainer">
                                    <Add />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="addToCartButtonContainer">
                        <button onClick={pushToCart}>Add to Cart</button> 
                        <div className="wishListContainer">
                            <FavoriteOutlined className = "wishListIcon" />
                        </div>
                    </div>
                    <div className="productInfo">
                        <h3 className = "productInfoTitle" >Product Info</h3>
                        <p>{product.productDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
