import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/constants";
import { toggleSearch } from "../utils/gptSlice";

const Header = () => {
    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showSearch = useSelector(store => store.gptSearch.showGptSearch);
    const handleToggle = () => {
        dispatch(toggleSearch());
    }
    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse")
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
        // unsubscrib when component is unmount
        return () => unsubscrib();
    }, [])

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="md:flex bg-black  justify-between absolute z-10 w-full md:bg-gradient-to-b from-black">
            <div className="text-center">
                <h1 className="text-red-600 font-bold text-5xl px-4">Moviez</h1>
            </div>
            <div className="p-4 flex justify-between">
                {user?.displayName && <h1 className="font-bold m-2 text-white">Hello, {user?.displayName}</h1>}
                {user && <button className="bg-green-500 w-32 text-white rounded-lg p-auto" onClick={handleToggle}>{showSearch?"Home":"GPT Search"}</button>}
                {user && <img className="w-8 mx-2 hidden md:block" alt="profile logo" src={LOGO} />}
                {user && <button onClick={handleLogout} className="font-bold text-white">LogOut</button>}
            </div>
        </div>
    );
}
export default Header;