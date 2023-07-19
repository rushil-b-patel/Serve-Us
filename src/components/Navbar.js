import { useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 justify-content flex">
            <span className="sr-only">Serve Us</span>
            <img className="h-8 mr-3 w-auto" src="sulogo.png" alt="Serve Us" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Serve Us
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden  lg:flex lg:gap-x-12">
          <NavLink
            to="/"
            className="font-semibold text-white hover:text-zinc-500 aria-[current=page]:text-blue-400"
          >
            Home
          </NavLink>

          <NavLink
            to="/Services"
            className="font-semibold text-white hover:text-zinc-500 aria-[current=page]:text-blue-400"
          >
            Services
          </NavLink>

          <NavLink
            to="/Form"
            id="Product"
            className="font-semibold text-white hover:text-zinc-500 aria-[current=page]:text-blue-400"
          >
            Hire
          </NavLink>

          <NavLink
            to="/Jobs"
            className="font-semibold text-white hover:text-zinc-500 aria-[current=page]:text-blue-400"
          >
            Jobs
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to="login"
            className="font-semibold text-white hover:text-zinc-500 aria-[current=page]:text-blue-400"
          >
            Log In
            {/* <span aria-hidden="true">&rarr;</span> */}
          </NavLink>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden transition duration-300 ease-out"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Transition
          show={mobileMenuOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-750"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Serve Us</span>
                <img
                  className="h-8 w-auto"
                  src="sulogo.png"
                  alt="Logo"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <NavLink
                        to="/"
                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 font-semibold hover:text-zinc-500 aria-[current=page]:text-blue-400"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Home
                      </NavLink>
                    )}
                  </Disclosure>
                  <NavLink
                    to="/Services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:text-zinc-500 aria-[current=page]:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/Form"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:text-zinc-500 aria-[current=page]:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Hire
                  </NavLink>
                  <NavLink
                    to="/Jobs"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:text-zinc-500 aria-[current=page]:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Jobs
                  </NavLink>
                </div>
                <div className="py-6">
                  <NavLink
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold hover:text-zinc-500 aria-[current=page]:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log In
                  </NavLink>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition>
      </Dialog>
    </header>
  );
}
