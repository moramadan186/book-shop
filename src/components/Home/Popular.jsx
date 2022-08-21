import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import BookCard from "../shared/BookCard";
import Loader from "../shared/Loader";
import { getBooks } from "../../api/BooksApi";
import "swiper/css";

const Popular = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks(1);
      setBooks(response.data.results.slice(0, 10));
    };
    try {
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);
  return (
    <div
      className={`min-h-[20rem] ${
        loading ? "flex items-center justify-center" : ""
      }`}
    >
      {loading && <Loader />}
      {!loading && (
        <>
          <PopularHeader />
          <PopularSwiper books={books} />
        </>
      )}
    </div>
  );
};

const PopularHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h3 className=" text-lg font-bold text-gray-400">Popular Now</h3>
      <Link
        to={"/books"}
        className=" font-normal text-gray-300 hover:text-primary-200"
      >
        View All
      </Link>
    </div>
  );
};

const PopularSwiper = ({ books }) => {
  return (
    <div className="swiper mt-5">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          820: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5.5,
            spaceBetween: 30,
          },
        }}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Popular;
