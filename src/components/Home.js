import React, {useEffect} from "react"
import {connect} from "react-redux"
import {getList} from "../actions"

import List from "./List"
import Form from "./Form"

const Home = ({getList}) => {


    useEffect(()=> {
        getList()
            // eslint-disable-next-line
    }, [])

    

    return(
        <div className="home-container">
            <Form />
            <List />
        </div>
    )
}
  
  export default connect(null,{getList})(Home);
  