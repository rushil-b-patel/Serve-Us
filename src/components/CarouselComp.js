import React from "react";
import { motion } from "framer-motion";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "Hulk.jpg",
      caption: "Slide 1",
    },
    {
      id: 2,
      image: "Cap.jpg",
      caption: "Slide 2",
    },
    {
      id: 3,
      image: "IronMan.jpg",
      caption: "Slide 3",
    },
  ];

  return (
    <div className="carousel">
      {slides.map((slide) => (
        <motion.div
          key={slide.id}
          className="slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <img src={slide.image} alt={slide.caption} />
          <div className="caption">{slide.caption}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Carousel;
