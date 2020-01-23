const axios = require('axios');

const SET_GAME_LIST_TO_STORE = 'SET_GAME_LIST_TO_STORE';

export const getGamesList = () => {
    return dispatch => {
        axios.get('../api/games.json')
        .then ((res) => dispatch(setGamesListToStore(res.data.games)))
        .catch((e) => console.error(e));
    }
}; 

export const setGamesListToStore = (gameList) => {
    return {
        type: SET_GAME_LIST_TO_STORE,
        payload: gameList
    }
};

const gamesListReducer = (state = [], action) => {
    switch(action.type) {
        case SET_GAME_LIST_TO_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;   
    }
};

export default gamesListReducer;