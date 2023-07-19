import React from "react";

function BlogSection() {
  return (
    <div className="grid gap-8 sm:px-20 lg:grid-cols-2 py-10">
      <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-5 text-gray-100">
          <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 cursor-pointer hover:bg-blue-500 hover:text-white">
            <svg
              className="mr-1 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Tutorial
          </span>
          <span className="text-sm">14 days ago</span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">How our Experts work on your car</a>
        </h2>
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
          Car experts, such as automotive technicians or mechanics, work on cars
          by performing a variety of tasks to diagnose, repair, and maintain
          vehicles.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://i.pinimg.com/originals/c5/a8/a2/c5a8a27904e177379ccba91b2f1aa092.jpg"
              alt="Dominic Toretto avatar"
            />
            <span className="font-medium dark:text-white">Dominic Toretto</span>
          </div>
          <a
            href="#"
            className="inline-flex items-center font-medium text-gray-600 dark:text-gray-500 hover:underline"
          >
            Read more
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </article>
      <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center mb-5 text-gray-100">
          <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 cursor-pointer hover:bg-blue-500 hover:text-white">
            <svg
              className="mr-1 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clipRule="evenodd"
              ></path>
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
            </svg>
            Article
          </span>
          <span className="text-sm">14 days ago</span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">Precautions to take care for better health</a>
        </h2>
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
          Taking proper precautions and adopting good practices can contribute
          to better car health and performance. Regular Maintenance, Monitor
          Fluid Levels, keep tires in good condition.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2021/11/14/967557-roshan-singh-sodi.jpg?itok=XmZJvREa"
              alt="Roshan Sodhi avatar"
            />
            <span className="font-medium dark:text-white">Roshan Sodhi</span>
          </div>
          <a
            href="#"
            className="inline-flex items-center font-medium text-gray-600 dark:text-gray-500 hover:underline"
          >
            Read more
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </article>
    </div>
  );
}

export default BlogSection;
