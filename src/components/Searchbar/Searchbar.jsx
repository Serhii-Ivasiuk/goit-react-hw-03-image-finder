// Libs
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  state = { searchQuery: '' };

  handleInput = event => {
    const inputValue = event.currentTarget.value;

    this.setState({ searchQuery: inputValue });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { searchQuery } = this.state;
    const { onSubmit } = this.props;

    if (searchQuery.trim() === '') {
      this.setState({ searchQuery: '' });

      alert('Please, enter yor search request.');

      return;
    }

    onSubmit(searchQuery);

    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}
