import { io } from 'socket.io-client'
import { Socket } from 'socket.io-client'
import {
  ClientEvents,
  ServerEvents,
  type ClientToServerEvents,
  type ServerToClientEvents
} from '@/types/events'

import { useSocketStore } from '@/stores/socketStore'

import { showToast } from '@/utils/index'

const useSocket = () => {
  const SOCKET_SERVER_URL: string = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000'

  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(SOCKET_SERVER_URL, {
    transports: ['websocket']
  })

  socket.on('connect', () => {
    console.log('Connected to server', socket.id)
    const store = useSocketStore()
    store.id = socket.id
  })

  socket.on('connect_error', (err) => {
    console.log(err)
  })

  socket.on(ServerEvents.JOINED, ({ name, members }) => {
    const store = useSocketStore()

    store.setMembers(members)

    if (store.note) {
      socket.emit(ClientEvents.ECHO, { text: store.note })
    }

    if (store.name === name) {
      return
    }

    console.log('New Echoer', name, 'joined!')

    if (store.toastContainer) {
      showToast(`${name} joined!`, store.toastContainer)
    }
  })

  socket.on(ServerEvents.LEFT, ({ name, members }) => {
    const store = useSocketStore()

    store.setMembers(members)

    if (store.name === name) {
      return
    }

    console.log('Bye Echoer!', name, 'left.')

    if (store.toastContainer) {
      showToast(`${name} left!`, store.toastContainer)
    }
  })

  socket.on(ServerEvents.REVERB, ({ text }) => {
    const store = useSocketStore()
    store.note = text
  })

  const initEchoer = () => {
    const store = useSocketStore()
    if (!store.name || !store.roomId) {
      return
    }

    socket.emit(ClientEvents.INIT, { name: store.name!, roomId: store.roomId! })
  }

  const echoNote = () => {
    const store = useSocketStore()
    socket.emit(ClientEvents.ECHO, { text: store.note })
  }

  const leaveRoom = () => {
    const store = useSocketStore()
    if (!store.name || !store.roomId) {
      return
    }

    socket.emit(ClientEvents.LEAVE, { name: store.name, roomId: store.roomId })
    store.name = null
    store.members = []
    store.roomId = null
  }

  return {
    socket,
    initEchoer,
    echoNote,
    leaveRoom
  }
}

export const { socket, initEchoer, echoNote, leaveRoom } = useSocket()
