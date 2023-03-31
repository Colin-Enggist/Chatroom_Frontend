<template>
  <input :placeholder="props.placeholder" class="w-10/12 text-lg pl-4 h-12 mt-8 border-cyan-900"/>
</template>

<script setup>
const props = defineProps({
  placeholder: String,
  value: String,
})
</script>