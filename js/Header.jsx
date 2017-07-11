import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    let utilSpace;
    if (this.props.showSearch) {
      utilSpace = (
        <input
          onChange={this.props.handleSearchTermChange}
          value={this.props.searchTerm}
          type="text"
          placeholder="Search"
        />
      );
    } else {
      utilSpace = (
        <h2>
          <Link to="/search">Back</Link>
        </h2>
      );
    }
    return (
      <header>
        <h1 onChange={this.someMethod}>
          <Link to="/">
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    );
  }
}

const { func, bool, string } = React.PropTypes;

Header.propTypes = {
  handleSearchTermChange: func.isRequired,
  showSearch: bool.isRequired,
  searchTerm: string.isRequired,
};

export default Header;