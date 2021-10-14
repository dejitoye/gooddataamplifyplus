import React from 'react'
// import { Link } from 'react-router-dom';

function SignUpPage() {
    return (
        <div className=" bg-green-100 min-h-screen fixed z-30 w-screen top-0 flex justify-center items-center">
          <div className="py-3 sm:w-96 sm:mx-auto">
            <span>Create Your Account</span>
            <div className="bg-white shadow-lg rounded-lg mt-4">
              <div className="h-2 bg-green-400 rounded-t-lg"></div>
              <div className=" px-8 py-6">
                <label className="block font-semibold"> Username</label>
    
                <input
                  type="text"
                  placeholder="username"
                  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-200 rounded-lg"
                />
    
    <label className="block font-semibold mt-2">Email</label>
            <input
              type="text"
              placeholder="Email.."
              className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-200 rounded-lg"
            />

                <label className="block font-semibold mt-2">Password</label>
                <input
                  type="text"
                  placeholder="password..."
                  className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-200 rounded-lg"
                />
    <div className="flex items-center space-x-0.5 mt-2">
        <input type="checkbox" className=" mr-2" />
        <label className="block font-semibold">I agree to the terms and privacy.</label>
    </div>
                <div className="flex justify-between items-baseline">
                    <button className="mt-4 bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-800 mr-2.5 w-full"> Create Account </button>
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }


export default SignUpPage
