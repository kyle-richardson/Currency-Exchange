import React from "react"
import {handleChange, handleSearch} from "../actions"
import {connect} from "react-redux"


const Form = ({handleSearch,searchValue,handleChange,query})=> {
    return(
        <div className="form-container">
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
            <div className="search-container">
                <input 
                    className="search-box"
                    type="text" 
                    onChange={e=>handleSearch(e.target.value)} 
                    value={searchValue} 
                    name="searchValue" 
                    placeholder="search currency names"/>

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    query: state.query,
    searchValue: state.searchValue
})
  
export default connect(mapStateToProps,{handleChange, handleSearch})(Form);