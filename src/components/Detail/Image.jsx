import React from "react";

const Image = ({ book, className }) => {
  return (
    <div className={className}>
      <img
        src={book.formats["image/jpeg"]}
        alt={book.title}
        title={book.title}
        className="w-[200px]"
      />
    </div>
  );
};

export default Image;
