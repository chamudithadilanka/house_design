import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.id]: e.target.value, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/SingUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (data?.success === false) {
        setLoading(false);
        setErrors(data.message);
        return;
      }

      setLoading(false);
      setErrors(null);
      navigate('/SingIn');
    } catch (error) {
      setLoading(false);
      setErrors(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 py-14">
      <div className="p-6 max-w-lg w-full bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">Sign up</h1>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            id="password"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-indigo-600 text-white p-4 rounded-lg uppercase font-semibold hover:bg-indigo-700 transition duration-200"
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>

        <div className="flex justify-center items-center gap-2 mt-5">
          <p className="text-gray-600">Already have an account?</p>
          <Link to="/SingIn">
            <span className="text-indigo-600 font-medium hover:underline">Sign in</span>
          </Link>
        </div>

        {errors && <p className="text-red-500">{errors}</p>}
      </div>
    </div>
  );
}
