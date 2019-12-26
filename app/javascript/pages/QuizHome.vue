<template>
  <div class="container">
    <h1 class="#f3e5f5 purple lighten-5 center">[Rails+Vue.js]~三択クイズ~</h1>
    <div class="row #e3f2fd blue lighten-5">
      <div class="col s4 m6" v-for="quiz in quizs" :key="quiz.id">
        <div class="card btn">
          <span class="card-title" v-on:click="setQuizInfo(quiz.id)">
            {{ quiz.question }}
          </span>
        </div>
      </div>
    </div>
    <div class="card" v-show="quizInfoBool">
      <div class="card-body" v-if="signedIn">
        <br>
          <h4 class="card-title">問題：{{ quizInfo.question }}</h4>
          <hr>
          <button
              type="button"
              class="btn btn-primary btn-lg btn-block text-left"
              @click="addAnswer(1)">１. {{ quizInfo.choice1 }}</button>
          <button
              type="button"
              class="btn btn-primary btn-lg btn-block text-left"
              @click="addAnswer(2)">２. {{ quizInfo.choice2 }}</button>
          <button
              type="button"
              class="btn btn-primary btn-lg btn-block text-left"
              @click="addAnswer(3)">３. {{ quizInfo.choice3 }}</button>
              <div class="col-md-4">
          <br>
        <router-link :to="{ path: `/edit/${quizInfo.id}` }" class="btn btn-info waves-effect waves-light">この問題を編集</router-link>
        <button class="btn btn-info waves-effect waves-light" v-on:click="deleteQuiz(quizInfo.id)">この問題の削除</button>
        </div>
      </div>
      <div v-if="!signedIn">
        <a>サインインしてください</a>
      </div>
      <span v-if="0 == choice"></span>
      <span v-else-if="quizInfo.answer == choice">正解 &#x1F44D;</span>
      <span v-else>不正解 &#x1F622;</span>
        
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'

  export default {
    name: 'QuizHome',
    computed: {
      quizs() {
        return this.$store.state.quizs
      },
      quizInfo() {
        return this.$store.state.quizInfo
      },
      quizInfoBool() {
        return this.$store.state.quizInfoBool
      },
      signedIn() {
        return this.$store.state.signedIn
      },
      choice() {
        return this.$store.state.choice
      }
    },
    
    mounted: function() {
      this.$store.commit('fetchQuizs')
      this.$store.dispatch('doFetchSignedIn')
      this.$store.commit('resetQuizInfo')
    },
    methods: {
      deleteQuiz(id) {
        this.$store.commit('deleteQuiz', { id })
        this.$store.commit('resetQuizInfo')
        this.$store.commit('fetchQuizs')
        
      },
      setQuizInfo(id) {
        this.$store.commit('setQuizInfo', { id })
      },
      addAnswer(num) {
          this.$store.commit('addAnswer', { num })
        },
    }
  }
</script>

<style scoped></style>