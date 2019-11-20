import React, {useEffect} from "react"
import {connect} from "react-redux"
import {handleChange, getList, handleSearch} from "../actions"

const Home = ({shownList, getList,handleSearch, handleChange, query, searchValue, searchList}) => {


    useEffect(()=> {
        getList()
            // eslint-disable-next-line
    }, [])

    const showSearchFilter = ()=> {
        return (searchList.map(ele=>{
            return(
                <div key={ele[0]} className="single-item">{ele[0]}: {Math.round(ele[1])}</div>
            )
        }))
    }

    const showFullList = ()=> {
        return (shownList.map(ele=>{
            return(
                <div key ={ele[0]} className="single-item">{ele[0]}: {Math.round(ele[1])}</div>
            )
        }))
    }

    return(
        <div className="home-container">
            <div className="search-container">
                <input 
                    className="search-box"
                    type="text" 
                    onChange={handleSearch} 
                    value={searchValue} 
                    name="searchValue" 
                    placeholder="search currency names"/>

            </div>
            <div className="query-container">
                <label> 
                    {`USD: `}
                </label>
                <input 
                    className="query-box"
                    type="text" 
                    onChange={handleChange} 
                    value={query}
                    name="query" 
                    placeholder="Enter USD to convert"/> 
            </div>
            <div className="list">
                {searchValue ? showSearchFilter() : showFullList()}
            </div>
            
            
        </div>
    )
}

const mapStateToProps = state => ({...state})
  
  export default connect(mapStateToProps,{handleChange, getList, handleSearch})(Home);
  