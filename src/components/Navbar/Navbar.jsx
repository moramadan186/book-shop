import { useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "./Logo";
import Navigation, { NavigationPanal } from "./Navigation";
import Info from "./Info";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <Disclosure
      as="nav"
      className={`fixed w-full top-0 ${
        pathname === "/books" ? "shadow-sm" : ""
      } bg-light bg-scroll`}
    >
      {({ open }) => (
        <>
          <div className="container mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <MenuButton open={open} />
              <Logo />
              <Navigation />
              <Info />
            </div>
          </div>
          <NavigationPanal />
        </>
      )}
    </Disclosure>
  );
}

const MenuButton = ({ open }) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset text-gray-400 hover:text-white hover:bg-primary-200 focus:ring-white">
        <span className="sr-only">Open main menu</span>
        {open ? (
          <XIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  );
};
