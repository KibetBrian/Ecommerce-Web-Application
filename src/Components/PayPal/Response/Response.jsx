import './response.scss'
import axios from 'axios';

function Response() {    

    const proceedToPay = async (e)=>
    {
        const res = await axios.post('/payment/pay');
        window.location.href = res.data.href; 
    }
    return (
        <div className = "response">
                <button type ="button" value ="button" onClick = {proceedToPay}>Pay</button>
        </div>
    )
}

export default Response
