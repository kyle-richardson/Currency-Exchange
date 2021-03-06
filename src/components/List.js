import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { handleSearch } from "../actions";

//these are most popular traded currencies according to https://www.ig.com/us/trading-strategies/what-are-the-top-10-most-traded-currencies-in-the-world-200115
const popular = [
  "USD",
  "EUR",
  "JPY",
  "GBP",
  "AUD",
  "CAD",
  "CHF",
  "CNH",
  "HKD",
  "NZD",
];

const List = ({
  countryList,
  handleSearch,
  shownList,
  searchList,
  searchValue,
}) => {
  const list = searchValue ? searchList : shownList;
  const popularList = shownList.filter((ele) => popular.includes(ele[0]));

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
    <>
      <h4>Top 10 most traded currencies (alphabetical order):</h4>
      <div>
        <div className="list">
          {popularList.map((ele) => {
            return (
              <div
                key={ele[0]}
                className="single-item-popular"
                onClick={() => handleSearch(ele[0], true)}
              >
                {`${Math.round(ele[1])} ${ele[0]}`}
              </div>
            );
          })}
        </div>
      </div>
      <h4 style={list.length === 1 ? { visibility: "hidden" } : null}>
        {searchValue
          ? "Search Results (alphabetical order):"
          : "All currencies (alphabetical order):"}
      </h4>
      {list.length > 0 ? (
        <div className={list.length === 1 ? "solo" : "list"}>
          {list.map((ele) => {
            return (
              <div
                key={ele[0]}
                className="single-item"
                onClick={() =>
                  list.length === 1
                    ? handleSearch("")
                    : handleSearch(ele[0], true)
                }
              >
                {list.length === 1
                  ? `${ele[1].toFixed(3)}`
                  : `${Math.round(ele[1])}`}
                {` ${ele[0]}`}
              </div>
            );
          })}
          {list.length === 1 && (
            <div className="single-currency-box">
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
                  : "(no symbol found)"}
              </p>
              <h3>Territories associated with this currency:</h3>
              {countries
                ? countries.map((country) => <p key={country}>{country}</p>)
                : "(no countries found)"}
            </div>
          )}
        </div>
      ) : (
        <p>No currencies match your search.</p>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  countryList: state.countryList,
  shownList: state.shownList,
  searchList: state.searchList,
  searchValue: state.searchValue,
});

export default connect(mapStateToProps, { handleSearch })(List);
