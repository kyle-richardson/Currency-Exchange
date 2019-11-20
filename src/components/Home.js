import React, {useEffect} from "react"
import axios from "axios"
import {connect} from "react-redux"
import {handleChange, setList, handleSearch} from "../actions"

const Home = ({shownList, setList,handleSearch, handleChange, query, searchValue, searchList}) => {


    useEffect(()=> {
        axios
            .get("https://openexchangerates.org/api/latest.json?app_id=c369c926595647bdaafaad7c44843b2d")
            .then(res=>{
                setList('baseExchangeList',Object.entries(res.data.rates))
                setList('shownList',Object.entries(res.data.rates))
            })
            .catch(err=>console.log(err))
    }, [])

    const showSearchFilter = ()=> {
        return (searchList.map(ele=>{
            return(
                <div key={ele[0]}>{ele[0]}: {Math.round(ele[1])}</div>
            )
        }))
    }

    const showFullList = ()=> {
        return (shownList.map(ele=>{
            return(
                <div key ={ele[0]}>{ele[0]}: {Math.round(ele[1])}</div>
            )
        }))
    }

    return(
        <div className="home-container">
            <div className="search-box">
                <input 
                    type="text" 
                    onChange={handleSearch} 
                    value={searchValue} 
                    name="searchValue" 
                    placeholder="search currency names"/>

            </div>
            <div className="query-box">
                <label> 
                    {`USD: `}
                </label>
                <input 
                    type="text" 
                    onChange={handleChange} 
                    value={query}
                    name="query" 
                    placeholder="Enter USD to convert"/> 
            </div>
            {searchValue ? showSearchFilter() : showFullList()}
            
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
})
  
  export default connect(mapStateToProps,{handleChange, setList, handleSearch})(Home);
  