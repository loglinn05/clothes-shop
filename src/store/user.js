import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      data: {},
      token: 'T0K3N',
      subscribed: false
    }
  }),
  actions: {},
  getters: {
    userData() {
      return this.user.data;
    },
    loggedIn() {
      return !!this.user.token;
    }
  },
  persist: true
})