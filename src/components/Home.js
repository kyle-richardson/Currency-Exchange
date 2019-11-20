import React, {useEffect, useState} from "react"
import axios from "axios"
import {connect} from "react-redux"
import {handleChange, setExchangeList, search} from "../actions"

const Home = ({handleChange, exchangeList, setExchangeList, query, searchValue, searchList}) => {


    useEffect(()=> {
        axios
            .get("https://openexchangerates.org/api/latest.json?app_id=c369c926595647bdaafaad7c44843b2d")
            .then(res=>{
                setExchangeList(Object.entries(res.data.rates))
            })
            .catch(err=>console.log(err))
    }, [])

    const showSearchFilter = ()=> {
        return (searchList.map(ele=>{
            return(
                <div key={ele[0]}>{ele[0]}: {ele[1]}</div>
            )
        }))
    }

    const showFullList = ()=> {
        return (exchangeList.map(ele=>{
            return(
                <div key ={ele[0]}>{ele[0]}: {ele[1]}</div>
            )
        }))
    }

    return(
        <div className="home-container">
            {console.log(searchList)}
            <div className="search-box">
                <input type="text" onChange={(e)=>{handleChange(e); search()}} value={searchValue} name="searchValue" placeholder="search currency names"/>

            </div>
            <div className="query-box">
                <input type="text" onChange={handleChange} value={query} name="query" placeholder="Enter USD to convert"/>
            </div>
            {searchValue ? showSearchFilter() : showFullList()}
            
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
})
  
  export default connect(mapStateToProps,{handleChange, setExchangeList, search})(Home);
  