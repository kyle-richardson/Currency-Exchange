import {
  HANDLE_SEARCH,
  HANDLE_CHANGE,
  FETCH_LIST_FAIL,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_START,
  REFRESH_LIST,
  FETCH_COUNTRY_SUCCESS,
} from "../actions";

const initialState = {
  baseExchangeList: [],
  shownList: [],
  query: 1,
  searchList: [],
  searchValue: "",
  error: "",
  isFetching: false,
  countryList: [],
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LIST_START:
      return {
        ...state,
        error: "",
        isFetching: true,
      };
    case FETCH_LIST_FAIL:
      return {
        ...state,
        error: payload,
        isFetching: false,
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        baseExchangeList: payload,
        shownList: payload,
      };
    case FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        countryList: [
          ...state.countryList,
          { currencyInfo: payload.currencyInfo, countries: payload.list },
        ],
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        searchValue: payload,
      };
    case HANDLE_CHANGE:
      return {
        ...state,
        query: payload.value,
      };
    case REFRESH_LIST:
      return {
        ...state,
        searchList: state.searchValue
          ? state.baseExchangeList
              .filter((ele) =>
                ele[0].toLowerCase().includes(state.searchValue.toLowerCase())
              )
              .map((ele) => [ele[0], ele[1] * state.query])
          : [],
        shownList: !isNaN(state.query)
          ? state.baseExchangeList.map((ele) => [ele[0], ele[1] * state.query])
          : [],
      };
    default:
      return state;
  }
};
