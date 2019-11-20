import { HANDLE_SEARCH, HANDLE_CHANGE, SET_LIST} from "../actions"

const initialState = {
    baseExchangeList: [],
    shownList: [],
    query: 1,
    searchList: [],
    searchValue: ''
}

export const rootReducer = (state = initialState, {type, payload})=> {
    switch (type) {
        case SET_LIST:
            return {
                ...state,
                [payload.title]: payload.list
            }
        case HANDLE_SEARCH:
            return {
                ...state,
                [payload.name]: payload.value,
                searchList: state.shownList.filter(ele=> ele[0].toLowerCase().includes(payload.value.toLowerCase()))
            }
        case HANDLE_CHANGE:
            return {
                ...state,
                query: payload.value,
                shownList: !isNaN(payload.value) ? state.baseExchangeList.map(ele=> [ele[0], ele[1]*payload.value]) : []
               }
        default: 
            return state
    }
}
