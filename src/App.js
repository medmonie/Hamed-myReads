import "./App.css";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./components/search";
import Shelves from "./components/Shelves";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => BooksAPI.getAll().then((books) => setBooks(books)), []);

  const updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      let updatebook = { ...book, shelf };
      let oldbooks = books.filter((oldbook) => oldbook.id !== book.id);
      setBooks([...oldbooks, updatebook]);
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route exact path={"/search"} element={<SearchBooks />} />
        <Route
          exact
          path={"/"}
          element={<Shelves books={books} onChangeShelf={updateBooks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
