<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{ user.name }}
      </h1>
      <div class="links">
        <n-link class="button--grey" to="/">home</n-link>
        <n-link class="button--grey" to="/api/users">new</n-link>
        <button class="button--grey" @click="getUser()">get users</button>
        <button class="button--grey" @click="$fetch">fetch</button>

        <div class="tb">
          <table class="table">
            <thead></thead>
            <tbody>
              <tr v-for="(age, index) in ages" :key="index">
                <td><input v-model="age.name" /></td>
              </tr>
            </tbody>
          </table>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr v-for="(age, index) in age2s" :key="index">
                <td><input v-model="age.name" />2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.tb {
  display: flex;
  width: 100%;
  min-width: 100%;
  flex-direction: row;
  .table {
    max-width: 50%;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
// import { Dictionary } from 'vue-router/types/router'
export default Vue.extend({
  async fetch() {
    console.log('fetching')
    this.ages = await fetch('http://localhost:50184/api/users').then((res) =>
      res.json()
    )
    console.log(this.ages)
  },
  async asyncData({ $axios }) {
    console.log('asyncData')
    const { data } = await $axios.get(`/api/users`)
    console.log(data)
    return { age2s: data }
  },
  data() {
    return {
      user: {
        name: 'vien',
        age: 30,
      },
      ages: {},
      age2s: {},
    }
  },
  methods: {
    getUser() {
      this.user.name = 'clicked'
      // console.log(process.env)
      // console.log(process.env.NODE_ENV)
      // console.log(process.env.URL)
      // console.log(process.env.baseUrl)
      // console.log(`base url now context : `)
      // console.log([])
      const variavle = this.$axios.get('/api/users', {})
      // const variavle = this.$axios.get('/api/users', {
      //   baseURL: process.env.baseUrl,
      // })
      variavle.then((res) => {
        this.ages = res.data
      })
    },
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
