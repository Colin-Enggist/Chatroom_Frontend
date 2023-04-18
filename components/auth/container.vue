<template>
  <div class="mx-auto w-96 mt-28 h-fit pb-28 pt-7 flex flex-col rounded-md items-center relative bg-indigo-500">
    <h2 class="mb-6 text-3xl">{{ props.type }}</h2>
    <slot/>
  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
});


</script>