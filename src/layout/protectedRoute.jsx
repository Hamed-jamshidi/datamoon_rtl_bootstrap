// import { useContext } from "react";
import { Navigate, Outlet} from "react-router"
// import { UserContext } from "../context/context";
import Layout from "./layout";


export const ProtectedRoute = ()=>{
//   const [token , setToken] = useContext(UserContext);
// const token = true;

const token = localStorage.getItem("token");
console.log("ProtectedRoute ", token);
    if(!token) {
        return <Navigate to="/signin" replace/>
    }
    return <Layout><Outlet/></Layout> ;
};