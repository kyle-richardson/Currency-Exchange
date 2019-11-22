import React, {useEffect} from "react"
import {connect} from "react-redux"
import {getList, refreshList} from "../actions"

import List from "./List"
import Form from "./Form"

const Home = ({getList, refreshList, query, searchValue, isFetching}) => {


    useEffect(()=> {
        getList()
        // eslint-disable-next-line
    }, [])

    useEffect(()=> {
        refreshList()
        // eslint-disable-next-line
    }, [query, searchValue])
    
    return (
    isFetching ? <div className="loading">Fetching Rates...</div> :
        <div className="home-container">
            <Form />
            <List />
        </div>
    )
}

const mapStateToProps = state => ({
    query: state.query,
    searchValue: state.searchValue,
    isFetching: state.isFetching
})
  
  export default connect(mapStateToProps,{getList, refreshList})(Home);
  