<template>
  <input :type="ispassword()" ref="input" :placeholder="props.placeholder" class="w-10/12 text-lg pl-4 h-12 mt-8 border-cyan-900"/>
</template>

<script setup>

  function ispassword(){
    if(props.placeholder === "Password"){
      return "password"
    }else{return ""}
  }

  const input = ref(null)

  defineExpose({
    input
  })

const props = defineProps({
  placeholder: String,
})
</script>