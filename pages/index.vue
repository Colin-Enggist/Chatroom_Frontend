<template>
  <div>
    <h1>Index</h1>
    
  </div>
</template>

<script setup>
onMounted(()=>{
  if(_auth.bearer !== null){
    console.log("töööten")
  }else{
    useNavigation("login")
  }
  return;
  })
</script>