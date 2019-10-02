import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class ListBooks extends Component {
  // TODO: PropTypes
  // TODO: Everything else!
  render() {
    const { filteredBooks, title, shelfUpdate } = this.props;
    return (
      <ol className="books-grid">
        {filteredBooks.map(book => (
          <li key={book.id}>
            <Book book={book} shelfUpdate={shelfUpdate} />
          </li>
        ))}
      </ol>
    );
  }
}

export default ListBooks;
