import React from "react";
import { google, github } from "../assets";
import { useDispatch } from "react-redux";
// import {Auth} from "../firebase.config.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleGoogleLogin = () => {
    signInWithRedirect(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 2000);
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign Out Successfully!");
        console.log("Sign Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10 py-28">
      <div className="w-fit h-full flex flex-col items-center justify-center gap-10 px-6 py-14 rounded-3xl border-r-[10px] border-b-[6px] border-[1px] border-gray-500">
        <div className="w-full flex items-center justify-center gap-10">
          <h1 className=" font-bodyFont font-semibold text-gray-800 text-4xl">
            Login
          </h1>
        </div>
        <div className="w-full flex items-center justify-center gap-10">
          <div
            onClick={handleGoogleLogin}
            className=" text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-4 hover:border-blue-600 cursor-pointer duration-300"
          >
            <img className="w-8" src={google} alt="" />
            <span className="tezt-sm text-gray-900">Sign in with Google</span>
          </div>
          <button
            onClick={handleSignOut}
            className=" bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
          >
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
    </div>
  );
};

export default Login;
