import { Add, AttachMoney, LocalMall, Remove } from '@mui/icons-material'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import axios from 'axios'
import './cart.scss'
import { Link } from 'react-router-dom'

function Cart() {
    const cart = useSelector(state=>state.cart);
    const  [circularProgressState, setCircularProgressState] = useState(false)
    const estimatedShipping = 200;
    const estimatedDiscount = -59;

    const proceedToPay = async (e)=>
    {
        setCircularProgressState(true)
        const res = await axios.post('/payment/pay', {cart});
        window.location.href = res.data.href; 
    }

    return (
        <div className = "cart">
            <Navbar />
            <div className="cartWrapper">
                <h1>My Cart</h1>
                <div className="buttonsWrapper">
                    <Link to = '/products'>
                        <div className="buttonContainer"><button >CONTINUE SHOPPING</button></div>
                    </Link>
                    <div className="buttonContainer"><button className = "secondButton">My Wishlist (0)</button></div>
                    <div className="buttonContainer"><button>CHECKOUT NOW</button></div>
                </div>
                <div className="productsSummaryWrapper">
                    <div className="productSummaryLeft">
                       {cart.products.map(eachProduct =>
                        (
                            <div className="productDetailsContainer">
                            <div className="imageContainer">
                                <img src={eachProduct.productImage} alt= {eachProduct.productName} />
                            </div>
                            <div className="detailsContainer">
                                <div className="productName">
                                    <h3>Product: </h3>
                                    <p>{eachProduct.productName}</p>
                                </div>
                                <div className="productId">
                                    <h3>ID: </h3>
                                    <p> {eachProduct._id}</p>
                                </div>  
                                <div style={eachProduct.productColor? {backgroundColor: `${eachProduct.productColor}`}: {backgroundColor: ''}} className="color"></div>
                                <div className="productSize">
                                    <h3>Size: </h3>
                                    <p> {eachProduct.size}</p>
                                    {console.log('This is each product  ',eachProduct)}
                                </div>
                            </div>
                            <div className="countContainer">
                                <div className="quantity">
                                    {console.log(eachProduct)}
                                    <Add className= "addIcon"/> <h3>{eachProduct.productQuantity}</h3> <Remove className="removeIcon" />
                                </div>
                                <div className="amount">
                                   <AttachMoney className = "moneyIcon" />
                                    <p>{eachProduct.productPrice}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="productSummaryRight">
                        <div className="productSummaryTitleContainer">
                            <h2 className="productSummaryTitle">Order Summary</h2>
                        </div>
                        <div className="subtotal">
                            <p>Subtotal</p>
                            <p><AttachMoney className = "moneyIcon"/> {cart.total}</p>
                        </div>
                        <div className="shipping">
                            <p>Estimated Shipping</p>
                            <p><AttachMoney className = "moneyIcon"/>{estimatedShipping}</p>
                        </div>
                        <div className="discount">
                            <p>Discount</p>
                            <p><AttachMoney />{estimatedDiscount}</p>
                        </div>
                        <div className="total">
                            <p>Total</p>
                            <p><AttachMoney className = "moneyIcon"/>{cart.total + estimatedShipping + estimatedDiscount}</p>
                        </div>
                        <div className="checkOutButtonContainer">
                            <button disabled = {cart.total<=0} style={cart.total <= 0 ? {backgroundColor: '#bdbdbd', cursor: 'not-allowed'}: {backgroundColor: '#171717'}} onClick={proceedToPay}> <LocalMall />{circularProgressState ? <CircularProgress />: 'CHECKOUT NOW ' }  </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
