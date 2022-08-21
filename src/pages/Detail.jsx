import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../api/BooksApi";
import bookAnimated from "../assets/book-animateS.svg";
import Image from "../components/Detail/Image";
import Info from "../components/Detail/Info";
import Loader from "./../components/shared/Loader";

const Detail = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchBook = async () => {
      const response = await getBook(id);
      setBook(response.data);
    };
    try {
      fetchBook();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);
  return (
    book && (
      <>
        {loading && <Loader />}
        {!loading && (
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start">
            <div className="w-full sm:w-[70%] sm:mt-12 flex flex-col-reverse sm:flex-row justify-center items-center sm:items-start ">
              <Image book={book} className="w-[30%]" />
              <Info book={book} className="w-full sm:w-[70%] pl-3" />
            </div>
            <div className="w-[80%] sm:w-[30%]">
              <img src={bookAnimated} alt="bookAnimated" className="w-full" />
            </div>
          </div>
        )}
      </>
    )
  );
};

export default Detail;
