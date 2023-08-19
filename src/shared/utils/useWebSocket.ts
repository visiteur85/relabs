import {useEffect, useState} from 'react';
import {WEBSOCKET_URL} from "../constants/socketUrl";
import {EventType} from "../../types/eventType";

export const useStartWebSocket = () => {
    const [events, setEvents] = useState<EventType[]>([]);
    const [errorMessage, serErrorMessage] = useState('');

    useEffect(() => {
        const socket = new WebSocket(WEBSOCKET_URL);

        socket.onmessage = event => {
            const data = JSON.parse(event.data);
            setEvents(prevState => [data, ...prevState]);
        };

        socket.onerror = () => {
            serErrorMessage('WebSocket Error !');
        };

        return () => socket.close();
    }, []);

    return {events, errorMessage};
};