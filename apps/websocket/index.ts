import { createClient } from "redis";


const redisClient = createClient({
    url: process.env.REDIS_URL
})

redisClient.on("error", (err) => {
    console.error("REDIS ERROR: " + err);
})

redisClient.on("connected", () => {
    console.log("REDIS CONNECTED");
});

redisClient.on("ready", () => {
    console.log("REDIS READY");
});

await redisClient.connect();


var times = Number.parseInt(await redisClient.get("savings") || "0");
console.log("Initial savings: " + times);
const server = Bun.serve({
    port:3001,
    fetch(req, server) {
        // upgrade the request to a WebSocket
        if (server.upgrade(req)) {
            return; // do not return a Response
        }
        return new Response("Upgrade failed", { status: 500 });
    },
    websocket: {
        message(ws, event) {
            return;
        },
        open(ws) {
            ws.subscribe("savings")
            ws.send(times.toString());
        },
        close(ws) {
            console.log("WebSocket closed" + ws.remoteAddress);
        },
        drain(ws) {
            console.log("WebSocket backpressure");
        }
    }, // handlers
});

console.log("Server started on port: " + server.port);
(() => {
    setInterval(async () => {
        server.publish("savings", times.toString());
        const randomnr = Math.floor(Math.random() * 10000);
        times += randomnr;
        await redisClient.set("savings", times.toString());
    }, 5e3)
})();