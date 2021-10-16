import axios from 'axios';
import { useState } from 'react';
import './successPayment.scss'

function SuccessPayment() {
    const params = new  URLSearchParams(window.location.search);
    const paymentId = params.get('paymentId');
    const payerId = params.get('PayerID');
    const [paymentState, setPaymentState] = useState(false)
    const sendParams = async ()=>
    {
        const res = await axios.post('/payment/success', {payerId: payerId, paymentId:paymentId});
        setPaymentState(res.data);
    }
    sendParams();

    const locateHome = ()=>
    {
        window.location.href = 'http://localhost:3000/';
    }
    return (
        <div className = "success">
            {paymentState ? (  <>
                <div className="successfulPayment">
                <div className="paymentSuccessfulUpper">
                    <div className="paymentCheckImageContainer">
                        <img src="/Assets/check.png" alt="check" />
                    </div>
                    <div className="title">
                        <h1>Payment Successful!</h1>
                        <h3>Transaction Number: 123444455</h3>
                    </div>
                </div>
                <div className="paymentSuccessfulLower">
                    <div className="titles">
                        <div className="amount">
                            <h3>Amount Paid:</h3>
                            <h3>$200</h3>
                        </div>
                        <div className="paymentMethod">
                            <h3>Payment Method:</h3>
                            <h3>PayPal</h3>
                        </div>
                    </div>
                </div>
                <div className="buttonContainer">
                    <button onClick = {locateHome}>Continue Exploring</button>
                </div>
            </div>
            </>):(
            <>
            <h1>Processing Payment</h1>
            </>
            )}
            
        </div>
    )
}

export default SuccessPayment
