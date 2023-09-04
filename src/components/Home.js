import React from 'react'
import SubscribeLetter from './SubscribeLetter'
import CarouselComp from "./CarouselComp";

export default function Home() {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex">
          <div className="w-1/2 sticky top-0">
            <h1 className="font-medium text-black text-3xl">Service Name</h1>

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="purple"
                className="w-6 h-6 mr-3"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>

              <h1 className="font-seif text-md">5.43 (1.2K booking)</h1>
            </div>
            <div>
              <p className="inline-flex justify-between items-center py-1 px-1 my-1 text-sm font-medium text-blue-800 bg-blue-50 rounded-full">
                <span className="text-sm font-medium">
                  Read the professional guidelines
                </span>
                <svg
                  aria-hidden="true"
                  className="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </p>
            </div>
          </div>

          <div className="w-3/4 overflow-hidden">
            <CarouselComp image1="https://content.jdmagicbox.com/comp/anand/z8/9999p2692.2692.211122184112.x7z8/catalogue/vaishali-plumbing-services-vallabh-vidyanagar-anand-plumbers-sc36hkqmyx.jpg"
                          image2="https://content.jdmagicbox.com/comp/anand/z8/9999p2692.2692.211122184112.x7z8/catalogue/vaishali-plumbing-services-vallabh-vidyanagar-anand-plumbers-sc36hkqmyx.jpg"
                          image3="https://content.jdmagicbox.com/comp/anand/z8/9999p2692.2692.211122184112.x7z8/catalogue/vaishali-plumbing-services-vallabh-vidyanagar-anand-plumbers-sc36hkqmyx.jpg"
            />
          </div>
        </div>
      </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SubscribeLetter />    
        </div>    
    </div>
  )
}
