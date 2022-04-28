import React, {useEffect} from "react";
import './MusicDetail.css';
import {Badge, Col, Container, Image, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {loadMusicDetail} from "./redux/actions";
import {useLocation, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

function MusicDetail() {
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    let comments = [];

    useEffect(()=> {
        let num = window.location.pathname.split('/').pop();
        dispatch(loadMusicDetail(num));
    }, [])

    console.log(state.musicDetailData);
    return (
        <div className="MusicDetail">
            <Container>
                <Row>
                    <div id="music-title">
                        <span id="main-title">{state.musicDetailData.title}</span>
                        {
                            state.musicDetailData.state == '상승'
                                ? <FontAwesomeIcon icon={faCaretUp} className="status-up"/>
                                : (state.musicDetailData.state == '하강'
                                    ? <FontAwesomeIcon icon={faCaretDown} className="status-down"/>
                                    : (state.musicDetailData.state == '유지'
                                        ? <span className="status">(-)</span>
                                        : <Badge bg="secondary">New</Badge>))

                        }
                        <span id="indcrement"> {state.musicDetailData.idcrement !== 0 ? state.musicDetailData.idcrement : null}</span>
                    </div>
                </Row>
                <Row>
                    <Col xs={12} id='music-detail-area'>
                            {
                                state.musicDetailData !== undefined
                                    ? <Row>
                                            <Col xs={5} id='youtube-area'>
                                                <iframe width="100%" height="56.25%"
                                                        src={'https://www.youtube.com/embed/' + state.musicDetailData.mkey}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen>
                                                </iframe>
                                                <p>관련 키워드 (Melon 댓글 형태소 분석)</p>
                                                {
                                                    state.musicDetailData.comments != null
                                                    ? state.musicDetailData.comments.map((c) =>
                                                        <div className="music-keyword">
                                                            {c.keyword}<Badge pill bg="primary">{c.frequency}</Badge>
                                                        </div>
                                                    )
                                                    : null
                                                }
                                            </Col>
                                            <Col xs={7} id='music-info-area'>
                                                <Row>
                                                    <Col xs={4}>
                                                        <Image src={'http:' + state.musicDetailData.poster}
                                                               style={{width:'100%'}} id='album-cover'>
                                                        </Image>
                                                    </Col>
                                                    <Col xs={8} id='description'>
                                                        <p>{'곡 제목 | ' + state.musicDetailData.title}</p>
                                                        <p>{'아티스트 | ' + state.musicDetailData.singer}</p>
                                                        <p>{'앨범명 | ' + state.musicDetailData.album}</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                : null
                            }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MusicDetail;