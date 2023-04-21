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
  API: {
    index: "http://localhost:1337/api",
    login: "http://localhost:1337/api/auth/local",
    register: "http://localhost:1337/api/auth/local/register",
    forgot: "http://localhost:1337/api/auth/forgot-password",
  },
  AUTH_TOKEN: "Token",
  BEARER: null,
}

export {_auth}