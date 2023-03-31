<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<script setup>
onMounted(()=>{
  if(_auth.bearer !== null){
    console.log("autologin")
  }else{
    useNavigation(_auth.paths.login)
  }
  return;
  })
</script>