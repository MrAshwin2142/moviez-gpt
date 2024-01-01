import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div >
                <img
                    className="absolute"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background-image"
                />
            </div>
            <form className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-70 justify-center rounded-lg">
                <h1 className="font-bold text-2xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input className="border border-black my-2 p-2 w-full bg-gray-800" placeholder="Full Name" type="text" />}
                <input className="border border-black my-2 p-2 w-full bg-gray-800" placeholder="Email" type="email" />
                <input className="border border-black my-2 p-2 w-full bg-gray-800" placeholder="Password" type="password" />
                <button className="bg-red-600 my-4 p-2 font-bold w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer" onClick={toggleForm}>
                    {isSignInForm ? "New to Moviez? Sign Up Now" : "Already User? Sign In Now"}
                </p>
            </form>
        </div>
    )
}
export default Login;