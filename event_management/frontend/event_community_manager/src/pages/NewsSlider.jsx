// src/Carousel.js
import React, { useState, useEffect } from 'react';
import styles from './newsSlider.module.css'; // Import CSS Module

const carouselItems = [
  { 
    id: 1, 
    title: "Breaking News: React 18 Released!", 
    content: "React 18 is live with tons of new features.",
    imageUrl: "https://via.placeholder.com/400x250?text=React+18" 
  },
  { 
    id: 2, 
    title: "Tech Industry Embraces AI", 
    content: "Artificial Intelligence is making waves across industries.",
    imageUrl: "https://via.placeholder.com/400x250?text=AI+Industry"
  },
  { 
    id: 3, 
    title: "Upcoming JavaScript Frameworks", 
    content: "New JS frameworks to watch out for in 2024.",
    imageUrl: "https://via.placeholder.com/400x250?text=JavaScript+Frameworks"
  },
  { 
    id: 4, 
    title: "How to Stay Productive as a Developer", 
    content: "Productivity tips for developers in 2024.",
    imageUrl: "https://via.placeholder.com/400x250?text=Productivity+Tips"
  }
];

const NewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselItem}>
        <img src={currentItem.imageUrl} alt={currentItem.title} className={styles.carouselImage} />
        <h2>{currentItem.title}</h2>
        <p>{currentItem.content}</p>
      </div>

      {/* Navigation Buttons */}
      <button className={styles.carouselPrev} onClick={prevItem}>
      <i class="fa-solid fa-circle-arrow-left"></i>
      </button>
      <button className={styles.carouselNext} onClick={nextItem}>
      <i class="fa-solid fa-circle-arrow-right"></i>
      </button>
    </div>
  );
};

export default NewsSlider;
