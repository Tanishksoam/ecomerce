import React from "react";
import { google, github } from "../assets";
// import {Auth} from "../firebase.config.js";
import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";



const Login = () => {
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });


    console.log("Google Login");
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className=" text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-4 hover:border-blue-600 cursor-pointer duration-300"
        >
          <img className="w-8" src={google} alt="" />
          <span className="tezt-sm text-gray-900">Sign in with Google</span>
        </div>
        <button className=" bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-10">
        <div className=" text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-4 hover:border-blue-600 cursor-pointer duration-300">
          <img className="w-8" src={github} alt="" />
          <span className="tezt-sm text-gray-900">Sign in with Github</span>
        </div>
        <button className=" bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Login;
