import {CHANGE_QUERY, SEARCH, HANDLE_CHANGE, SET_LIST} from "../actions"

const initialState = {
    exchangeList: [],
    query: 1,
    searchList: [],
    searchValue: ''
}

export const rootReducer = (state = initialState, {type, payload})=> {
    switch (type) {
        case SET_LIST:
            return {
                ...state,
                exchangeList: payload
            }
        case CHANGE_QUERY:
           return {
            ...state,
            query: payload
           }
        case SEARCH:
            console.log("changing Search state")
            return {
             ...state,
             searchList: state.exchangeList.filter(ele=> {
                 console.log(ele[0], state.searchValue)
                 return ele[0].toLowerCase().contains(state.searchValue.toLowerCase())
                })
            }
        case HANDLE_CHANGE:
            console.log(payload)
            return {
                ...state,
                [payload.name]: payload.value,
               }
        default: 
            return state
    }
}
