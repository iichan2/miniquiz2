<template>
  <div class="container">
    <div class="input-group">
            <div class="input-group-append">
                <span class="input-group-text">問題文</span>
            </div>
            <input v-model="quiz.question" class="form-control" placeholder="問題を入力してください!">
        </div>
        <div class="input-group">
            <div class="input-group-append">
                <span class="input-group-text">選択肢１</span>
            </div>
            <input v-model="quiz.choice1" class="form-control" placeholder="選択肢1を入力してください!">
        </div>
        <div class="input-group">
            <div class="input-group-append">
                <span class="input-group-text">選択肢２</span>
            </div>
            <input v-model="quiz.choice2" class="form-control" placeholder="選択肢2入力してください!">
        </div>
        <div class="input-group">
            <div class="input-group-append">
                <span class="input-group-text">選択肢３</span>
            </div>
            <input v-model="quiz.choice3" class="form-control" placeholder="選択肢3を力してください!">
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">正解の選択肢</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01" v-model="quiz.answer">
                <option selected>何番の選択肢が答えですか？</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
        <div class="btn btn-info waves-effect waves-light" v-on:click="createQuiz">問題を登録</div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data: function() {
      return {
        quiz: {
          question: '',
          choice1: '',
          choice2: '',
          choice3: '',
          answer: ''
        }
      }
    },
    methods: {
      createQuiz: function () {
        if (!this.quiz.question) return;
        axios.post('/api/quizs', { quiz: this.quiz }).then((res) => {
          this.$router.push({ path: '/' });
        }, (error) => {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped></style>