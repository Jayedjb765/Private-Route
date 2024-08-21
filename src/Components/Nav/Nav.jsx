import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Nav = () => {
    const {user,loogout} = useContext(AuthContext);
    const handelsigout =  ()  =>{
        loogout()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const  Navli =  <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/log">Login</NavLink></li>
    <li><NavLink to="/reg">Registration</NavLink></li>
    {
        user && <li><NavLink to="/food">Food</NavLink></li>
    }
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {Navli}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {Navli}
    </ul>
  </div>
  <div className="navbar-end">
    { 
        user ?<a className="btn btn-sm" onClick={handelsigout}>Sign Out</a> :
        <Link to="/log">Log in</Link>
    }
    
  </div>
</div>
    );
};

export default Nav;