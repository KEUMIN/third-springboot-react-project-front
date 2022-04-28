import * as types from './actionType';
import axios from "axios";

const getMovies = (movieData) => ({
    type : types.GET_MOVIES,
    payload : movieData
});

const getMusics = (musicData) => ({
    type : types.GET_MUSICS,
    payload : musicData
});

const getMusicsByKeyword = (musicData) => ({
    type : types.GET_MUSICS_BY_KEYWORD,
    payload : musicData
});

const getMusicDetail = (musicDetailData) => ({
    type : types.GET_MUSIC_DETAIL,
    payload : musicDetailData
});

export const loadMovies = (data) => {
    return function (dispatch) {
        axios.get('http://localhost:8080/movie?curPage=' + data)
            .then(function (response) {
                dispatch(getMovies(response.data));
            }).catch(function () {
            console.log("Cannot Get Movie...")
        });
    }
}

export const loadMusics = (data) => {
    return function (dispatch) {
        axios.get('http://localhost:8080/music?curPage=' + data)
            .then(function (response) {
                dispatch(getMusics(response.data));
            }).catch(function () {
            console.log("Cannot Get Musics...")
        });
    }
}
export const loadMusicsByKeyword = (keyword) => {
    return function (dispatch) {
        axios.get('http://localhost:8080/main?keyword=' + keyword)
            .then(function (response) {
                dispatch(getMusicsByKeyword(response.data));
            }).catch(function () {
            console.log("Cannot Get Musics...")
        });
    }
}
export const loadMusicDetail = (data) => {
    return function (dispatch) {
        axios.get('http://localhost:8080/music/' + data)
            .then(function (response) {
                dispatch(getMusicDetail(response.data));
            }).catch(function () {
            console.log("Cannot Get MusicDetail...")
        });
    }
}