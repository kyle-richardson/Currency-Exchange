import axios from "axios";

export const CHANGE_QUERY = "CHANGE_QUERY";
export const HANDLE_SEARCH = "HANDLE_SEARCH";
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const FETCH_LIST_START = "FETCH_LIST_START";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FETCH_LIST_FAIL = "FETCH_LIST_FAIL";
export const REFRESH_LIST = "REFRESH_LIST";
export const FETCH_COUNTRY_SUCCESS = "FETCH_COUNTRY_SUCCESS";

export const getList = () => (dispatch) => {
  dispatch({ type: FETCH_LIST_START });
  axios
    .get(
      `https://openexchangerates.org/api/latest.json?app_id=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => {
      const currencyArray = Object.entries(res.data.rates);
      dispatch({
        type: FETCH_LIST_SUCCESS,
        payload: currencyArray,
      });
      return currencyArray;
    })
    .then((arr) => {
      arr.forEach((ele) => {
        const currencyCode = ele[0];
        axios
          .get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
          .then((result) => {
            const info = result.data[0].currencies.filter(
              (item) => item.code === currencyCode
            )[0];
            dispatch({
              type: FETCH_COUNTRY_SUCCESS,
              payload: {
                currencyInfo: info,
                list: result.data.map((obj) => obj.name),
              },
            });
          })
          .catch((err) => {
            axios
              .get("https://openexchangerates.org/api/currencies.json")
              .then((res) => {
                dispatch({
                  type: FETCH_COUNTRY_SUCCESS,
                  payload: {
                    currencyInfo: {
                      code: currencyCode,
                      name: res.data[currencyCode],
                    },
                    list: null,
                  },
                });
              });
          });
      });
    })
    .catch((err) => dispatch({ type: FETCH_LIST_FAIL, payload: err }));
};

// export const getCountries = () => (dispatch) => {
//   dispatch({ type: FETCH_COUNTRIES_START });
//   axios
//     .get(
//       `https://openexchangerates.org/api/latest.json?app_id=${process.env.REACT_APP_API_KEY}`
//     )
//     .then((res) =>
//       dispatch({
//         type: FETCH_COUNTRIES_SUCCESS,
//         payload: Object.entries(res.data.rates),
//       })
//     )
//     .catch((err) => dispatch({ type: FETCH_COUNTRIES_FAIL, payload: err }));
// };

export const handleSearch = (search, isExact) => ({
  type: HANDLE_SEARCH,
  payload: { search: search, isExact: isExact },
});

export const handleChange = (event) => ({
  type: HANDLE_CHANGE,
  payload: event.target,
});

export const refreshList = () => ({
  type: REFRESH_LIST,
});
