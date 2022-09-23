import "../App.css";
import BookItem from "./bookitem";
import * as BookAPI from "../BooksAPI";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBooks = () => {
  const [querry, setQuerry] = useState("");
  const [books, setBooks] = useState([]);

  const updateResults = (newQuerry) => {
    setQuerry(newQuerry);
    if (newQuerry === "") {
      setBooks([]);
    } else {
      BookAPI.search(newQuerry, 20).then((bookResults) =>
        setBooks(bookResults)
      );
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={querry}
            onChange={(event) => updateResults(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <BookItem book={book} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default SearchBooks;
