import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import {  removeUser } from "../utils/userSlice"

const Body = () => {
    const dispatch = useDispatch();
    const appRoute = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in
            } else {
                // User is signed out
                dispatch(removeUser());
            }
        });
    }, [])

    return (
        <div>
            <RouterProvider router={appRoute} />
        </div>
    )
}

export default Body
