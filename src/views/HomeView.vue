<template>
  <div class="main">
    <div class="owner">
      <h2>Персональные данные</h2>
      <AddOwnerForm :ownerName=getOwner.name :ownerAge=getOwner.age />
    </div>
    <div class="kids">
      <div class="kids__header">
        <h2>Дети (макс. 5)</h2>
        <button class="kids__add" @click="addEmptyKid()">Добавить ребенка</button>
      </div>
    </div>
    <ul>
      <li v-for="(el, i) in getKids" :key="el.id">
        <AddKidForm :kidName=el.name :kidAge=el.age :ind=i :kidId=el.id></AddKidForm>
      </li>
    </ul>
    <button class="main__save" @click="saveToLocal()">Сохранить</button>
  </div>
</template>

<script>
import AddKidForm from '@/components/AddKidForm.vue';
import AddOwnerForm from '@/components/AddOwnerForm.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    AddKidForm, AddOwnerForm
  },
  computed: {
    ...mapGetters(['allKids', 'showOwner']),
    getKids() {
      return this.allKids
    },
    getOwner() {
      return this.showOwner
    }
  },
  methods: {
    ...mapMutations(['addKid']),
    addEmptyKid() {
      this.addKid({
        name: '',
        age: '',
      })
    },
    saveToLocal() {
      localStorage.setItem('kids', JSON.stringify(this.getKids))
      localStorage.setItem('owner', JSON.stringify(this.getOwner))
      console.log(this.getKids);
    }
  }
}
</script>


<style>
button {
  cursor: pointer;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  margin-bottom: 10px;
}

.main {
  max-width: 600px;
  margin: 0 auto;
}

.kids__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.kids__add {
  width: 200px;
  height: 40px;
  padding: 10px 20px;
  color: #01A7FD;
  background-color: transparent;
  border-radius: 90px;
  border: 2px solid #01A7FD;
}

.main__save {
  padding: 10px 20px;
  background-color: #01A7FD;
  color: white;
  border-radius: 50px;
  border: none;
}
</style>