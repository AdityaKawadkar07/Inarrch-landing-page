import React, { useState } from 'react';
import './Usp.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';

const images = [
  { src: gallery_1, text: "Skilled marketers, developers, and SEO specialists driving success." },
  { src: gallery_2, text: "Proven strategies powered by Result Driven Strategies" },
  { src: gallery_3, text: "Custom, scalable solutions for startups & enterprises." },
  { src: gallery_4, text: "Trust & transparency with ethical practices and data security." },
];

const Usp = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='usp'>
      <div className="gallery">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="image-container"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setHoveredIndex(index)}
          >
            <img src={image.src} alt="" className={hoveredIndex === index ? 'blurred' : ''} />
            {hoveredIndex === index && (
              <div className="overlay">
                <span>{image.text}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  );
}

export default Usp;