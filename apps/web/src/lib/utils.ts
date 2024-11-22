import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";



export const useMoneySaved = () => {
    const [state, dispatch] = useState(0)
    const {lastMessage } = useWebSocket("ws://localhost:3001")

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:3001");
        socket.onopen = () => {
            console.log("WebSocket connected");
        };

        socket.onmessage = (event) => {
            console.log("WebSocket message: " + event.data);
            dispatch(event.data);
        }

    }, [])
    return state;
}