import { createStore } from 'vuex';
import { UserModule } from './User';

export default createStore({
  //this is the setup before inserting a module in :: module contains all of it inside
  // //this is what is called from application to show
  // state: {
  //   user: null
  // },

  // //mutations are functions that effect the STATE
  // mutations: {
  //   SET_USER(state, user) {
  //     state.user = user;
  //   }
  // },

  // //Actions are functions that you call throughout your application that call mutations
  // actions: {
  //   setUser({ commit }, user) {
  //     commit('SET_USER', user);
  //   }
  // },

  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: UserModule
  }
})
