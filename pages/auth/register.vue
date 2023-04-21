<template>
  <AuthContainer type="Register" >
    <AuthComponentsInput ref="email" placeholder="E-Mail"/>
    <AuthComponentsInput ref="name" placeholder="Name"/>
    <AuthComponentsInput ref="password" placeholder="Password"/>
    <AuthComponentsSwap/>
    <AuthComponentsSubmit @submit="register"/>
  </AuthContainer>
</template>

<script setup>
  const name = ref(null);
  const password = ref(null);
  const email = ref(null);

async function register(){
    const {data, error, pending, refresh}= await useFetch(_auth.API.register, {
      method: 'POST',
      body:{
        username: name.value.input.value,
        email: email.value.input.value,
        password: password.value.input.value,
      },
    });
    return console.log(data.value.jwt);
  };
</script>