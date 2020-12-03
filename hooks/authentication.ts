import firebase from "firebase/app";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { User } from "../models/User";


async function createUserifNotFound(user: User) {
  const userRef = firebase.firestore().collection("users").doc(user.uid);
  const doc = await userRef.get();
  if (doc.exists) {
    return;
  }

  await userRef.set({
    name: "taro" + new Date().getTime(),
  });
}

export function useAuthentication() {
  const userState = atom<User>({
    key: "user",
    default: null,
  });
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
        const loginUser: User = {
          uid: firebaseUser.uid,
          isAnonymous: firebaseUser.isAnonymous,
          name: ""
        };
        setUser(loginUser);
        createUserifNotFound(loginUser);
      } else {
        //User is signed out
        setUser(null);
      }
    });
  }, []);

  return { user };
}
