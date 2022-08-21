import React from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const Info = ({ book, className }) => {
  return (
    <div className={className}>
      <h2 className=" text-2xl font-bold text-primary-200">{book.title}</h2>

      <p className="text-gray-200 mb-4">{book.authors[0].name}</p>

      <div className="mb-4">
        <ListItem title={"AUTHOR"} value={book.authors[0].name} />
        <ListItem title={"LANGUAGE"} value={book.languages[0]} />
        <ListItem
          title={"COPYRIGHT"}
          value={book.copyright ? book.copyright : "No Copyright"}
        />
      </div>

      <div className="mb-4 -ml-1">
        {book.subjects.map((item, i) => (
          <Subject item={item} />
        ))}
      </div>

      <div className="mb-8">
        <EbookBtn DLink={book.formats["application/epub+zip"]} />
      </div>
    </div>
  );
};

const Subject = ({ item }) => {
  return (
    <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded inline-block mb-1 bg-purple-100 text-primary-200">
      {item}
    </span>
  );
};

const EbookBtn = ({ DLink }) => {
  return (
    <a
      href={DLink}
      className="w-36 inline-flex items-center justify-between px-4 py-2 text-base font-medium text-center border rounded-md  text-light bg-primary-100 hover:bg-primary-200 focus:ring-4 focus:ring-gray-100"
    >
      <span>Get Ebook </span> <ArrowSmRightIcon className="w-6" />
    </a>
  );
};

const ListItem = ({ title, value }) => {
  return (
    <div className="flex items-center mb-1">
      <div className="w-28 text-sm text-gray-600 font-semibold">{title}</div>
      <div className="text-gray-300 capitalize">{value}</div>
    </div>
  );
};

export default Info;
