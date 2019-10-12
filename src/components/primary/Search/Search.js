import React, { Component } from 'react';
import './Search.scss';
import { ReactComponent as Loupe } from './loupe.svg';
import { SearchBar } from 'components/primary';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchBar: false
    };
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
  }

  toggleSearchBar = event => {
    event.preventDefault();
    let { showSearchBar } = this.state;
    this.setState({ showSearchBar: !showSearchBar });
  };

  render() {
    const { showSearchBar } = this.state;
    return (
      <div
        className={
          !showSearchBar ? 'search search--icon' : 'search search--bar'
        }
      >
        {!showSearchBar ? (
          <div className='search__iconContainer' onClick={this.toggleSearchBar}>
            <Loupe className='search__icon' alt='Search Icon' />
          </div>
        ) : (
          <SearchBar
            handleSearch={this.props.handleSearch}
            toggleSearchBar={this.toggleSearchBar}
          />
        )}
      </div>
    );
  }
}

export default Search;
