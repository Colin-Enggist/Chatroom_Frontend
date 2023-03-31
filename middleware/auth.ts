export default defineNuxtRouteMiddleware(( from)=>{
  if(from.path === "/"){
    return '/auth/login'
  } else {
    console.log('here we will have the middleware wait for the response from the server to a Fetch.post submit')
  }
})