import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {

    const [input, setInput] = useState({
        email: '',
        number :'',
        password:'',
        confirmPassword:''
    })

    const [error,setError] = useState({
        email:'',
        number:'',
        password:'',
        confirmPassword: ''
    })

    const onInputChange = e =>{
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,[name]:value
        }))
        validateInput(e);
    }

    const validateInput = e =>{
        let { name, value } = e.target
        setError(prev => {
            const stateObj = { ...prev, [name]: ""};

            switch (name) {
                case "email":
                    if (!value) {
                        stateObj[name] = "Please Enter your Email"
                    }
                    break;

                case "number":
                    if (!value) {
                        stateObj[name] = "Please Enter your Mobile Number"
                    }
                    break;
                
                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (input.password && value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;
                
                default:
                    break;
                }
                return stateObj;
        })
    }

  return (
    <div className="bg-white py-10 flex justify-center items-center">
      <div class="w-full max-w-sm p-4 bg-slate-100 border-gray-700 rounded-lg shadow sm:p-6 md:p-8">
        <form class="space-y-6" action="">
          <h5 class="text-2xl font-medium text-center text-black">
            Sign up to our platform
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
              value={input.email}
              onChange={onInputChange}
              onBlur={validateInput}
              class="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
              placeholder="name@company.com"
              required
            />
            {error.email && <span className='err'>{error.email}</span>}
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-black"
            >
              Your Mobile Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              value={input.number}
              onChange={onInputChange}
              onBlur={validateInput}
              class="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
              placeholder="000000000"
              required
            />
            {error.number && <span className='err'>{error.number}</span>}
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-black"
            >
              Create password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="•••••••••"
              value={input.password}
              onChange={onInputChange}
              onBlur={validateInput}
              class="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
              required
            />
            {error.password && <span className='err'>{error.password}</span>}
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-black"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="•••••••••"
              value={input.confirmPassword}
              onChange={onInputChange}
              onBlur={validateInput}
              class="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
              required
            />
            {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
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
            Already registered?{" "}
            <Link to='/login'
              class="text-blue-700 hover:underline dark:text-blue-500"
            >
              Sigin to your Account
            </Link>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Signup