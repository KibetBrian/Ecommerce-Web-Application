import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import './newsLetter.scss'

function NewsLetter() {
    return (
        <div className = "newsLetter">
           <h1>Newsletter</h1>
           <p>Join our mailing list and never miss an update</p>
           <div className="inputContainer">
               <input type="text" placeholder =  "Your email address" />
               <SendIcon className = "sendIcon" />
           </div>
        </div>
    )
}

export default NewsLetter
