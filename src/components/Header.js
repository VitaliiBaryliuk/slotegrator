import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as searchActions from '../redux/search';

const Header = () => {
    const dispatch = useDispatch();
    const searchReducer = useSelector( state => state.searchReducer );

    let searchIconClass = searchReducer && searchReducer.searchActiveStatus ? 'icon--search pressed' : 'icon--search'
    return (
        <>
            <div className="menu--mobile" data-menu-mobile>
                <a href="#" className="icon--close" data-expand></a>
                <div className="menu__wrapper">
                    <div data-sound-holder></div>
                    <div data-full-holder></div>
                    <div>
                        <a href="/login/login.html" className="icon icon--logout">
                            <span className="icon__text">Log Out</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="header__layout">
                        <div data-logo>
                            <div className="header--left"><a href="/">Logo</a> </div>
                        </div>
                        <div className="prov-name" data-topnav></div>
                        <div className="header--right">
                            <div data-search-icon><a href="#" className={searchIconClass} onClick={() => { dispatch(searchActions.setSearchActiveStatus()) }} data-search-open></a></div>
                            <div data-sound><a href="#" className="icon icon--sound sound-on"><span className="icon__text">Sound
                        on</span><span className="icon__text icon__text--off">Sound off</span></a></div>
                            <div data-full><a href="#" className="icon icon--fullscreen" data-fullscreen><span
                                className="icon__text">Expand</span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;
  