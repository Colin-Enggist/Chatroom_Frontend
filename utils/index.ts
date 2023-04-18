
interface auth {
  bearer: null|string;
  paths: {
    parent: String;
    forgot: String;
    login: String;
    register: String;
    reset: String;
  },
  API: {
    index: string,
    login: string,
    register: string,
  },
  AUTH_TOKEN: string,
  BEARER: string|null,
}

export {auth}