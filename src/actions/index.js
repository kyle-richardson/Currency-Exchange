import axios from "axios"

export const CHANGE_QUERY = 'CHANGE_QUERY'
export const HANDLE_SEARCH = 'HANDLE_SEARCH'
export const HANDLE_CHANGE = 'HANDLE_CHANGE'
export const SET_LIST= 'SET_LIST'
export const FETCH_LIST_START = 'FETCH_LIST_START'
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS'
export const FETCH_LIST_FAIL = 'FETCH_LIST_FAIL'

export const getList = () => dispatch => {
    dispatch({ type: FETCH_LIST_START });
    axios
      .get('https://openexchangerates.org/api/latest.json?app_id=c369c926595647bdaafaad7c44843b2d')
      .then(res =>
        dispatch({ type: FETCH_LIST_SUCCESS, payload: Object.entries(res.data.rates) })
      )
      .catch(err => dispatch({ type: FETCH_LIST_FAIL, payload: err }));
  };

export const handleSearch = event => ({
    type: HANDLE_SEARCH,
    payload: event.target
})

export const handleChange = event => ({
    type: HANDLE_CHANGE,
    payload: event.target
})
