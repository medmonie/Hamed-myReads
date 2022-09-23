import { Link } from "react-router-dom";
import BookItem from "./bookitem";
import "../App.css";

const Shelves = ({ books, onChangeShelf }) => {
  const shelfList = [
    { id: "1", title: "Currently Reading", shelf: "currentlyReading" },
    { id: "2", title: "Want to Read", shelf: "wantToRead" },
    { id: "3", title: "Read", shelf: "read" },
  ];

  function updateBookShelf(book, bookShelf) {
    onChangeShelf(book, bookShelf);
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfList.map((shelfinfo) => (
            <div className="bookshelf" key={shelfinfo.id}>
              <h2 className="bookshelf-title">{shelfinfo.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter((book) => book.shelf === shelfinfo.shelf)
                    .map((filteredbook) => (
                      <li key={filteredbook.id}>
                        <BookItem
                          book={filteredbook}
                          updateBookShelf={updateBookShelf}
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  );
};
export default Shelves;
