<template>
  <div class="main">
    <div class="owner">
      <h2>Персональные данные</h2>
      <span>{{ getOwnerLocal.name }} <span v-if="showOwner.name">, </span></span>
      <span>{{ getOwnerLocal.age }} <span v-if="showOwner.age"> лет</span></span>
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
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['showOwner']),
    getKids() {
      return JSON.parse(localStorage.getItem('kids'))
    },
    getOwnerLocal() {
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