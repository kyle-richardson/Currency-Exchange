import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { handleSearch } from "../actions";

const List = ({
  countryList,
  handleSearch,
  shownList,
  searchList,
  searchValue,
}) => {
  const list = searchValue ? searchList : shownList;

  const [singleItem, setSingleItem] = useState([]);
  const [countries, setCountries] = useState([]);

  const selectedOne = () => {
    const filtered = countryList.filter(
      (item) => item.currencyInfo.code === list[0][0]
    );
    setSingleItem(filtered);
    setCountries(filtered[0] ? filtered[0].countries : null);
  };
  useEffect(() => {
    if (list.length === 1) {
      selectedOne();
    }
    // eslint-disable-next-line
  }, [list]);

  return (
    <div className={list.length === 1 ? "solo" : "list"}>
      {list.map((ele) => {
        return (
          <div
            key={ele[0]}
            className="single-item"
            onClick={() =>
              list.length === 1 ? handleSearch("") : handleSearch(ele[0])
            }
          >
            {`${Math.round(ele[1])} ${ele[0]}`}
          </div>
        );
      })}
      {list.length === 1 && (
        <div>
          <h3>Currency info:</h3>
          <p>
            Full name:{" "}
            {singleItem.length > 0 && singleItem[0].currencyInfo.name
              ? singleItem[0].currencyInfo.name
              : "(no name available)"}
          </p>
          <p>
            Symbol:{" "}
            {singleItem.length > 0 && singleItem[0].currencyInfo.symbol
              ? singleItem[0].currencyInfo.symbol
              : "(no symbol)"}
          </p>
          <h3>Countries associated with this currency:</h3>
          {countries
            ? countries.map((country) => <p key={country}>{country}</p>)
            : "(no countries found)"}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  countryList: state.countryList,
  baseExchangeList: state.baseExchangeList,
  shownList: state.shownList,
  searchList: state.searchList,
  searchValue: state.searchValue,
});

export default connect(mapStateToProps, { handleSearch })(List);
