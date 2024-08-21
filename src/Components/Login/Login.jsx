import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const {signinuser,signwithpop} = useContext(AuthContext);
    const hadelgoogle = () =>{
        signwithpop()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })

    }
    const handelogin  =  e =>{
        e.preventDefault();
        const email =  e.target.email.value;
        const password =  e.target.password.value;
        signinuser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
        

    }
    
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
           
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handelogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <button onClick={hadelgoogle} className="bg-green-400 btn-primary px-2 rounded-lg">Login with google</button>
        </div>
      </div>
    </div>
    );
};

export default Login;