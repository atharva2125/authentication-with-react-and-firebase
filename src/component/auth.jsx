import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'


export const Auth = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const signin = async () => {
          try {
            await createUserWithEmailAndPassword(auth, email, password);//wait for user to create email and password and then continue exexution
        } catch (err){
            console.error(err);
        } 
    };
    const signinwithgoogle = async () => {
        try {
          await signInWithPopup(auth, googleProvider);//resolve part of the promise
      } catch (err){
          console.error(err);//reject part of the promise
      } 
    };
    const logOut = async () => {
        try {
          await signOut(auth);
      } catch (err){
          console.error(err);
      } 
    };
    return (
        <div>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signin}>Sign In</button>
            <button onClick={signinwithgoogle}>Sign In With Google</button>
            <button onClick={logOut}>Log Out</button>
        </div> 
    );
}