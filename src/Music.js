import React, {useEffect, useState} from "react";
import {Button, Col, Container, Image, PageItem, Pagination, Row, Table} from "react-bootstrap";
import './Music.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic, faRecordVinyl, faUser} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {loadMusics} from "./redux/actions";

function Music() {
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    let [musicCurPg, setMusicCurPg] = useState(1);

    useEffect(() => {
        dispatch(loadMusics(1));
    }, [])

    return (
        <div className="Music">
            <Container>
                <Row>
                    <Col xs={12} id="music-area">
                        <h1 id="page-title">음악</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Table striped bordered hover variant="dark" id="music-chart">
                            <thead>
                            <tr>
                                <th className="rank-col">Rank</th>
                                <th className="album-cover-col">Cover</th>
                                <th className="music-title-col">
                                    <FontAwesomeIcon icon={faMusic}/> Title
                                </th>
                                <th><FontAwesomeIcon icon={faUser}/> Artist</th>
                                <th><FontAwesomeIcon icon={faRecordVinyl}/> Album</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                state.musicData.musics !== undefined
                                ? state.musicData.musics.map((m) =>
                                        <tr>
                                            <td className="rank-col">{m.no}</td>
                                            <td className="album-cover-col">
                                                <Image src={'http:' + m.poster} style={{width:'80px'}} />
                                            </td>
                                            <td className="music-title-col">
                                                <a href={'/music/' + m.no}>{m.title}</a>
                                            </td>
                                            <td>{m.singer}</td>
                                            <td>{m.album}</td>
                                        </tr>)
                                    : null
                            }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{offset:4}}>
                        <div id='pagination-form'>
                            {
                                state.musicData.musics !== undefined
                                    ? state.musicData.pages[0] !== 1
                                        ? <Button className='pagination'
                                                  onClick={() => {dispatch(loadMusics(state.musicData.pages[0]-5));
                                                                  setMusicCurPg(state.musicData.pages[0]-5)}}>
                                            {'<'}
                                          </Button>
                                        : null
                                    : null
                            }
                            {
                                state.musicData.musics !== undefined
                                    ? state.musicData.pages.map((num) =>
                                        <Button active={ musicCurPg === num ? true : false }
                                                className='pagination text-center'
                                                onClick={() => {dispatch(loadMusics(num));
                                                                setMusicCurPg(num)}}>{num}</Button>)
                                    : null
                            }
                            {
                                state.musicData.musics !== undefined
                                    ? state.musicData.totalPages > (state.musicData.pages[0] + 4)
                                        ? <Button className='pagination'
                                                  onClick={()=>{dispatch(loadMusics(state.musicData.pages[0]+5));
                                                                setMusicCurPg(state.musicData.pages[0]+5)}}>
                                            {'>'}
                                          </Button>
                                        : null
                                    : null
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Music;