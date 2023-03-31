
interface auth {
  bearer: null|string;
  paths: {
    parent: String;
    forgot: String;
    login: String;
    register: String;
    reset: String;
  };
}

export {auth}