import React, { Component } from 'react';
import { ReactComponent as Loupe } from './loupe.svg';
import './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.term);
  };

  render() {
    return (
      <div className='searchBar'>
        <div className='searchBar__field'>
          <form onSubmit={this.onSubmit}>
            <label htmlFor='videoSearch' className='searchBar__label'>
              Video Search
            </label>
            <input
              onChange={this.onChange}
              name='videoSearch'
              type='text'
              value={this.state.term}
              className='searchBar__input'
            />
          </form>
        </div>
        <button onClick={this.onSubmit} className='searchBar__button'>
          <Loupe className='search__icon' alt='Search Icon' />
        </button>
        <button
          onClick={this.props.toggleSearchBar}
          className='searchBar__close'
        >
          X
        </button>
      </div>
    );
  }
}

export default SearchBar;
