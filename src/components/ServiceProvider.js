import React from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function ServiceProvider() {
    const value=3.5;
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow py-8">
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 mb-1 rounded-full shadow-lg"
              src="Thor.jpg"
              alt="Name"usss
            />
            <h5 className="text-xl font-medium text-black">Umang Patel</h5>
            <div className="text-sm text-gray-500 bg-slate-200 p-1 rounded-lg m-2">Plumber</div>

            <div className="flex">
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box className="font-semibold" sx={{ ml: 2 }}>{labels[value]}</Box>
                </div>
            <div className="m-2 font-bold">
              Location : Anand
            </div>
            <div className="flex space-x-3">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200"
              >
                Serve Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProvider;
