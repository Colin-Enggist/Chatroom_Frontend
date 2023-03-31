<template>
  <button @click="()=>authswap()" class="absolute bottom-4 left-4 text-indigo-300 w-fit rounded-lg border-none p-1 h-fit">
      <p>{{ msg() }}</p>
    </button>
</template>

<script setup>
const props = defineProps({
  msg: String,
});

const Router = useRouter();

const authswap= ()=>{
  switch(Router.currentRoute.value.fullPath){
    case _auth.paths.login:
      useNavigation(_auth.paths.register);
    break;
    default:
      useNavigation(_auth.paths.login);
    break;
  }
};

const msg = ()=>{
  var compute;
  switch(Router.currentRoute.value.fullPath){
    case _auth.paths.login:
      compute= "New to the Site? Click on me!";
    break;
    case _auth.paths.register:
      compute= "Already an Acount? Click me!";
    break;
    case _auth.paths.forgot:
      compute= "Remembered again? Try and Cry.";
    break;
  }
  return compute
}
</script>