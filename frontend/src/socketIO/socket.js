let socket = io();

socket.on('connect', () => {
    console.log("connected");
});

socket.on('disconnect', () => {
    console.log("disconnected");
});

export { socket };
