import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import Button from "./Button";
import { TbWorld } from "react-icons/tb";
import Dropdown from "./Dropdown";
import { BiSearch } from "react-icons/bi";
import mainImage from "../assets/main.png";
import Tab from "./Tab";
import { CSSTransition } from "react-transition-group";
import "../index.css";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTab, setShowTab] = useState(false);

  useEffect(() => {
    const handleClickOutsideHeader = (e) => {
      const headerElement = document.getElementById("header");
      if (headerElement && !headerElement.contains(e.target)) {
        setShowTab(false);
      }
    };
    document.addEventListener("click", handleClickOutsideHeader);
    return () => {
      document.removeEventListener("click", handleClickOutsideHeader);
    };
  }, []);

  const showTabContent = (
    <div className={`flex justify-center items-center border-gray-400 `}>
      <div className="p-4 cursor-pointer border-b-2 border-transparent">
        Stays
      </div>
      <div className="p-4 cursor-pointer border-b-2 border-gray-500 border-black">
        Experiences
      </div>
      <div className="p-4 cursor-pointer border-b-2 border-transparent">
        Online Experiences
      </div>
    </div>
  );

  const hideTabContent = (
    <div
      className="hidden lg:flex lg:gap-x-12 cursor-pointer"
      onClick={() => {
        setShowTab((pre) => !pre);
      }}
    >
      <div className="flex items-center gap-3 border border-gray-200 rounded-full pl-5 pr-2 py-1.5 shadow-sm">
        <button
          className="font-semibold text-sm px-2"
          onClick={() => {
            setShowTab((pre) => !pre);
          }}
        >
          Anywhere
        </button>
        <button
          className="border-l-2 border-r-2 px-5 font-semibold text-sm"
          onClick={() => {
            setShowTab((pre) => !pre);
          }}
        >
          Anyweek
        </button>
        <button
          className="font-normal text-gray-400 text-sm px-2"
          onClick={() => {
            setShowTab((pre) => !pre);
          }}
        >
          Add guests
        </button>
        <Button
          text={<BiSearch className="text-white h-4 w-4 font-semibold" />}
          className="bg-[#FF385C] rounded-full p-2"
        />
      </div>
    </div>
  );

  return (
    <header
      id="header"
      className="bg-white border-b border-gray-200 px-12 transition-all duration-300"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={mainImage} alt="mainlogo" />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        {showTab ? showTabContent : hideTabContent}

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            text="Airbnb your home"
            className="text-gray-600 font-medium rounded-full px-4 py-2 hover:bg-gray-100"
          />
          <Button
            text={<TbWorld className="h-5 w-5" />}
            className="text-gray-600 font-medium rounded-full px-4 py-2 hover:bg-gray-100"
          />

          <Dropdown />
        </div>
      </nav>
      {showTab && <Tab />}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
