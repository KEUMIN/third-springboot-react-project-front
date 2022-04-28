import {combineReducers} from "redux";
import moviesReducers from "./movie-reducer";
import musicReducers from "./music-reducer";
import musicDetailReducers from "./music-detail-reducer";

const rootReducer = combineReducers({
    movieData : moviesReducers,
    musicData : musicReducers,
    musicDetailData : musicDetailReducers
});

export default rootReducer;