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
  getters: {
    memebersButMe(): { name: string }[] {
      return this.members.filter(m => m.name != this.name)
    }
  },
  actions: {
    addMember(name: string): void {
      this.members.push({ name })
    },
    setMembers(names: string[]) {
      names.forEach(name => {
        if (!this.hasMember(name)) {
          this.addMember(name)
        }
      })

      console.log("Setted", names)
    },
    hasMember(name: string): boolean {
      return this.members.filter(m => m.name === name).length != 0
    },
    removeMember(name: string): void {
      this.members = this.members.filter(m => m.name != name)
    }
  }
})
