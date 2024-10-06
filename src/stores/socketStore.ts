import { defineStore } from "pinia";

interface State {
  name: string | null,
  id: string | null | undefined,
  roomId: string | null,
  members: { name: string }[]
}

export const useSocketStore = defineStore('socketStore', {
  state: (): State => ({
    name: null,
    id: null,
    roomId: null,
    members: [],
  }),
  actions: {
    addMember(name: string): void {
      this.members.push({ name })
    },
    removeMember(name: string): void {
      this.members = this.members.filter(m => m.name != name)
    }
  }
})
