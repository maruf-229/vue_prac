<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { ref } from 'vue'

let message = ref('Hello')

let doSomething = ()=>{
  alert(4121)
}

setTimeout(()=>{
  message.value = "Looking like  wow"
},2000)

</script>

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>

    <input v-model="message">
    <button @click="doSomething">ClickMe</button>
  </main>
</template>
