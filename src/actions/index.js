export const CHANGE_QUERY = 'CHANGE_QUERY'
export const SEARCH = 'SEARCH'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const SET_LIST= 'SET_LIST'

export const setExchangeList = list => ({
    type: SET_LIST,
    payload: list
})

export const changeQuery = number => ({
    type: CHANGE_QUERY,
    payload: number
}) 

export const search = () => ({
    type: SEARCH,
    payload: null
})

export const handleChange = event => ({
    type: HANDLE_CHANGE,
    payload: event.target
})
