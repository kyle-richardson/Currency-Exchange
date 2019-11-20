export const CHANGE_QUERY = 'CHANGE_QUERY'
export const HANDLE_SEARCH = 'HANDLE_SEARCH'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const SET_LIST= 'SET_LIST'

export const setList = (title, list) => ({
    type: SET_LIST,
    payload: {
        title: title,
        list: list
    }
})

export const changeQuery = number => ({
    type: CHANGE_QUERY,
    payload: number
}) 

export const handleSearch = event => ({
    type: HANDLE_SEARCH,
    payload: event.target
})

export const handleChange = event => ({
    type: HANDLE_CHANGE,
    payload: event.target
})
