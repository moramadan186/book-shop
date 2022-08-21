import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Pagination = ({ activePage, setActivePage }) => {
  const count = activePage > 5 ? activePage : 5;
  const countArr = Array.from({ length: count }, (item, i) => i);

  return (
    <nav aria-label="books page navigation" className="text-center mt-8">
      <ul className="inline-flex items-center -space-x-px">
        <MoveIcon
          setActivePage={setActivePage}
          icon={<ChevronLeftIcon className="w-4 h-4 text-gray-300" />}
          dir="l"
          onClick={() => setActivePage((a) => (a < 2 ? a : a - 1))}
        />
        {countArr.slice(-5).map((item) => (
          <li
            key={item}
            onClick={(e) => {
              setActivePage(item + 1);
            }}
            className={classNames(
              activePage === item + 1
                ? "z-10 py-2 px-3 h-10 cursor-pointer leading-tight text-gray-700 bg-gray-100 border border-primary-100"
                : "py-2 px-3 h-10 cursor-pointer leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            )}
          >
            {item + 1}
          </li>
        ))}
        <MoveIcon
          icon={<ChevronRightIcon className="w-4 h-4 text-gray-300" />}
          setActivePage={setActivePage}
          dir="r"
          onClick={() => setActivePage((a) => a + 1)}
        />
      </ul>
    </nav>
  );
};

const MoveIcon = ({ icon, setActivePage, dir, onClick }) => {
  return (
    <li
      className={`flex items-center py-2 px-3 h-10 cursor-pointer ml-0 leading-tight rounded-${dir}-lg text-gray-500 bg-white border border-gray-300 hover:text-gray-700 hover:bg-gray-100`}
      onClick={onClick}
    >
      {icon}
    </li>
  );
};

export default Pagination;
