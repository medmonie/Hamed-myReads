import "../App.css";
import { useState } from "react";

const ShelfSelector = ({ book, changeBookShelf }) => {
  const [bookShelf, setBookShelf] = useState(book.shelf);

  const updateShelf = (bookShelf) => {
    setBookShelf(bookShelf);
    changeBookShelf(book, bookShelf);
  };

  return (
    <div className="book-shelf-changer">
      <select
        value={`${bookShelf}`}
        onChange={(event) => {
          updateShelf(event.target.value);
        }}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfSelector;
