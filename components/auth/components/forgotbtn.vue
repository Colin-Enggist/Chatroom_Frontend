<template>
  <button @click="()=>forgothandler()" class="absolute bottom-16 left-4 text-indigo-300 w-fit rounded-lg border-none p-1 h-fit">
      <p>Forgot your Password?</p>
    </button>
</template>

<script setup>
  const forgothandler= ()=>{
  return useNavigation(_auth.paths.forgot)
}
</script>