<template>
<div>
        <nav class="navbar-light" style="background-color: #e3f2fd;">
            <a class="navbar-brand" href="#">三択クイズ</a>
            <router-link to="/create" v-if="signedIn" class="btn btn-outline-success" type="button">問題の登録</router-link>
            <!-- <router-link to="/signup" class="btn btn-sm btn-outline-secondary" type="button" v-if="!signedIn">ユーザー登録</router-link> -->
            <router-link to="/signin" v-if="!signedIn" class="btn btn-sm btn-outline-secondary" type="button">  サインイン</router-link>
            <a href="/" v-if="signedIn" @click="signOut" class="btn btn-sm btn-outline-secondary" type="button">サインアウト</a>
        </nav>
    </div>   

</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Header',
    computed: mapState([
      'signedIn'
    ]),
    mounted: function() {
      this.$store.dispatch('doFetchSignedIn')
    },
    methods: {
      setError(error, text) {
        this.error = (error.response && error.response.data && error.response.data.error) || text
      },
      signOut() {
        this.$http.secured.delete(`/api/signin`)
          .then(response => {
            delete localStorage.csrf
            delete localStorage.signedIn
          })
          .catch(error => this.setError(error, 'Cannot sign out'))
      }
    }
  }
</script>