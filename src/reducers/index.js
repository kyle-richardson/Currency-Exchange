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
  isExact: false,
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
        searchValue: payload.search,
        isExact: payload.isExact,
      };
    case HANDLE_CHANGE:
      return {
        ...state,
        query: payload.value,
      };
    case REFRESH_LIST:
      const countries = state.countryList
        ? state.countryList.filter((item) =>
            item.countries
              ? item.countries.filter((country) =>
                  country
                    .toLowerCase()
                    .includes(state.searchValue.toLowerCase())
                ).length > 0
              : false
          )
        : [];
      return {
        ...state,
        searchList: state.searchValue
          ? state.baseExchangeList
              .filter((ele) =>
                countries && !state.isExact
                  ? countries.filter((item) =>
                      ele[0]
                        .toLowerCase()
                        .includes(item.currencyInfo.code.toLowerCase())
                    ).length > 0 ||
                    ele[0]
                      .toLowerCase()
                      .includes(state.searchValue.toLowerCase())
                  : ele[0]
                      .toLowerCase()
                      .includes(state.searchValue.toLowerCase())
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
