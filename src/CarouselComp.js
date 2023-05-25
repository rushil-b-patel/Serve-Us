import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComp = () => {
    return (
      <Carousel>
        <div>
          <img src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?cs=srgb&dl=pexels-malte-luk-2244746.jpg&fm=jpg" alt="Slide 1" />
          <p className="legend">Slide 1 Caption</p>
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU=" alt="Slide 2" />
          <p className="legend">Slide 2 Caption</p>
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1284285153/photo/auto-mechanic-working-on-car-engine-in-mechanics-garage-repair-service-authentic-close-up-shot.jpg?s=612x612&w=0&k=20&c=7AbRTEvT_5McOvmE1ArLvcowxlEuiPYPvMFEBjQEiAU=" alt="Slide 3" />
          <p className="legend">Slide 3 Caption</p>
        </div>
      </Carousel>
    );
  };
  
  export default CarouselComp;
  