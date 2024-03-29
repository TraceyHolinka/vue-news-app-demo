
import Vue from 'vue'

const state = Vue.observable({
  toggled: true
})

export const getters =  {
  toggled: () => state.toggled
}

export const mutations = {
  setToggled: (val) => state.toggled = val
}
