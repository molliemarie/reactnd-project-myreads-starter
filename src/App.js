import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Shelf from "./Shelf";
import SearchBooks from "./SearchBooks";
import { Route, Link } from "react-router-dom";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
      console.log(books);
    });
  };

  goBackToShelves = () => {
    this.setState({ showSearchPage: false });
  };

  shelfUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(currentState => ({
        books: currentState.books.filter(b => b.id !== book.id).concat(book)
      }));
    });
  };

  render() {
    const currentlyReading = this.state.books.filter(
      b => b.shelf === "currentlyReading"
    );
    const read = this.state.books.filter(b => b.shelf === "read");
    const wantToRead = this.state.books.filter(b => b.shelf === "wantToRead");

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf
                    filteredBooks={currentlyReading}
                    title="Currently Reading"
                    shelfUpdate={this.shelfUpdate}
                  />
                  <Shelf
                    filteredBooks={wantToRead}
                    title="Want to Read"
                    shelfUpdate={this.shelfUpdate}
                  />
                  <Shelf
                    filteredBooks={read}
                    title="Read"
                    shelfUpdate={this.shelfUpdate}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link className="add-book" to="/search">
                  Add a book
                </Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={props => (
            <SearchBooks shelfUpdate={this.shelfUpdate} {...props} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
