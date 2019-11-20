import { HANDLE_SEARCH, HANDLE_CHANGE, SET_LIST, FETCH_LIST_FAIL, FETCH_LIST_SUCCESS, FETCH_LIST_START} from "../actions"

const initialState = {
    baseExchangeList: [],
    shownList: [],
    query: 1,
    searchList: [],
    searchValue: '',
    error: '',
    isFetching: false
}

export const rootReducer = (state = initialState, {type, payload})=> {
    switch (type) {
        case FETCH_LIST_START:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case FETCH_LIST_FAIL:
            return {
                ...state,
                error: payload,
                isFetching: false
            }
        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                baseExchangeList: payload,
                shownList: payload
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
