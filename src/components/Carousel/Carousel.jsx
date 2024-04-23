'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  overflow: hidden;
  display: flex;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 2rem;
`;

const LeftArrow = styled(Arrow)`
  left: 10px;
`;

const RightArrow = styled(Arrow)`
  right: 10px;
`;

const Description = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #b9562e;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <CarouselImage
          key={index}
          src={image.src}
          alt={image.alt}
          style={{
            transform: `translateX(-${current * 400}px)`,
            transition:
              index === current ? 'transform 0.5s ease-in-out' : 'none',
          }}
        />
      ))}
      <LeftArrow onClick={prevSlide}>&lt;</LeftArrow>
      <RightArrow onClick={nextSlide}>&gt;</RightArrow>
      <Description>
        {images[current].title}
        {images[current].description}
      </Description>
    </CarouselContainer>
  );
};

export default Carousel;
