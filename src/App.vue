<template>
  <div id="app">
    <div class="container">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<Home msg="Welcome to Your Vue.js App - test task for Uppdivision"/>-->

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <router-link tag="li" class="nav-item" to="/" exact active-class="active">
              <a class="nav-link">Home</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/login" active-class="active">
              <a class="nav-link">Login</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/register" active-class="active">
              <a class="nav-link">Register</a>
            </router-link>
            <router-link tag="li" class="nav-item" to="/products" active-class="active">
              <a class="nav-link">Products</a>
            </router-link>
          </ul>
        </div>
      </nav>

    <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Home from './components/Home.vue'

export default {
  name: 'App',
  // components: {
  //   Home
  // }
}
</script>

<style>
/*#app {*/
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
