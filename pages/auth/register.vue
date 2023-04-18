<template>
  <AuthContainer type="Register" >
    <AuthComponentsInput placeholder="E-Mail"/>
    <AuthComponentsInput placeholder="Name"/>
    <AuthComponentsInput placeholder="Password"/>
    <AuthComponentsSwap/>
    <AuthComponentsSubmit @submit="register"/>
  </AuthContainer>
</template>

<script setup>
async function register(){
    const {data, error, pending, refresh}= await useFetch(_auth.API.register, {
      method: 'POST',
      body:{
        username: "adfasadsfasdf",
        email: "atest.ff@test.com",
        password: "asdfasf11",
      },
    });
    return console.log(data);
  };
</script>