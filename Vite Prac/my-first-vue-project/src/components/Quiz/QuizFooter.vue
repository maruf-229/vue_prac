<script setup>
// import { inject } from "vue";
import QuizFooterLinks from "@/components/Quiz/QuizFooterLinks.vue";
// let quiz = inject('quiz');
// defineProps({
//   quiz: Object
// });
</script>

<template>
  <footer>
    <h4>Quiz Footer</h4>
<!--    <QuizFooterLinks :quiz="quiz" />-->
    <QuizFooterLinks />
  </footer>
</template>
