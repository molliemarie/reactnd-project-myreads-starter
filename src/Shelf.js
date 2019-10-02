import React, { Component } from "react";
import PropTypes from "prop-types";
import ListBooks from "./ListBooks";

class Shelf extends Component {
  static propTypes = {
    filteredBooks: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    shelfUpdate: PropTypes.func.isRequired
  };
  render() {
    const { filteredBooks, title, shelfUpdate } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ListBooks
            filteredBooks={filteredBooks}
            title={title}
            shelfUpdate={shelfUpdate}
          />
        </div>
      </div>
    );
  }
}

export default Shelf;
