<template>
  <AuthContainer type="Login" >
    <AuthComponentsInput placeholder="name"/>
    <AuthComponentsInput placeholder="password"/>
    <AuthComponentsSwap/>
    <AuthComponentsForgotbtn/>
    <AuthComponentsSubmit @submit="login"/>
  </AuthContainer>
</template>

<script setup>
  async function login(){
    
    const {data, error, pending, refresh}= await useFetch(_auth.API.login, {
      method: 'POST',
      body:{
        identifier: "test",
        password: "test1234",
      },
    });
    return console.log(data.value.jwt);

  };
  </script>