<template>
  <AuthContainer type="Login" >
    <AuthComponentsInput ref="name" placeholder="Username"/>
    <AuthComponentsInput ref="password" placeholder="Password"/>
    <AuthComponentsSwap/>
    <AuthComponentsForgotbtn/>
    <AuthComponentsSubmit @submit="login"/>
  </AuthContainer>
</template>

<script setup>
  const name = ref(null);
  const password = ref(null);

  async function login(){
  
    const {data, error, pending, refresh}= await useFetch(_auth.API.login, {
      method: 'POST',
      body:{
        identifier: name.value.input.value,
        password: password.value.input.value,
      },
    });
    return console.log(data.value.jwt);
    
  };
  </script>