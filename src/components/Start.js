import React from "react"
import {Link} from "react-router-dom"

const Start = props => {
    return (
        <Link to="/rates">
            <div className="start-button">Get Rates!</div>
        </Link>
        
    )
}

export default Start