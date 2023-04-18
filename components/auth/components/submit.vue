<template>
  <button @click="()=> $emit('submit')" class="absolute bottom-3 right-8 bg-indigo-200 w-fit rounded-lg border-none h-fit p-2">
      <p>Submit</p>
    </button>
</template>

<script setup>
const emit= defineEmits(['submit'])
</script>