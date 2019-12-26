import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/router.js'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // [state]=[data]の働きと同様
  state: {
    quizs: [],
    quizInfo: {},
    quizInfoBool: false,
    choice: "0",
    signedIn: '',

  },
  // [mutations]=[methods]の働きと同様
  mutations: {
    fetchSignedIn(state) {
      // ログイン時，BooleanがlocalStorageに保存される。
      state.signedIn = !!localStorage.signedIn
    },
    fetchQuizs(state) {
      state.quizs = [];
      axios.get('/api/quizs').then((res) => {
        for(var i = 0; i < res.data.quizs.length; i++) {
          state.quizs.push(res.data.quizs[i]);
        }
      }, (error) => {
        console.log(error);
      });
    },
    setQuizInfo(state, { id } ) {
      axios.get(`api/quizs/${id}.json`).then(res => {
        state.quizInfo = res.data;
        state.quizInfoBool = true;
        state.choice = 0;
      });
    },
    deleteQuiz(state, { id } ) {
      axios.delete(`/api/quizs/${id}`).then(res => {
        state.quizInfo = '';
        state.quizInfoBool = false;
      });
    },
    addAnswer(state, { num } ) {
      state.choice = num;
    },
    resetQuizInfo(state) {
      axios.get('/api/quizs').then(res => {
        state.quizInfo = '';
        state.quizInfoBool = false;
      });
    },
  },
  actions: {
    // ログイン時等において，[$store.dispatch('doFetchSignedIn')]で次のメソッドを呼び出し，[signedIn]を更新する。
    doFetchSignedIn({ commit }) {
      commit('fetchSignedIn')
    }
  }
})