import React from 'react';
import './App.css';
import {Authorization} from "./pages/authorization/Authorization";
import {MainPage} from "./pages/mainPage/MainPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "./utils/path";
import {PageNotFound} from "./pages/404/PageNotFound";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={PATH.MAIN_PAGE} element={<MainPage/>}/>
                <Route path={PATH.LOGIN} element={<Authorization/>}/>
                <Route path={PATH.ERROR_PAGE} element={<PageNotFound/>}/>
                <Route path='*' element={<Navigate to={"404"}/>}/>


            </Routes>

        </div>
    );
}

export default App;
