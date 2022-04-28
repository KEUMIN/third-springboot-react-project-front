import React, {useEffect, useState} from "react";
import './Main.css';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {loadMusicsByKeyword} from "./redux/actions";
import {faMusic, faRecordVinyl, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Main() {
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    let [musicKeyword, setMusicKeyword] = useState('🌸봄');

    useEffect(() => {
        dispatch(loadMusicsByKeyword(''));
    }, []);

    console.log(state.musicData.musics);
    return(
        <div className='Main'>
            <Container>
                <Row>
                    <h2 id='music-recommend-title'>
                        <span id='momu'><strong>MoMu</strong> = Movie + Music</span><br/>
                        {'오늘, ' + musicKeyword + ' 음악 어때요?'}
                    </h2>
                </Row>
                <Row>
                    <Col xs={12} id='keyword-list'>
                        <Button onClick={() => {dispatch(loadMusicsByKeyword('봄'));
                                                setMusicKeyword('🌸봄')}} className='keyword-btn'>🌸봄</Button>
                        <Button onClick={() => {dispatch(loadMusicsByKeyword('여름'));
                                                setMusicKeyword('🌞여름')}} className='keyword-btn'>🌞여름</Button>
                        <Button onClick={() => {dispatch(loadMusicsByKeyword('가을'));
                                                setMusicKeyword('🍂가을')}} className='keyword-btn'>🍂가을</Button>
                        <Button onClick={() => {dispatch(loadMusicsByKeyword('겨울'));
                                                setMusicKeyword('⛄겨울')}} className='keyword-btn'>⛄겨울</Button>
                        <Button onClick={() => {dispatch(loadMusicsByKeyword('사랑'));
                                                setMusicKeyword('💖사랑')}} className='keyword-btn'>💖사랑</Button>
                        <Button onClick={() => {dispatch(loadMusicsByKeyword('드라마'));
                                                setMusicKeyword('📺OST')}} className='keyword-btn'>📺OST</Button>
                        <Button onClick={() => {dispatch(loadMusicsByKeyword('목소리'));
                                                setMusicKeyword('🎤달달한 목소리')}} className='keyword-btn'>🎤달달한 목소리</Button>
                        <Button onClick={() => {dispatch(loadMusicsByKeyword('아이유'));
                                                setMusicKeyword('아이유')}} className='keyword-btn'>아이유</Button>
                        <Button onClick={() => {dispatch(loadMusicsByKeyword('에스파'));
                                                setMusicKeyword('에스파')}} className='keyword-btn'>에스파</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} id='reco-list'>
                        {
                            state.musicData.musics !== undefined
                            ? state.musicData.musics.map((m) =>
                                    <div onClick={() => { window.location.href='./music/' + m.no}}>
                                        <Container className='music-area'>
                                            <Row>
                                                <Col xs={3}>
                                                    <Image className='album-cover' src={'http:' + m.poster}/>
                                                </Col>
                                                <Col xs={9} className='music-info'>
                                                    <FontAwesomeIcon icon={faMusic}/>&nbsp;&nbsp;곡명 |&nbsp;&nbsp;<strong>{m.title}</strong><br/>
                                                    <FontAwesomeIcon icon={faUser}/>&nbsp;&nbsp;가수 |&nbsp;&nbsp;{m.singer}<br/>
                                                    <FontAwesomeIcon icon={faRecordVinyl}/>&nbsp;&nbsp;앨범 |&nbsp;&nbsp;{m.album}
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                )
                                : null
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main;
