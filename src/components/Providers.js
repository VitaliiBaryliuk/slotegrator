import React from 'react'; 

const Providers = () => (
    <div className="providers">
        <p data-providers-toggle className="providers__button"></p>
        <div className="providers__menu" data-providers-content>
        <ul className="providers__menu__list">
            <li className="providers__menu__item"><a href="#"
                className="providers__menu__link">PROVIDERS</a></li>
            <li className="providers__menu__item"><a href="#" className="providers__menu__link">ALL
                GAMES</a></li>
            <li className="providers__menu__item"><a href="#" className="providers__menu__link">fruit</a>
            </li>
            <li className="providers__menu__item"><a href="#" className="providers__menu__link">HOT</a></li>
            <li className="providers__menu__item"><a href="#" className="providers__menu__link">top</a></li>
            <li className="providers__menu__item"><a href="#" className="providers__menu__link">new</a></li>
        </ul>
        </div>
    </div>
);

export default Providers;