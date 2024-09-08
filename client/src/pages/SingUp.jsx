import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 py-14">
      <div className="p-6 max-w-lg w-full bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">Sign up</h1>

        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            id="username"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            id="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            id="password"
          />
          <button
            className="bg-indigo-600 text-white p-4 rounded-lg uppercase font-semibold hover:bg-indigo-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="flex justify-center items-center gap-2 mt-5">
          <p className="text-gray-600">Already have an account?</p>
          <Link to="/SingIn">
            <span className="text-indigo-600 font-medium hover:underline">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
