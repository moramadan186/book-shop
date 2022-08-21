import React from "react";
import { useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Books", href: "/books", current: false },
];

const Navigation = () => {
  const pathname = useLocation().pathname;
  navigation[0].current = pathname === "/";
  navigation[1].current = pathname === "/books";

  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={classNames(
              item.current
                ? "text-primary-200 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[5px] after:h-[5px] after:rounded-full after:bg-primary-200 "
                : "text-gray-100 hover:text-primary-200",
              "px-3 py-2 rounded-md text-sm font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const NavigationPanal = () => {
  return (
    <Disclosure.Panel className="sm:hidden pb-4">
      <div className="px-2 pt-2 pb-3 space-y-1 rounded-lg w-11/12 mx-auto bg-gray-50">
        {navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as={Link}
            to={item.href}
            className={classNames(
              item.current
                ? "text-primary-200 text-center relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[5px] after:h-[5px] after:rounded-full after:bg-primary-200 "
                : "text-gray-100 hover:text-primary-200",
              "block px-3 py-2 rounded-md text-base font-medium text-center"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  );
};

export default Navigation;
