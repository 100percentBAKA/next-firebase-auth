"use client"

import React from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "@/firebase/config/firebase";

function Login() {
  const handleClick = async () => {
    try {
      await createUserWithEmailAndPassword(auth, "adarshgs.2003@gmail.com", "password")
    }
    catch(error) {
      console.error(error);
    }
  }

  return <div>
    <button onClick={handleClick}>Click me senpai</button>
  </div>;
}

export default Login;
