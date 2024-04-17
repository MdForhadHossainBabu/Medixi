import { useContext, useState } from "react";
import { Link,  } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
// import { useForm } from 'react-hook-form';





import {
  IoLogoGoogle,
  IoLogoFacebook,
  IoLogoGithub,
} from 'react-icons/io5';
import { Helmet } from "react-helmet-async";

const Login = () => {


  // const navigate= useNavigate()
  // const location = useLocation()
  // console.log(location)
  // const form = location?.state || '/'




  const { loginUser, registerPopUp, setUser, facebookLogin, githubLogin } =
    useContext(AuthContext);
  
  const [show, setShow] = useState(false)
  

 const handleLogin = e => {
   e.preventDefault();
   const name = e.target.name.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
  //  console.log(name, email, password);
   loginUser(email, password)
     .then(result => {
       const user = result.user;
       setUser(user)
       e.target.reset()
       console.log(user)
     })
   .then(error => console.log(error))
  }
  
    const handlePopUpWithGoogle = e => {
      e.preventDefault();

      registerPopUp()
        .then(result => {
          const user = result.user;
          // navigate(form);
          setUser(user)
          console.log(user);
        })
        .catch(error => console.log(error));
    };

  const facebookPopUpLogin = () => {
    facebookLogin()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
      console.log(error);
    })
  }  
  

  // github login

  const handleGithubLogin = () => {
    githubLogin()
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
      console.log(error);
    })
  }

 return (
   <div 
     
     data-aos="zoom-in-up"
     data-aos-duration="400"
     className="flex bg-slate-100 shadow-2xl  drop-shadow-xl rounded-xl flex-col items-center border-2 lg:mx-96 my-12 py-12"
   > 
     <Helmet>
       <title>Medixi Prime || Login</title>
     </Helmet>
     <h2
       data-aos="fade-left"
       data-aos-duration="2000"
       className="py-12 text-3xl font-extrabold"
     >
       Log In
     </h2>
     <form onSubmit={handleLogin}>
       <div data-aos="fade-down" data-aos-duration="2500" className="my-4">
         <p className="my-2">Email*</p>
         <input
           required
           className="border-2 px-2 pr-44 py-2"
           type="email"
           name="email"
           placeholder="Type Your Email*"
         />
       </div>
       <div className="relative" data-aos="fade-down" data-aos-duration="3000">
         <p className="my-2">Password*</p>
         <input
           required
           className="border-2 px-2 pr-44 py-2"
           type={show ? 'text' : 'password'}
           placeholder="Type Password*"
           name="password"
           id=""
         />
         <span
           onClick={() => setShow(!show)}
           className="absolute bottom-2 my-1 text-lg right-2"
         >
           {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
         </span>
       </div>

       <div
         data-aos="fade-up"
         data-aos-anchor-placement="bottom-up"
         className="text-center my-2"
       >
         <button className=" border-2 px-32 py-2 font-bold text-lg btn btn-primary opacity-85">
           Log In
         </button>
       </div>
     </form>
     <div className=" flex gap-2 flex-col my-4 items-center text-2xl">
       <div className="divider text-sm font-bold text-blue-600">Continue with</div>
       <div
         className="hover:cursor-pointer flex gap-1 border-2 px-20 py-1 rounded-lg items-center"
         data-aos="fade-up-right"
         data-aos-duration="1500"
         onClick={handlePopUpWithGoogle}
       >
         <IoLogoGoogle></IoLogoGoogle>{' '}
         <span className="text-sm">Login with Google</span>
       </div>
       <div
         className="hover:cursor-pointer flex gap-1 border-2 px-20 py-1 rounded-lg items-center"
         onClick={facebookPopUpLogin}
       >
         <IoLogoFacebook></IoLogoFacebook>{' '}
         <span className="text-sm">Login with Github</span>
       </div>
       <div
         data-aos="fade-up-left"
         data-aos-duration="1500"
         onClick={handleGithubLogin}
         className="hover:cursor-pointer flex gap-1 border-2 px-20 py-1 rounded-lg items-center"
       >
         <IoLogoGithub></IoLogoGithub>{' '}
         <span className="text-sm">Login with Github</span>
       </div>
     </div>
     <h2>
       Don't have account ?{' '}
       <Link
         className="hover:underline text-blue-600 font-bold text-lg"
         to="/register"
       >
         Sign up
       </Link>
     </h2>
   </div>
 );
};

export default Login;