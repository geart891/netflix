import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchTerm } from './redux/actionCreators';

class Landing extends Component {
  props: {
    searchTerm: string,
    brandName: string,
    setSearchTerm: Function,
    history: RouterHistory,
  };
  handleSetSearchTerm = e => {
    this.props.setSearchTerm(e.target.value);
  };
  handleSearchSubmit = e => {
    e.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    return (
      <div className="landing">
        <h1>
          {this.props.brandName}
        </h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            value={this.props.searchTerm}
            onChange={this.handleSetSearchTerm}
            placeholder="Search"
          />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  brandName: state.brandName,
});
const mapDispatchToProps = dispatch => ({
  setSearchTerm: searchTerm => dispatch(setSearchTerm(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
