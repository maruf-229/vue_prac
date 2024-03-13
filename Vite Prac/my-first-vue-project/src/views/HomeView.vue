<script setup>
import {useFlash} from '@/composables/useFlash.js'

let { flash } = useFlash()
</script>

<template>
  <main>
    <button @click="flash('Babago','it is home page')">click me</button>
  </main>
</template>
