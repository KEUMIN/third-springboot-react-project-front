import * as types from './actionType';

const initialState = {

}

const musicReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_MUSICS:
            return action.payload;
        case types.GET_MUSICS_BY_KEYWORD:
            return action.payload;
        default:
            return state;
    }
}

export default musicReducers;