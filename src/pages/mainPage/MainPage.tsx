import React, {useEffect} from 'react';
import style from './mainPage.module.css'
import {getLoginFromStorage} from "../../shared/utils/loginForLocalStorage";
import {Navigate} from "react-router-dom";
import {PATH} from "../../shared/constants/path";
import {UsersList} from "./usersList/UsersList";
import {EventList} from "./eventList/EventList";
import {useWebSocket} from "../../components/webSocket/WebSocketProvider";


export const MainPage = () => {
    const login = getLoginFromStorage();
    const webSocketContext = useWebSocket();

    useEffect(() => {
        if (webSocketContext && !webSocketContext.socket) {
            webSocketContext.socketOn();
        }
    }, [webSocketContext]);


    if (!login) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <section>
            <div className={style.main}>
                <div>
                    <UsersList/>
                </div>
                <div>
                    <EventList/>
                </div>
            </div>
        </section>
    );
};

