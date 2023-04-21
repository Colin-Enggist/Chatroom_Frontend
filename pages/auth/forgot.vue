<template>
  <AuthContainer type="Forgot Password">
    <AuthComponentsInput ref="email" placeholder="E-mail"/>
    <AuthComponentsSwap/>
    <AuthComponentsSubmit @submit="reset"/>
  </AuthContainer>
</template>

<script setup>
  const email = ref(null)

  async function reset(){

    const {data, error, pending, refresh}= await useFetch(_auth.API.forgot, {
      method: 'POST',
      body:{
        email: email.value.input.value,
        //url: 'http://localhost:3000/auth/reset',
      },
    });
   return console.log(data.value);
    
  };
</script>