import "../App.css";

const Bookthumb = ({ book }) => {
  const thumbimage = book.imageLinks.thumbnail
    ? `url(${book.imageLinks.thumbnail})`
    : "";
  return (
    <div
      className="book-cover"
      style={{
        backgroundImage: thumbimage,
      }}
    ></div>
  );
};

export default Bookthumb;
