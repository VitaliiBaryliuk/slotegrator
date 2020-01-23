import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as gamesListActions from '../redux/gamesList';

import Search from './Search';
import NavSlider from './NavSlider';
import MainSlider from './MainSlider';
import SearchList from './SearchList';

class Games extends Component {
  state = {
    searchValue: '',
    currentGameNum: 0,
  }

  searchHandle = (event) => {
    let value = event.target.value;

    this.setState({
      searchValue: value
    }); 
  }

  setInputFieldFocus = (searchInput) => {
    if (!searchInput) {
      return;
    }

    searchInput.focus();
  }

  handleChangeGame = (isNext) => {
    isNext = isNext === 'next';
    let gamesList = this.props.gamesList;
    let newGameNum = null;

    this.setState((prevState) => {
      if (isNext) {
        newGameNum = gamesList[prevState.currentGameNum + 1] 
          ? prevState.currentGameNum + 1 
          : prevState.currentGameNum;
      } else {
        newGameNum = gamesList[prevState.currentGameNum - 1] 
          ? prevState.currentGameNum - 1 
          : prevState.currentGameNum;
      }
      
      return {
        currentGameNum: newGameNum
      }
    })
  };

  componentDidMount = () => {
    this.props.getGamesList();
  }

  filtredListBySearchQuery = (gamesList, searchValue) => {
    let regExp = new RegExp(`^${searchValue.toUpperCase()}`);
    let filtredArray = Object.values(gamesList).filter(item => regExp.test(item.name.toUpperCase()));

    return filtredArray;
  }
  
  render() {
    const { searchValue, currentGameNum } = this.state;  
    let { searchActiveStatus, gamesList } = this.props;
    const currentGameData = gamesList ? gamesList[currentGameNum] : null;
    const filtredGamesArray = searchValue 
      ? this.filtredListBySearchQuery(gamesList, searchValue)
      : Object.values(gamesList);

    return (
      <>
      { currentGameData ?
        <div className="games__layout">
        <div className="games__layout__top">
          <Search 
            searchHandle={this.searchHandle}
            value={searchValue}
            searchActiveStatus={searchActiveStatus} 
            setInputFieldFocus={this.setInputFieldFocus}
          />
          { searchActiveStatus ? <SearchList gamesList={filtredGamesArray} /> : ''}
          <NavSlider 
            gameData={currentGameData} 
            handleChangeGame={this.handleChangeGame}
            searchActiveStatus={searchActiveStatus} 
          />
        </div>
        
        <div className="header--mobile">
          <a href="#" className="icon--toggle" data-expand></a>
          <div data-logo-holder></div>
          <div data-search-icon-holder></div>
        </div>
        <MainSlider 
          gameData={currentGameData}
        />
      </div>
      : '' }
      </>
    );
  }
};

const mapStateToProps = state => {
  let searchReducer = state.searchReducer;
  let gamesList = state.gamesList;

  return {
    gamesList: gamesList,
    searchActiveStatus: searchReducer.searchActiveStatus,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGamesList: () => dispatch(gamesListActions.getGamesList())
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Games);
