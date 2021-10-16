import React from 'react'
import './navbar.scss'
import {Menu, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Navbar() {
    const cartQuantity = useSelector(state=>state.cart.quantity);
    return (
        <div className = "navbar">
            <div className="left">
                <div className="logoContainer">
                    <h1>Trendy</h1>
                    <h2>Latest Fashions</h2>
                </div>
            </div>
            <div className="center">
                <Link style = {{textDecoration: "none"}} to = "/">
                    <p>Shop</p>
                </Link>
                <Link style = {{textDecoration: "none"}} to = "/categories">
                 <p>Categories</p>
                </Link>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className="right">
                <div className="rightLeft">
                <i className="fas fa-search"></i>
                <input  type="text" placeholder = "Search..." />
                </div>
                <Link style = {{textDecoration: "none", color : "#000"}} to = "login">
                    <div className="rightCenter">
                        <i className="far fa-user-circle"></i>
                        <h2>Log in</h2> 
                    </div>
                </Link>
                <div className="rightRight">
                    <Badge className = "cartBadge" badgeContent = {cartQuantity} color = "secondary">
                        <Link to = "/cart" style = {{color: "#000"}}>
                            <ShoppingCartOutlined className = "shoppingCartIcon"/>
                        </Link>
                    </Badge>
                    <Menu className = "menuIcon" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
