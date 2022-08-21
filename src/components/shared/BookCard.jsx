import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="w-[180px] min-h-[330px] bg-white rounded-lg border border-gray-100 shadow-md ">
      <Link to={`/book/${book.id}`}>
        <img
          className="rounded-t-lg h-52 object-cover w-full"
          src={book.formats["image/jpeg"]}
          alt=""
        />
      </Link>
      <div className="px-4 my-2">
        <Link to={`/book/${book.id}`}>
          <h5
            className="mb-2 text-base font-bold tracking-tight text-gray-900"
            title={book.title}
          >
            {book.title.length > 30
              ? `${book.title.slice(0, 30)}...`
              : book.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">{book?.authors[0]?.name}</p>
      </div>
    </div>
  );
};

export default BookCard;
