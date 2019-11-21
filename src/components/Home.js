import React, {useEffect} from "react"
import {connect} from "react-redux"
import {getList, refreshList} from "../actions"

import List from "./List"
import Form from "./Form"

const Home = ({getList, refreshList, query, searchValue}) => {


    useEffect(()=> {
        getList()
            // eslint-disable-next-line
    }, [])

    useEffect(()=> {
        refreshList()
    }, [query, searchValue])
    

    return(
        <div className="home-container">
            <Form />
            <List />
        </div>
    )
}

const mapStateToProps = state => ({
    query: state.query,
    searchValue: state.searchValue
})
  
  export default connect(mapStateToProps,{getList, refreshList})(Home);
  