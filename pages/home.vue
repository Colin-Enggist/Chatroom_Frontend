<template>
  <div>
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
  const data = useState('data', (value)=>{if(value){
    return value
  }else{
    return "nothing here"
  }})
</script>