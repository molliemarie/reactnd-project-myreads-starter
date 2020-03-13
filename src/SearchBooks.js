import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchBooks extends Component {
  state = {
    books: [],
    query: []
  };

  updateQuery = query => {
    if (!query) {
      this.setState({ query: "", books: [] });
    } else {
      this.setState({ query: query.trim() });
      BooksAPI.search(query).then(books => {
        this.setState({ books });
        if (books.error) {
          books = [];
        }
      });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.updateQuery(e.target.value)}
              // onChange={e => {
              //   // add search function and query parameters
              //   // will get results
              //   // then need to set state
              //   console.log(e.target.value);
              // }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => (
              <Book book={book} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
