import "../App.css";
import Bookthumb from "./bookthumb";
import ShelfSelector from "./shelf-selector";
import Bookinfo from "./bookinfo";

const BookItem = ({ book, updateBookShelf }) => {
  function changeBookShelf(oldbook, bookShelf) {
    updateBookShelf(oldbook, bookShelf);
  }
  return (
    <div className="book">
      <div className="book-top">
        <Bookthumb book={book} />
        <ShelfSelector book={book} changeBookShelf={changeBookShelf} />
      </div>
      <Bookinfo book={book} />
    </div>
  );
};

export default BookItem;
