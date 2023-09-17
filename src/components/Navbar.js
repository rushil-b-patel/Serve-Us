import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../context/AuthContext";
import LoginButton from "../Auth0/login";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  // const { authToken, user } = useContext(AuthContext);
  // const isAuthenticated = !!authToken;
  const { user, isAuthenticated } = useAuth0();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black">
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
            className="font-semibold text-white hover:text-[#F7E1D7] aria-[current=page]:text-[#F7E1D7]"
          >
            Home
          </NavLink>

          <NavLink
            to="/Services"
            className="font-semibold text-white hover:text-[#F7E1D7] aria-[current=page]:text-[#F7E1D7]"
          >
            Services
          </NavLink>

          <NavLink
            to="/Form"
            id="Product"
            className="font-semibold text-white hover:text-[#F7E1D7] aria-[current=page]:text-[#F7E1D7]"
          >
            Hire
          </NavLink>

          <NavLink
            to="/Jobs"
            className="font-semibold text-white hover:text-[#F7E1D7] aria-[current=page]:text-[#F7E1D7]"
          >
            Jobs
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          { isAuthenticated ? (
          <div className="flex items-center">
          <img
            className="h-8"
            src={user.picture}
            alt={user.name}
          />
          <span className="ml-2 text-white font-semibold cursor-pointer hover:text-[#F5D547] ease-in duration-150">{user.name}</span>
        </div>
          ) : (<LoginButton />) }
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Serve Us</span>
              <img className="h-8 w-auto" src="sulogo.png" alt="Logo" />
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
          <div className="flow-root">
            <div className="divide-y divide-white">
              <div className="space-y-2 my-5">
                <NavLink
                  to="/"
                  className="font-semibold text-white hover:text-[#F7E1D7] aria-[current=page]:text-[#F7E1D7] ease-in duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/Services"
                  className="block py-3 font-semibold text-white hover:text-[#F7E1D7] aria-[current=page]:text-[#F7E1D7] ease-in duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/Form"
                  className="block py-3 font-semibold text-white hover:text-[#F7E1D7] aria-[current=page]:text-[#F7E1D7] ease-in duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hire
                </NavLink>
                <NavLink
                  to="/Jobs"
                  className="block py-3 font-semibold text-white hover:text-[#F7E1D7] aria-[current=page]:text-[#F7E1D7] ease-in duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Jobs
                </NavLink>
              </div>
              <div className="pt-5">
                <NavLink
                  to="/Login"
                  className="font-semibold text-white mr-5 underline hover:text-[#F5D547] aria-[current=page]:text-[#F5D547] ease-in duration-150"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login/Signup
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
