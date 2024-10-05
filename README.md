# echo-client

Client repo for the Echo App. It displays the notepad sync between all echoers to make the Echo App echo!

## Client Events

- Emits
  1. init -> a connection, with name and roomId (from url, or randomly generated)
  2. \*echo -> sent whenever text is typed
  3. disconnect -> this client left, that's it
- Recieves
  1. \*reverb -> recieves data and updates the notepad
  2. joined -> new client joined the room

NOTE: \* marked events are the main heroes

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun build
```
