import { io } from "socket.io-client"
import type { Socket } from "socket.io-client"

const socket: Socket = io('http://localhost:5000')

export default socket
