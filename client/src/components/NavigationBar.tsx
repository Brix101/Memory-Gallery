/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import galleryImage from "../assets/gallery.png";
import Copyright from "./Copyright";

interface navItem {
  name: string;
  to: string;
  current?: boolean;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  const { pathname } = useLocation();

  const navigation: navItem[] = [
    { name: "Home", to: "/", current: pathname === "/" },
    { name: "Gallery", to: "gallery", current: pathname === "/gallery" },
    { name: "About Us", to: "about", current: pathname === "/about" },
    { name: "Contact", to: "contact", current: pathname === "/contact" },
    { name: "Login", to: "login" },
  ];

  return (
    <>
      <Disclosure as="nav" className="bg-slate-800 shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 flex items-stretch justify-between">
                  {/* Logo */}
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/">
                      <img
                        className="block h-10 hover:bg-slate-700 px-1 rounded-md"
                        src={galleryImage}
                        alt="Gallery"
                      />
                    </Link>
                  </div>
                  {/* Nav Item */}
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current
                              ? "bg-blue-500 text-black"
                              : "text-slate-50 hover:bg-slate-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current
                          ? "bg-blue-500 text-black"
                          : "text-slate-50 hover:bg-slate-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>

      {/* Page Views */}
      <Outlet />
      <Copyright />
    </>
  );
}