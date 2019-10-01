import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Shelf from "./Shelf";
import SearchBooks from "./SearchBooks";

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
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

  render() {
    const currentlyReading = this.state.books.filter(
      b => b.shelf === "currentlyReading"
    );
    const read = this.state.books.filter(b => b.shelf === "read");
    const wantToRead = this.state.books.filter(b => b.shelf === "wantToRead");

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks onBackButton={this.goBackToShelves} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf
                  filteredBooks={currentlyReading}
                  title="Currently Reading"
                />
                <Shelf filteredBooks={wantToRead} title="Want to Read" />
                <Shelf filteredBooks={read} title="Read" />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
