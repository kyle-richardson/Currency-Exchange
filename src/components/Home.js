import React, {useEffect, useState} from "react"
import axios from "axios"

const Home = props=> {

    const [exchangeList, setExchangeList] = useState([])
    useEffect(()=> {
        axios
            .get("https://openexchangerates.org/api/latest.json?app_id=c369c926595647bdaafaad7c44843b2d")
            .then(res=>{
                console.log(res)
                setExchangeList(Object.entries(res.data.rates))
                console.log(Object.entries(res.data.rates))
            })
            .catch(err=>console.log(err))
    }, [])

    return(
        <div className="home-container">
            {exchangeList.map(ele=>{
                return(
                    <div>{ele[0]}: {ele[1]}</div>
                )
            })}
        </div>
    )
}

export default Home