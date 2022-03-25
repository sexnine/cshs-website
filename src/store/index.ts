import { defineStore } from "pinia";
import { auth } from "../firebase";
import { onAuthStateChanged, User } from "firebase/auth";

const global = defineStore("main", {
  state: () => {
    return {
      user: null as null | User,
    };
  },
  getters: {
    isSignedIn: (state) => state.user !== null,
  },
  actions: {
    setUser(user: null | User) {
      this.user = user;
    },
    clearUser() {
      this.user = null;
    }
  },
})();

onAuthStateChanged(auth, (user) => {
  console.log(`👤 Auth State Changed: ${user?.uid}`)
  global.setUser(user);
})

export { global };