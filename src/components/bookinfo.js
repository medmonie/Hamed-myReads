import "../App.css";

const Bookinfo = ({ book }) => {
  const bookTitle = book.title ? book.title : "Missing Book Title";
  const bookAuthors = book.authors ? book.authors : "missing Book Authors";
  return (
    <div>
      <div className="book-title">{bookTitle}</div>
      <div className="book-authors">{bookAuthors}</div>
    </div>
  );
};
export default Bookinfo;
