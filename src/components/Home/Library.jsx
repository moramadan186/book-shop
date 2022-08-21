import React from "react";
import { Link } from "react-router-dom";

import bookLover from "../../assets/book-lover.svg";
const Library = () => {
  return (
    <section className="mb-10">
      <div className="grid pl-8 sm:pl-16 sm:mx-auto md:gap-8 xl:gap-0 md:grid-cols-12 rounded-xl py-7 lg:py-1 bg-secondary-100">
        <div className="mr-auto place-self-center md:col-span-7">
          <Title title={"Build your Library"} />
          <Decription />
          <ViewAllBtn />
        </div>
        <div className="hidden md:mt-0 md:col-span-5 md:flex">
          <img src={bookLover} alt="book lover" className="w-4/5 lg:w-3/4" />
        </div>
      </div>
    </section>
  );
};

const Title = ({ title }) => {
  return (
    <h1 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary-200">
      {title}
    </h1>
  );
};

const Decription = () => {
  return (
    <p className="max-w-2xl mb-6 font-normal md:mb-8 md:text-lg text-gray-200 ">
      Buy two selected books and get <br /> one for free
    </p>
  );
};

const ViewAllBtn = () => {
  return (
    <Link
      to={"/books"}
      className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center border rounded-md  text-light bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-100"
    >
      View all
    </Link>
  );
};
export default Library;
