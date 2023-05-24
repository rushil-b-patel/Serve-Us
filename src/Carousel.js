import React from 'react'
const images=[
    "https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg",
    "https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg",
    "https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg",
    "https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg",
]
export default function Carousel() {
    return (
      <div className=" flex items-center min-h-screen justify-center">
        {/* 1. */}
        <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
          {/* 2. */}
          <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
            {/* 3 */}
            {images.map((i) => {
              return (
                <div className="flex justify-center items-start w-[20rem]">
                  <img src={i} />
                </div>
              );
            })}
            {images.map((i) => {
              return (
                <div className="flex justify-center items-start w-[20rem]">
                  <img src={i} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }