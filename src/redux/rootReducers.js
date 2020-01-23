import { combineReducers } from 'redux';

import gamesListReducer from './gamesList';
import searchReducer from './search';

const rootReducers = combineReducers({
    gamesList: gamesListReducer,
    searchReducer,
});

export default rootReducers;