import React from 'react';

const NavSlider = ({ gameData, handleChangeGame, searchActiveStatus }) => (
  <div className="games__wrapper">
    <div className="swiper-button-prev" onClick={() => handleChangeGame('prev')}></div>
    
      <div className="slider__mask">
      { !searchActiveStatus ? 
        <div className="games__nav__slider swiper-container" data-topnav data-slider="thumbs-games">
          <div className="swiper-wrapper">
          <div className="games__nav__slide swiper-slide">
            <div className="games__nav__list__item">
              <img src={gameData.img} alt="Game" />
            </div>
          </div>
          </div>
        </div>
        : ''
      }
      </div>

    <div className="games__selected">
      <div>0</div>
    </div>
    <div className="swiper-button-next" onClick={() => handleChangeGame('next')}></div>
  </div>
)

export default NavSlider;