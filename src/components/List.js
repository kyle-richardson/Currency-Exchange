import React from "react"
import {connect} from "react-redux"
import {handleSearch} from "../actions"

const List = ({handleSearch, shownList,searchList, searchValue}) => {

    let list = []
    searchValue ? list=searchList : list=shownList
    
    return(
        <div className="list">
            {list.map(ele=>{
                return(
                    <div 
                        key ={ele[0]} 
                        className="single-item" 
                        onClick={()=>handleSearch(ele[0])}>
                            {`${Math.round(ele[1])} ${ele[0]}`}
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    shownList: state.shownList,
    searchList: state.searchList,
    searchValue: state.searchValue
})

export default connect(mapStateToProps,{handleSearch})(List);