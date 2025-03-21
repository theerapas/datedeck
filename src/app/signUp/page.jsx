"use client";

import Link from "next/link";
import Image from "next/image";
import { FaApple, FaGoogle, FaFacebook } from "react-icons/fa";
import { auth, googleProvider, db } from "../../config/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const signUp = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userDocRef = doc(db, "USERS", user.uid);
      const data = {
        userId: user.uid,
        username: username,
        createdAt: new Date(),
      };
      await setDoc(userDocRef, data);
      router.push("/accSetting");
    } catch (error) {
      console.error(error);
      alert("Failed to sign up.");
    }
  };

  const signUpwithGoogle = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      const userDocRef = doc(db, "USERS", user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (!userDocSnapshot.exists()) {
        const data = {
          userId: user.uid,
          username: user.email,
          createdAt: new Date(),
        };
        await setDoc(userDocRef, data);
        router.push("/accSetting");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to sign in with Google.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white h-full">
      <div className="w-full max-w-md p-8 bg-[#572649] h-full min-h-screen justify-center flex flex-col">
        {/* Title */}
        <h1 className="text-4xl font-medium text-white mb-8 text-center">
          Sign up
        </h1>

        {/* Sign Up Form */}
        <form className="space-y-4 mb-6">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-lg bg-white"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-white"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Terms of Service Checkbox */}
          <div className="flex items-center space-x-2 text-white cursor-pointer">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 rounded"
              required
            />
            <label htmlFor="terms" className="text-sm">
              agree all Term of Services
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-[#8B4B76] text-white py-3 rounded-full hover:bg-[#7a4267] transition-colors mt-4 cursor-pointer"
            onClick={signUp}
          >
            Sign up
          </button>
        </form>

        {/* Social Login Buttons */}
        <div className="space-y-4">
          <button className="flex items-center w-full bg-white text-gray-600 py-3 rounded-full shadow-md mb-4 px-4 cursor-pointer">
            <FaApple className="text-black" size={24} />
            <span className="flex-grow text-center">Continue with Apple</span>
          </button>

          <button
            className="flex items-center w-full bg-white text-gray-600 py-3 rounded-full shadow-md mb-4 px-4 cursor-pointer"
            onClick={signUpwithGoogle}
          >
            <FaGoogle className="text-red-500" size={24} />
            <span className="flex-grow text-center">Continue with Google</span>
          </button>

          <button className="flex items-center w-full bg-white text-gray-600 py-3 rounded-full shadow-md mb-8 px-4 cursor-pointer">
            <FaFacebook className="text-blue-600" size={24} />
            <span className="flex-grow text-center">
              Continue with Facebook
            </span>
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center mt-6 text-white">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-white font-medium hover:underline"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
