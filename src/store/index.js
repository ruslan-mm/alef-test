import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kids: localStorage.getItem('kids') ? JSON.parse(localStorage.getItem('kids')): [],
    owner: localStorage.getItem('owner') ? JSON.parse(localStorage.getItem('owner')): {},
    maxKidsCount: 5,
    id: 0,
  },
  getters: {
    allKids(state) {
      return state.kids
    },
    showOwner(state) {
      return state.owner
    },
  },
  mutations: {
    addKid(state, newKid) {
      if (state.kids.length >= state.maxKidsCount) return
      state.id++
      newKid.id = state.id
      state.kids.push(newKid)
    },
    setOwner(state, newOwner) {
      state.owner = newOwner
    },
    editKid(state, { index, data }) {
      state.kids[index] = data
    },
    deleteKid(state, index) {
      state.kids.splice(index, 1)
    }
  },
})
