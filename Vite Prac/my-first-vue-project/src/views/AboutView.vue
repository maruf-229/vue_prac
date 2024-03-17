<script setup>
import {useFlash} from '@/composables/useFlash.js'
import {useCounterStore} from "@/stores/CounterStore.js";

let counter = useCounterStore()

let { flash } = useFlash()
</script>

<template>
  <div>
    <h1>About Page. The current count is  {{ counter.count }}</h1>
    <button @click="flash('Omago!','it is about page','info')">click me</button>
  </div>
</template>