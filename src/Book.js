import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  };

  onShelfUpdate = s => {
    let shelf = s.target.value;
    this.props.shelfUpdate(this.props.book, shelf);
  };

  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              // conditional check
              // && used as a conditional return
              // if image links is defined, then return this.
              backgroundImage: `url(${book.imageLinks &&
                book.imageLinks.smallThumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={this.onShelfUpdate} defaultValue={book.shelf}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book;
