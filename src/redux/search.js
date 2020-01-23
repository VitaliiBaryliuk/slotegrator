const SET_SEARCH_VALUE_STATUS = 'SET_SEARCH_VALUE_STATUS';

export const setSearchActiveStatus = () => {
    return {
        type: SET_SEARCH_VALUE_STATUS,
        payload: null
    }
}; 

const searchReducer = (state = { searchActiveStatus: false }, action) => {
    switch(action.type) {
        case SET_SEARCH_VALUE_STATUS:
            return {
                ...state,
                searchActiveStatus: !state.searchActiveStatus,
            }
        default: 
            return state;   
    }
};

export default searchReducer;