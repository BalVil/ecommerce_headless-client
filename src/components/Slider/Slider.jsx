import React, { useState } from 'react';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import styles from './Slider.module.scss';
import { IconContext } from 'react-icons';

const data = [
  'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : prev => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : prev => prev + 1);
  };

  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        style={{ transform: `translateX(-${currentSlide * 100}dvw)` }}
      >
        <img src={data[0]} alt="slider image 1" />
        <img src={data[1]} alt="slider image 2" />
        <img src={data[2]} alt="slider image 3" />
      </div>
      <div className={styles.icons}>
        <IconContext.Provider value={{ className: styles.icon }}>
          <div onClick={prevSlide}>
            <MdOutlineArrowBackIos />
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{ className: styles.icon }}>
          <div onClick={nextSlide}>
            <MdOutlineArrowForwardIos />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Slider;
