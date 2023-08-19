import React from 'react';
import './App.css';
import {Authorization} from "./pages/authorization/Authorization";
import {MainPage} from "./pages/mainPage/MainPage";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "./shared/constants/path";
import {Shop} from "./pages/shop/Shop";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Routes>
                <Route path={PATH.MAIN_PAGE} element={<MainPage/>}/>
                <Route path={PATH.LOGIN} element={<Authorization/>}/>
                <Route path={PATH.SHOP} element={<Shop/>}/>
                <Route path='*' element={<Navigate to={'/'}/>}/>
            </Routes>
        </div>
    );
}

export default App;
