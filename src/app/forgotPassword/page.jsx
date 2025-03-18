"use client";
import React, { useState } from 'react';
import { auth } from "../../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Please check your inbox.");
    } catch (error) {
      console.error(error);
      setMessage("Error sending password reset email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white h-full">
      <div className="w-full max-w-md p-8 bg-[#572649] h-full min-h-screen justify-center flex flex-col">
        {/* Title */}
        <h1 className="text-4xl font-medium text-white mb-8 text-center">
          Forgot Password
        </h1>

        {/* Forgot Password Form */}
        <form className="space-y-4 mb-6" onSubmit={handleResetPassword}>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-white"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            className="w-full bg-[#8B4B76] text-white py-3 rounded-full hover:bg-[#7a4267] transition-colors mt-4 cursor-pointer"
          >
            Reset Password
          </button>
        </form>

        {/* Message */}
        {message && (
          <div className="text-center text-white mt-4">
            {message}
          </div>
        )}

        {/* Back to Login Link */}
        <div className="text-center mt-6 text-white">
          Remember your password?{" "}
          <a
            href="/login"
            className="text-white font-medium hover:underline"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;