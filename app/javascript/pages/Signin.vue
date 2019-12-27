<template>
  <div class="container">
    <h1 class="#f3e5f5 purple lighten-5 center">サインイン</h1>
    <form class="col" @submit.prevent="signin">
      <div class="text-red" v-if="error">{{ error }}</div>

      <div class="row">
        <div class="input-field">
          <input placeholder="Email" type="text" class="validate" v-model="email" required="required">
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input placeholder="Password" type="text" class="validate" v-model="password" required="required">
        </div>
      </div>
      <button type="submit" class="btn btn-outline-secondary">サインイン</button>
      <br>
      <div><router-link to="/signup" class="btn btn-outline-secondary">サインアップに移動</router-link></div>
    </form>
  </div>
</template>

<script>
  //動作は，Signupコンポーネントと同じ。
  export default {
    name: 'Signin',
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    created() {
      this.checkSignedIn()
    },
    updated() {
      this.checkSignedIn()
    },
    methods: {
      signin() {
        this.$http.plain.post('/api/signin', { email: this.email, password: this.password })
          .then(response => this.signinSuccessful(response))
          .catch(error => this.signinFailed(error))
      },
      signinSuccessful(response) {
        if (!response.data.csrf) {
          this.signinFailed(response)
          return
        }
        localStorage.csrf = response.data.csrf
        localStorage.signedIn = true
        this.$store.dispatch('doFetchSignedIn')
        this.error = ''
        this.$router.replace('/')
      },
      signinFailed(error) {
        this.error = (error.response && error.response.data && error.response.data.error) || ''
        delete localStorage.csrf
        delete localStorage.signedIn
      },
      checkSignedIn() {
        if (localStorage.signedIn) {
          this.$router.replace('/')
        }
      }
    }
  }
</script>