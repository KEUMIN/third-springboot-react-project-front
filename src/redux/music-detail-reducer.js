import * as types from './actionType';

const initialState = {

}

const musicDetailReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_MUSIC_DETAIL:
            return action.payload
        default:
            return state;
    }
}

export default musicDetailReducers;