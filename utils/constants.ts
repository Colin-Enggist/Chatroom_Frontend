import { auth } from "."

const _auth:auth={
  bearer: null,
  paths:{
    parent: "/auth",
    forgot: "/auth/forgot",
    login: "/auth/login",
    register: "/auth/register",
    reset: "/auth/reset",
  },
}

export {_auth}