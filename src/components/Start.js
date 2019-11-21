import React from "react"
import {Link} from "react-router-dom"

const Start = () => {
    return (
        <div className="start-container">
            <h1>Convert USD to all other currencies worldwide!</h1>
            <p>Just enter the USD amount, and the app automatically updates the conversion rates in real time.  You can also search for specific currency names</p>
            <Link to="/rates">
                <div className="start-button">Get Rates!</div>
            </Link>
        </div>
        
        
    )
}

export default Start