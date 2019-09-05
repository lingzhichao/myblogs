//引入vue和Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import * as getters from './getters'
import * as actions  from './actions'
import * as mutations from './mutations'

//引入之后，对vuex进行引用
Vue.use(Vuex);

let stores = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default stores