import React from 'react'
import './footer.scss'
import { Email, LocalPhone, LocationOn } from '@mui/icons-material';

function Footer() {
    return (
        <div className = "footer">

            <div className="quickLinks">
                <h1>QuickLinks</h1>
                <li>Shipping&Returns</li>
                <li>Store Policy</li>
                <li>Payment Methods</li>
            </div>

            <div className="footerCategories">
                <h1>Categories</h1>
                <li>Men's Fashion</li>
                <li>Women's Fashion</li>
                <li>Leathers</li>
                <li>Trousers</li>
            </div>

            <div className="socials">
                <h1>Socials</h1>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Pinterest</li>
            </div>

            <div className="contact">
                <h1>Contact</h1>
                <li><LocationOn className = "contactIcon" /> Nairobi, Kenya</li>
                <li> <LocalPhone className = "contactIcon" /> +254 737 232 121 </li>
                <li> <Email className = "contactIcon" /> trendyfashions@gmail.com </li>
                <div className="payments">
                    <img src="/Assets/american-ex.png" alt="" />
                    <img src="/Assets/discover.png" alt="" />
                    <img src="/Assets/master-card.png" alt="" />
                    <img src="/Assets/paypal.png" alt="" />
                    <img src="/Assets/visa.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
