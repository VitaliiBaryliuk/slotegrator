import React from 'react';

const MainSlider = ({ gameData }) => (
  <div className="games">
  <div className="slider__mask__main">
    <div className="games__slider swiper-container" data-slider="games">
      <div className="games__slider swiper-wrapper">
      </div>
      <div className="games__slide swiper-slide">
        <div className="games__list__item">
          <div className="games__list__wrap">
            <a href="#"><img src={gameData.img} alt="Game"/></a>
          </div>
          <span className="games__list__name">{gameData.name}</span>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default MainSlider;