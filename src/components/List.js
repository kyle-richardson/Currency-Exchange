import React from "react"
import {connect} from "react-redux"

const List = ({shownList,searchList, searchValue}) => {

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
        <div className="list">
            {searchValue ? showSearchFilter() : showFullList()}
        </div>
    )
}

const mapStateToProps = state => ({
    shownList: state.shownList,
    searchList: state.searchList,
    searchValue: state.searchValue
})

export default connect(mapStateToProps,{})(List);