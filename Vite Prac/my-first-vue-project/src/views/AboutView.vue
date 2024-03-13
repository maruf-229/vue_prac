<script setup>
import {useFlash} from '@/composables/useFlash.js'

let { flash } = useFlash()
</script>

<template>
  <div>
    <button @click="flash('Omago!','it is about page','info')">click me</button>
  </div>
</template>