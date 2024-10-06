import { io } from "socket.io-client"
import { Socket } from "socket.io-client"
import type { ClientToServerEvents, ServerToClientEvents } from "@/types/events"

const SOCKET_SERVER_URL: string = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000'

const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
  io(SOCKET_SERVER_URL, {
   transports: ['websocket']
  })

socket.on("connect_error", (err) => {
  console.log(err);
});

export default socket
