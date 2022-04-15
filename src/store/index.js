import _ from 'lodash'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store({
  state: {
    clipboardList: []
  },
  getters: {
    clipboardTextList: state => {
      return _.filter(state.clipboardList, {type: 'text'})
    }
  },
  mutations: {
    addClipboardList(state, clipboard) {
      state.clipboardList.unshift(clipboard)
    }
  }
})
