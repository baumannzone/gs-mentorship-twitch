import { createStore } from "vuex";

export default createStore({
  state: { twitchToken: null },
  mutations: {
    SET_TWITCH_TOKEN: (state, payload) => {
      if (payload) {
        state.twitchToken = payload;
      }
    },
  },
  actions: {},
  modules: {},
  getters: {
    getTwitchToken: (state) => state.twitchToken,
  },
});
