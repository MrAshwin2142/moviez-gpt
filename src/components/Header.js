import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const user = useSelector(store => store.user);
    const navigate = useNavigate();

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");

        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    return (
        <div className="flex justify-between absolute z-10 w-full bg-gradient-to-b from-black">
            <div>
                <h1 className="text-red-600 font-bold text-5xl px-4 ">Moviez</h1>
            </div>
            <div className="p-4 flex">
                {user?.displayName && <h1 className="font-bold">hello, {user?.displayName}</h1>}
                <img className="w-8 mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe8eIW8UaYc7fD5QyVa_Z39U07KJzGel20cRbqsURLvQ&s" />
                <button onClick={handleLogout} className="font-bold text-white">LogOut</button>
            </div>
        </div>
    );
}
export default Header;