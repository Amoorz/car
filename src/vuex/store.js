import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    drop: false, 
  },
  mutations: {
    ONDROP (state, value) {
      state.drop = value.drop
    }
  },
  action: {

  },
  getter: {

  }
})

export default store