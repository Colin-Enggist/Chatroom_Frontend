<template>
  <div class="mx-auto w-96 mt-28 h-fit pb-28 pt-7 flex flex-col rounded-md items-center relative bg-indigo-500">
    <h2 class="mb-6 text-3xl">{{ props.type }}</h2>
    <slot/>
    <AuthComponentsSwap/>
    <button @click="()=>forgothandler()" class="absolute bottom-16 left-4 text-indigo-300 w-fit rounded-lg border-none p-1 h-fit">
      <p>Forgot your Password?</p>
    </button>
    <AuthComponentsSubmit/>
  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
});

const forgothandler= ()=>{
  return useNavigation(_auth.paths.forgot)
}

</script>