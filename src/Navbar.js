import { useState } from 'react'
import { Dialog, Disclosure} from '@headlessui/react'
import {  Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom'
import './styles.css'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        <Link to='/' className="-m-1.5 p-1.5 justify-content flex">
            <span className="sr-only">Your Company</span>
            <img className="h-8 mr-3 w-auto" src="https://www.codenticsoftware.com/img/logo.png" alt="" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Codentic Car Spa</span>
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
          <NavLink to='/' className="font-semibold text-white hover:text-zinc-500 aria-[current=page]:text-blue-400">
            Home
          </NavLink>

          <NavLink to='/Services' className="font-semibold text-white hover:text-zinc-500 aria-[current=page]:text-blue-400">
            Services
          </NavLink>

          <NavLink to='/Product' id="Product" className="font-semibold text-white hover:text-zinc-500 aria-[current=page]:text-blue-400">
            Product
          </NavLink>

          <NavLink to='/Form' className="font-semibold text-white hover:text-zinc-500 aria-[current=page]:text-blue-400">
            Appointment
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to='/Contact' className="font-semibold text-white hover:text-zinc-500 aria-[current=page]:text-blue-400">
            Contact <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>
      
      <Dialog as="div" className="lg:hidden transition duration-300 ease-out" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel  className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to='/' className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://www.codenticsoftware.com/img/logo.png"
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
                      <Link to='/' 
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 font-semibold hover:text-zinc-500 aria-[current=page]:text-blue-400"
                      onClick={() => setMobileMenuOpen(false)} 
                      >
                        Home
                      </Link>
                  )}
                </Disclosure>
                <Link to='/Services'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:text-zinc-500 aria-[current=page]:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link to='/Product'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:text-zinc-500 aria-[current=page]:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Product
                </Link>
                <Link to='/Form'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:text-zinc-500 aria-[current=page]:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Appointment
                </Link>
              </div>
              <div className="py-6">
                <Link to='Contact'
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold hover:text-zinc-500 aria-[current=page]:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  ) 
}
