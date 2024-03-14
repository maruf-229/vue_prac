<script setup>
import {ref, watch} from "vue";

let food = ref(localStorage.getItem('food'))
let age = ref(localStorage.getItem('age'))

watch(food,(val) => {
  write('food',val)
})

watch(age,(val) => {
  write('age',val)
})

let write = (key,value) => {
  localStorage.setItem(key,value)
}

setTimeout(() => {
  food.value = 'changed'
},2000)
</script>

<template>
  <main>
    <p>
      What is your favourite food? <input type="text" v-model="food">
    </p>

    <p>
      How old are you? <input type="text" v-model="age">
    </p>
  </main>
</template>
