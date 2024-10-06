export enum ClientEvents {
    INIT = 'init',
    ECHO = 'echo',
}

export enum ServerEvents {
    REVERB = 'reverb',
    JOINED = 'joined',
}

export interface ClientToServerEvents {
    [ClientEvents.INIT]: (data: { name: string, roomId: string }) => void;
    [ClientEvents.ECHO]: (data: { text: string }) => void;
}

export interface ServerToClientEvents {
    [ServerEvents.REVERB]: (data: { text: string }) => void;
    [ServerEvents.JOINED]: (data: { name: string }) => void;
}

export type Events = ClientToServerEvents & ServerToClientEvents
