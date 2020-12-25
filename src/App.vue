<template>
  <div id="app">
    <router-view />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
    </div> -->
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  html {
    margin: 0;
    padding: 0;
    background-color: rgba(0, 119, 255, 0.15);
  }
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: rgba(0, 119, 255, 0.15);

    /* height: 100vh;
    overflow-y: scroll; */
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
