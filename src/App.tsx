import React from 'react';
import './App.css';
import {Authorization} from "./pages/authorization/Authorization";
import {MainPage} from "./pages/mainPage/MainPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "./shared/constants/path";
import {PageNotFound} from "./pages/404/PageNotFound";
import {Shop} from "./pages/shop/Shop";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={PATH.MAIN_PAGE} element={<MainPage/>}/>
                <Route path={PATH.LOGIN} element={<Authorization/>}/>
                <Route path={PATH.SHOP} element={<Shop/>}/>
                {/*<Route path={PATH.ERROR_PAGE} element={<PageNotFound/>}/>*/}
                {/*<Route path='*' element={<Navigate to={"404"}/>}/>*/}


            </Routes>

        </div>
    );
}

export default App;
