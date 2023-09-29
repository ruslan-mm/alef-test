<template>
    <form class="owner__form">
        <input placeholder="Имя" class="owner__form-input" @change="saveOwner()" type="text" v-model="name">
        <input placeholder="Возраст" class="owner__form-input" @change="saveOwner()" type="number" v-model="age">
    </form>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            name: this.ownerName,
            age: this.ownerAge,
        }
    },
    methods: {
        ...mapMutations(['setOwner']),
        saveOwner() {
            this.setOwner({ name: this.name, age: this.age });
        }
    },
    props: ['ownerName', 'ownerAge']
}
</script>

<style>
.owner__form {
    display: flex;
    flex-direction: column;
}

.owner__form-input:first-child {
    margin-bottom: 10px;
}

.owner__form-input {
    height: 56px;
    border-radius: 10px;
    border: 1px solid grey;
}
</style>