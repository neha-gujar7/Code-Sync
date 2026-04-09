import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    // Temporarily hardcode the URL to force the connection
    return io('http://localhost:5000', options); 
};