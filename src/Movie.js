import './Movie.css';

import {useEffect, useState} from "react";
import {Button, Card, Col, Container, PageItem, Pagination, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {loadMovies} from "./redux/actions";
import { Link, Route, Switch } from "react-router-dom"

function Movie() {
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    let [index, setIndex] = useState(0);
    let [curPage, setCurPage] = useState(1);

    useEffect(() => {
        dispatch(loadMovies(1));
    }, [])

    let getMovieDetail = function (i){
        setIndex(i);
    }
    return (
        <div className="Movie">
            <Container id="main-content">
                <Row>
                    <Col xs={6} id="movie-list-area">
                        <Row>
                            {
                                state.movieData.movies !== undefined
                                    ? state.movieData.movies.map((m, i) =>
                                        <Card id="movie-card" style={{width: '200px'}}>
                                            <Card.Img variant="top" src={m.poster} style={{height: '250px'}}/>
                                            <Card.Body>
                                                <div className='movie-title'>{m.title}</div>
                                                <Card.Text>
                                                    평점:⭐{m.reserve}<br/>
                                                    {m.regdate}
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => getMovieDetail(i)}>
                                                    자세히 보기
                                                </Button>
                                            </Card.Body>
                                        </Card>)
                                    : null
                            }
                        </Row>
                        <Row>
                            <Col xs={{offset: 2}}>
                                <div id='pagination-form'>
                                    {
                                        state.movieData.movies !== undefined
                                            ? state.movieData.pages[0] !== 1
                                                ? <Button className='pagination'
                                                          onClick={() => {dispatch(loadMovies(state.movieData.pages[0]-5));
                                                                          setIndex(0);
                                                                          setCurPage(state.movieData.pages[0]-5)}}>
                                                    {'<'}
                                                  </Button>
                                                : null
                                            : null
                                    }
                                    {
                                        state.movieData.movies !== undefined
                                            ? state.movieData.pages.map((num) =>
                                                <Button active={curPage === num ? true : false}
                                                        className='pagination'
                                                        onClick={() => {dispatch(loadMovies(num));
                                                                        setIndex(0);
                                                                        setCurPage(num)}}>{num}</Button>)
                                            : null
                                    }
                                    {
                                        state.movieData.movies !== undefined
                                            ? state.movieData.totalPages > (state.movieData.pages[0] + 4)
                                                ? <Button className='pagination'
                                                          onClick={()=>{dispatch(loadMovies(state.movieData.pages[0]+5));
                                                                        setIndex(0);
                                                                        setCurPage(state.movieData.pages[0]+5)}}>
                                                    {'>'}
                                                  </Button>
                                                : null
                                            : null
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6}>
                        {
                            state.movieData.movies !== undefined
                                ? <div id="movie-detail-area">
                                    <iframe width="100%" height="56.25%"
                                            src={'https://www.youtube.com/embed/' + state.movieData.movies[index].mkey}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                    <Container>
                                        <Row>
                                            <Col xs={4}>
                                                <img src={state.movieData.movies[index].poster}
                                                     alt="poster" style={{width: '200px'}}/>

                                            </Col>
                                            <Col xs={8}>
                                                <h4 className='movie-title-sm'>{state.movieData.movies[index].title}</h4>
                                                <h5>평점: ⭐{state.movieData.movies[index].reserve}</h5>
                                                <div className='movie-info'>
                                                    감독 : {state.movieData.movies[index].director} /
                                                    배우 : {state.movieData.movies[index].actor}<br/>
                                                    장르 : {state.movieData.movies[index].genre} /
                                                    기본 : {state.movieData.movies[index].grade}, {state.movieData.movies[index].time}<br/>
                                                    개봉 : {state.movieData.movies[index].regdate}
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                : null
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Movie;
