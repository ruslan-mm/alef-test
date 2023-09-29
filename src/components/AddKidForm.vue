<template>
    <form class="kids__form">
        <input placeholder="Имя" class="kids__form-input" @change="edit()" type="text" v-model="name">
        <input type="number" placeholder="Возраст" class="kids__form-input" @change="edit()" v-model="age">
        <button class="kids__form-delete" @click="removeKid()" type="button">Удалить</button>
    </form>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            name: this.kidName,
            age: this.kidAge,
            id: this.kidId,
        }
    },
    methods: {
        ...mapMutations(['deleteKid', 'editKid']),
        edit() {
            this.editKid({
                index: this.ind,
                data: {
                    name: this.name,
                    age: this.age,
                    id: this.id,
                }
            })
        }, 
        removeKid() {
            this.deleteKid(this.ind)
        }
    },
    props: ['ind', 'kidName', 'kidAge', 'kidId'],
}
</script>

<style>
.kids__form {
    display: flex;
    justify-content: space-between;
}

.kids__form-input {
    width: 35%;
}

.kids__form-input {
    height: 56px;
    border-radius: 10px;
    border: 1px solid grey;
}

.kids__form-delete {
    background-color: transparent;
    border: none;
    color: #01A7FD;
}
</style>