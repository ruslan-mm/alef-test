<template>
  <div class="main">
    <div class="owner">
      <h2>Персональные данные</h2>
      <span>{{ getOwner.name }}, </span>
      <span>{{ getOwner.age }} лет</span>
    </div>
    <div class="kids">
      <div>
        <h2>Дети</h2>
        <ul>
          <li v-for="(kid, i) in getKids" :key="i">
            <span>{{ kid.name }}, </span>
            <span>{{ kid.age }} лет</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getKids() {
      return JSON.parse(localStorage.getItem('kids'))
    },
    getOwner() {
      return JSON.parse(localStorage.getItem('owner'))
    },
  },
}
</script>

<style>
span {
  font-weight: bold;
}
</style>