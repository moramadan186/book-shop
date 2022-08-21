import React, { useState, useEffect, useRef } from "react";
import { getBooks } from "../api/BooksApi";
import Pagination from "../components/Books/Pagination";
import BookCard from "./../components/shared/BookCard";
import Loader from "./../components/shared/Loader";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(true);
  const response = useRef(null);

  const fetchBooks = async () => {
    response.current = await getBooks(activePage);
    setBooks(response.current.data.results);
  };

  useEffect(() => {
    try {
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    try {
      fetchBooks();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [activePage]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-7 mb-10">
            {books.map((book) => (
              <BookCard book={book} key={book.id} />
            ))}
          </div>

          {response.current?.status === 200 && (
            <>
              <div className="text-center">{activePage}</div>
              <Pagination
                activePage={activePage}
                setActivePage={setActivePage}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Books;
