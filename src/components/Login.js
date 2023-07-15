import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-white py-10 flex justify-center items-center">
      <div class="w-full max-w-sm p-4 bg-slate-100 border-gray-700 rounded-lg shadow sm:p-6 md:p-8">
        <form class="space-y-6" action="">
          <h5 class="text-2xl font-medium text-center text-black">
            Please Login to continue
          </h5>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-black"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-black"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="•••••••••"
              class="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
              required
            />
          </div>
          <div class="flex items-start">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-sm font-medium text-black"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div class="text-sm font-medium text-black flex justify-between">
            Not registered?{" "}
            <Link to='/signup'
              class="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
