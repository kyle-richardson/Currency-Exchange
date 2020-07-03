import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getList, refreshList } from "../actions";

import List from "./List";
import Form from "./Form";
import Footer from "./Footer";
import Header from "./Header";

const Home = ({ getList, refreshList, query, searchValue, isFetching }) => {
  useEffect(() => {
    getList();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    refreshList();
    // eslint-disable-next-line
  }, [query, searchValue]);

  return isFetching ? (
    <div className="loading">Fetching Rates...</div>
  ) : (
    <div style={{ minHeight: "calc(100vh - 20px)" }}>
      <Header />
      <div className="home-container">
        <div className="home-top">
          <h2>Exchange rates</h2>
          <Form />
          <List />
        </div>

        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  query: state.query,
  searchValue: state.searchValue,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps, { getList, refreshList })(Home);
