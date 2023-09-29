<template>
  <div id="app">
    <nav>
      <router-link to="/">Форма</router-link> 
      <router-link to="/preview">Превью</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  padding: 30px;
}

nav a {
  margin-right: 20px;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #01A7FD;
}
</style>
