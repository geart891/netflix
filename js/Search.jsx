import React from 'react';
import { shape, arrayOf, string } from 'prop-types';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.state = {
      searchTerm: '',
    };
  }
  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div className="search">
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description} ${show.year}`
                  .toLowerCase()
                  .indexOf(this.state.searchTerm.toLowerCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  shows: arrayOf(
    shape({
      title: string,
      description: string,
      year: string,
    })
  ).isRequired,
};

export default Search;