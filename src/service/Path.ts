



const MainPath = {
  auth: "/accounts/*",
  layout: "/*"
}

const AuthPath = {
  register: "/signup",
  login: "login"
}

const ConnectedAuthPath = {
  register: "/accounts/signup",
  login: "/accounts/login",
}


export const PATH = {
  MainPath,
  AuthPath,
  ConnectedAuthPath,

}