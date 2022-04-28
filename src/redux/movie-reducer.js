import * as types from './actionType';

const initialState = {

}

const moviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_MOVIES:
            return action.payload
        default:
            return state;
    }
}

export default moviesReducers;