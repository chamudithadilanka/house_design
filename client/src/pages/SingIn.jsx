import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SingInStart, SingInSuccess, SingInFailure } from '../redux/user/userSlice';

export default function SingIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(SingInStart());
      const res = await fetch('/api/auth/SingIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        dispatch(SingInFailure(data.message));
        return;
      }

      dispatch(SingInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(SingInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 py-16">
      <div className="p-6 max-w-lg w-full bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">Sign In</h1>

        <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
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
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>

        <div className="flex justify-center items-center gap-2 mt-5">
          <p className="text-gray-600">Don't have an account?</p>
          <Link to="/SignUp">
            <span className="text-indigo-600 font-medium hover:underline">Sign Up</span>
          </Link>
        </div>

        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
