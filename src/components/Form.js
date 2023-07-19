import { useContext, useState } from "react";
import { FormContext } from "../FormContext";

export const Data = {};

export default function Form() {
  // const [fname, setFname] = useState('');
  // const [lname, setLname] = useState('');
  // const [email, setEmail] = useState('');
  // const [number, setNumber] = useState();
  // const [message, setMessage] = useState();
  // const [date, setDate] = useState(null);
  // const [list, setList] = useState([]);

  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    date: null,
    message: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [state, setState] = useContext(FormContext);

  // const fnameRef = useRef();
  // useEffect(() =>{
  //     fnameRef.current.focus();
  //   },[])
  // setState((pre) => [...pre,input]);

  const FnameChangeHandler = (event) => {
    // setFname(event.target.value);
    setInput({ ...input, fname: event.target.value });
  };

  const LnameChangeHandler = (event) => {
    // setLname(event.target.value);
    setInput({ ...input, lname: event.target.value });
  };

  const emailChangeHandler = (event) => {
    // setEmail(event.target.value);
    setInput({ ...input, email: event.target.value });
  };

  const numberChangeHandler = (event) => {
    // setNumber(event.target.value);
    setInput({ ...input, number: event.target.value });
  };
  const messageChangeHandler = (event) => {
    // setMessage(event.target.value);
    setInput({ ...input, message: event.target.value });
  };

  const dateChangeHandler = (event) => {
    // setDate(event.target.value);
    setInput({ ...input, date: event.target.value });
  };

  const serviceChangeHandler = (event) => {
    if (event.target.checked) {
      setIsChecked(true);
      console.log(isChecked);
      setInput({ ...input, service: event.target.value });
    }
  };

  const submitHandler = (event) => {
    // const FName = fnameRef.current.value;
    event.preventDefault();

    // const Data = {
    //   fname: fname,
    //   lname: lname,
    //   email: email,
    //   number: number,
    //   message: message,
    //   date: date,
    //   // FName : FName,            // Using useRef
    // };

    // console.log(Data);
    // console.log(input);
    // props.onSaveData(Data);

    if (input.fname && input.email && input.number)
      setState((pre) => [...pre, input]);
    setInput({
      fname: "",
      lname: "",
      email: "",
      number: "",
      message: "",
      date: null,
    });
    // setList((ls) => [...ls, Data])
    // setFname('');
    // setLname('');
    // setEmail('');
    // setNumber('');
    // setMessage('');
    // setDate('');
    // fnameRef.current.value='';   // Using useRef
  };

  return (
    <>
      <div className="isolate bg-white px-6 py-10 sm:py-10 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Drop us a Booking
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Let the engine of the car spark..!
          </p>
        </div>
        <form
          onSubmit={submitHandler}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2.5">
                <input
                  // ref={fnameRef}
                  value={input.fname}
                  onChange={FnameChangeHandler}
                  type="text"
                  name="first-name"
                  // value={fname}
                  // onChange={FnameChangeHandler}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  value={input.lname}
                  onChange={LnameChangeHandler}
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Appointment Date
              </label>
              <div className="mt-2.5">
                <input
                  type="date"
                  name="company"
                  value={input.date}
                  onChange={dateChangeHandler}
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={input.email}
                  onChange={emailChangeHandler}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="number"
                  id="number"
                  value={input.number}
                  onChange={numberChangeHandler}
                  autoComplete="number"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  value={input.message}
                  onChange={messageChangeHandler}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>

          <label className="block text-sm font-semibold leading-6 text-gray-900 mt-6">
            Select Services
          </label>
          <div className="flex justify-evenly ">
            <div className="mt-3 justify-start">
              <div className="flex items-center mb-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  id="Transmission Service"
                  type="checkbox"
                  value="Transmission Service"
                  onChange={serviceChangeHandler}
                />
                <label
                  for="Transmission Service"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                >
                  Transmission Service
                </label>
                {/* <p className="font-bold">Rs. 1200/-</p> */}
              </div>

              <div className="flex items-center mb-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  id="Break Repair & Service"
                  type="checkbox"
                  value="Break Repair & Service"
                  onChange={serviceChangeHandler}
                />
                <label
                  for="Break Repair & Service"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                >
                  Break Repair & Service
                </label>
                {/* <p className="font-bold">Rs. 2400/-</p> */}
              </div>

              <div className="flex items-center mb-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  id="Tyre & Wheel Service"
                  type="checkbox"
                  value="Tyre & Wheel Service"
                  onChange={serviceChangeHandler}
                />
                <label
                  for="Tyre & Wheel Service"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                >
                  Tyre & Wheel Service
                </label>
                {/* <p className="font-bold">Rs. 900/-</p>  */}
              </div>
            </div>

            <div className="mt-3">
              <div className="flex items-center mb-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  id="Paint & Dent Service"
                  type="checkbox"
                  value="Paint & Dent Service"
                  onChange={serviceChangeHandler}
                />
                <label
                  for="Paint & Dent Service"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                >
                  Paint & Dent Service
                </label>
                {/* <p className="font-bold">Rs. 2400/-</p> */}
              </div>

              <div className="flex items-center mb-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  id="Engine Service & Repair"
                  type="checkbox"
                  value="Engine Service & Repair"
                  onChange={serviceChangeHandler}
                />
                <label
                  for="Engine Service & Repair"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                >
                  Engine Service & Repair
                </label>
                {/* <p className="font-bold">Rs. 1500/-</p> */}
              </div>

              <div className="flex items-center mb-4">
                <input
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  id="Performance Upgrade"
                  type="checkbox"
                  value="Performance Upgrade"
                  onChange={serviceChangeHandler}
                />
                <label
                  for="Performance Upgrade"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                >
                  Performance Upgrade
                </label>
                {/* <p className="font-bold">Rs. 2000/-</p> */}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's Serve
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
