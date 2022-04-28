import './App.css';

import Header from "./Header";
import Movie from "./Movie";
import { Route } from "react-router-dom"
import Music from "./Music";
import MusicDetail from "./MusicDetail";
import Main from "./Main";

function App() {
    return (
        <div className="App">
            <Header/>
            <Route component={Main} exact path="/" />
            <Route component={Movie} exact path="/movie" />
            <Route component={Music} exact path="/music" />
            <Route component={MusicDetail} path="/music/:id"/>
        </div>
    );
}

export default App;
