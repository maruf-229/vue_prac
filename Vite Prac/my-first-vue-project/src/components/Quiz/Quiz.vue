<script setup>
import QuizHeader from "@/components/Quiz/QuizHeader.vue";
import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
import QuizFooter from "@/components/Quiz/QuizFooter.vue";

import {provide} from "vue";

let props = defineProps({ quiz: Object });

// let name = ref('John Doe')

// provide('name',{
//   name,
//   changedName: () => name.value = 'A changed Name'
// });

provide('quiz',props.quiz)

</script>

<template>

<!--  <h1>{{ name }}</h1>-->
  <QuizHeader />

  <QuizQuestion />

  <QuizFooter :quiz="quiz"/>

</template>
