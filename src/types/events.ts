export enum ClientEvents {
    INIT = 'init',
    ECHO = 'echo',
    LEAVE = 'leave',
}

export enum ServerEvents {
    REVERB = 'reverb',
    JOINED = 'joined',
    LEFT = 'left',
}

export interface ClientToServerEvents {
    [ClientEvents.INIT]: (data: { name: string, roomId: string }) => void;
    [ClientEvents.ECHO]: (data: { text: string }) => void;
    [ClientEvents.LEAVE]: (data: { name: string, roomId: string }) => void;
}

export interface ServerToClientEvents {
    [ServerEvents.REVERB]: (data: { text: string }) => void;
    [ServerEvents.JOINED]: (data: { name: string, members: string[] }) => void;
    [ServerEvents.LEFT]: (data: { name: string, members: string[] }) => void;
}
