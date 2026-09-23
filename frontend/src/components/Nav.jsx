import {useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom"
import { asynclogoutuser } from "../store/actions/userAction";

const Nav = () => {
  const dispatch= useDispatch();
  const navigate = useNavigate();

   const users = useSelector((state) => state.usersReducer.users  );

   const LogoutHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/")
   }
   
   

  return (
    <nav className= " mb-10 flex justify-center items-center gap-x-5 p-5">

      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/products"}>Products</NavLink>

      {users ? (
        <>
        <NavLink to={"/admin/create-product"}>Create Product</NavLink>
        <button onClick={LogoutHandler}>Logout</button>
        </>
      ): (
      <>
      <NavLink to={"/login"}>Login</NavLink>
      </>
      )}
        
          
          
          


          
    </nav>
  )
}

export default Nav