import { defineStore } from "pinia";
import { auth } from "../firebase";
import { onAuthStateChanged, User } from "firebase/auth";

const global = defineStore("main", {
  state: () => {
    return {
      _user: null as null | User,
      userData: null,
    };
  },
  getters: {
    isSignedIn: (state) => state._user !== null,
    user: (state) => state._user,
  },
  actions: {
    setUser(user: null | User) {
      this._user = user;
    },
    clearUser() {
      this._user = null;
    },
  },
})();

onAuthStateChanged(auth, (user) => {
  console.log(`👤 Auth State Changed: ${user?.uid}`);
  global.setUser(user);
});

global.setUser(auth.currentUser);

export { global };
