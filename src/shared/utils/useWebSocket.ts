import {useEffect, useState} from 'react';
import {WEBSOCKET_URL} from "../constants/socketUrl";
import {EventType} from "../../types/eventType";
import {toast} from "react-toastify";

export const useStartWebSocket = () => {
    const [events, setEvents] = useState<EventType[]>([]);
    const [errorMessage, serErrorMessage] = useState('');

    useEffect(() => {

        setTimeout(() => {
            const socket = new WebSocket(WEBSOCKET_URL);

            socket.onmessage = event => {
                const data = JSON.parse(event.data);
                setEvents(prevState => [data, ...prevState]);
            };
            socket.onerror = () => {
                toast.error('Проблема с каналом связи')
                serErrorMessage('Ошбика')
            };

            return () => socket.close();
        },)


    }, []);

    return {events, errorMessage};
};