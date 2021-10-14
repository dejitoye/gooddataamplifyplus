import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useHistory } from "react-router-dom";
import Link from "next/link"
import { useRouter } from "next/dist/client/router";

function SignInPage() {
//   const history=useHistory()
const router = useRouter()
  const state = useSelector(state => state.userSession.login)
  const dispatch = useDispatch()
  const signIn =()=>{
   dispatch ({type:"SIGNIN"})
   router.push("/")
// console.log(state,"history is:",history)
  //  if (state){
  //    history.push("/")
  //  }
  }
  return (
    <div className=" bg-green-100 min-h-screen  w-screen top-0 flex justify-center items-center">
      <div className="py-3 sm:w-96 sm:mx-auto">
        <span> Login to your Account</span>
        <div className="bg-white shadow-lg rounded-lg mt-4">
          <div className="h-2 bg-green-400 rounded-t-lg"></div>
          <div className=" px-8 py-6">
            <label className="block font-semibold"> Username</label>

            <input
              type="text"
              placeholder="username"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-200 rounded-lg"
            />



            <label className="block font-semibold mt-2">Password</label>
            <input
              type="text"
              placeholder="password..."
              className="border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-green-200 rounded-lg"
            />

            <div className="flex justify-between items-baseline">
                <button onClick={signIn} className="mt-4 bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-800 mr-2.5"> Login</button>
                <Link href="/" className="text-sm hover:underline text-gray-600"> Forgot Password ?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
