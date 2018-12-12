import { createReducerStore } from 'fluxible-reducer-store';

export default createReducerStore({
  storeName: 'UsernameStore',
  reducers: {
    USERNAME: (state, username) => username
  },
  getters: {
    getUsername: username => username
  }
});
