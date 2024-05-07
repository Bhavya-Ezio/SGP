let socket = io();

socket.on('connect', () => {
    console.log("connected");
});

socket.on("newMessageR",()=>{
    console.log("newMessageR in socket");
})

socket.on('disconnect', () => {
    console.log("disconnected");
});

export { socket };
