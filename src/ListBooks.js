import React, { Component } from "react";
import Book from "./Book";

class ListBooks extends Component {
  render() {
    const { filteredBooks, shelfUpdate } = this.props;
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
