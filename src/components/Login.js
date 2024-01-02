import { useRef, useState } from "react";
import Header from "./Header";
import checkForm from "../utils/checkForm";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const navitage = useNavigate();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();

    const validateForm = () => {
        const msg = checkForm(email.current.value, password.current.value);
        setErrorMsg(msg);
        if (msg) {
            return;
        }

        if (!isSignInForm) {
            // Signed up 
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, } = auth.currentUser;
                        console.log(user);
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                        navitage("/browse");

                    }).catch((error) => {
                        // An error occurred
                        setErrorMsg(error);
                    });
                })

                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode+"-"+errorMessage)
                });
        } else {
            // Signed in 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // const user = userCredential.user;
                    navitage("/browse");

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode+"-"+errorMessage)
                });
        }
    }
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
                    alt="nothing"
                />
            </div>
            <form onSubmit={(e) => { e.preventDefault() }} className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-70 justify-center rounded-lg">
                <h1 className="font-bold text-2xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} className="border border-black my-2 p-2 w-full bg-gray-800" placeholder="Full Name" type="text" />}
                <input ref={email} className="border border-black my-2 p-2 w-full bg-gray-800" placeholder="Email" type="email" />
                <input ref={password} className="border border-black my-2 p-2 w-full bg-gray-800" placeholder="Password" type="password" />
                <p className="text-red-600" >{errorMsg}</p>
                <button className="bg-red-600 my-4 p-2 font-bold w-full rounded-lg" onClick={validateForm}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer" onClick={toggleForm}>
                    {isSignInForm ? "New to Moviez? Sign Up Now" : "Already User? Sign In Now"}
                </p>
            </form>
        </div>
    )
}
export default Login;