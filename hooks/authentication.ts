import firebase from "firebase/app";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { User } from "../models/User";

const userState = atom<User>({
  key: "user",
  default: null,
});

export function useAuthentication() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (user !== null) {
      return;
    }

    firebase
      .auth()
      .signInAnonymously()
      .catch(function (error) {
        console.log(error);
      });

    firebase.auth().onAuthStateChanged(function (firebaseUser) {
      if (firebaseUser) {
        console.log("set user");
        setUser({
          uid: firebaseUser.uid,
          isAnonymous: firebaseUser.isAnonymous,
        });
      } else {
        //User is signed out
        setUser(null);
      }
    });
  }, []);

  return { user };
}
