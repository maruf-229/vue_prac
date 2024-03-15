<script setup>

import {inject} from "vue";

// defineProps({ quiz: Object });
//
// let {name, changedName} = inject('name')

let quiz = inject('quiz')



</script>

<template>
  <div>
    <h5>{{ quiz.name }}</h5>
<!--    <button @click="changedName">{{ name }}</button>-->

    <ul>
      <li><a href="#">Get a Job</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</template>
