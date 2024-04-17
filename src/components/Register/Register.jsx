import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";




const Register = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [errorFirebase, setErrorFirebase] = useState(" ")

  
  const { registerUser, } = useContext(AuthContext);
  // console.log(registerUser);

  

  const handleRegister = e => {
   e.preventDefault();
   const name = e.target.name.value;
   const photo = e.target.photo.value;
   const email = e.target.email.value;
   const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    setSuccess('')
   if (password.length < 6) {
     setError('password must be at least 6 character');
     return;
  }
     
   if (password !== confirmPassword) {
     setError("password did't match")
     return; 
    }
    
    if (!/[A-Z][a-z]/.test(password)) {
       setError("password must be first letter uppercase")
       return;
    }
    if (!/\d{2,}$/.test(password)) {
      setError('Password must end two character number');
      return;
    }

    setErrorFirebase('');
    setError('');
     registerUser(email, password)
       .then(result => {
         const loggedUser = result.user;
         console.log(loggedUser);
        
         setSuccess('user created successfully');
         updateProfile(user, {
           displayName: name,
           photoURL: photo,
         })
         e.target.reset();
         
       })
       .catch(error => {
         console.log(error);
      
       });
    //  console.log(name,photo,email,password,confirmPassword);
    
      
 }
  
  

  


  
 return (
   <div
     data-aos="fade-up"
     data-aos-duration="400"
     className="flex flex-col items-center border-2 lg:mx-96 my-12 py-12"
   >
     <Helmet>
       <title>
         Medixi Prime || register
       </title>
     </Helmet>
     <h2
       data-aos="fade-left"
       data-aos-duration="1000"
       className="py-12 text-4xl font-extrabold"
     >
       Sign Up
     </h2>
     <form onSubmit={handleRegister}>
       <div className="my-3">
         <p className="my-2 hover:underline ">Name :</p>
         <input
           className="border-2 px-2 pr-44 py-2"
           type="text"
           name="name"
           required
           placeholder="Type Your Name*"
         />
       </div>
       <div className="my-3">
         <p className="my-2 ">Photo URl :</p>
         <input
           className="border-2 px-2 pr-44 py-2"
           type="text"
           name="photo"
           placeholder="Photo URL*"
         />
       </div>
       <div className="my-3">
         <p className="my-2">Email</p>
         <input
           className="border-2 px-2 pr-44 py-2"
           type="email"
           required
           name="email"
           placeholder="Type Your Email*"
         />
         {errorFirebase &&
           <div>
              <h1 className="text-red-600 text-clip">{errorFirebase}</h1>
           </div>
         }
       </div>
       <div className="my-3 relative">
         <p className="my-2">Password</p>
         <input
           className="border-2 px-2 pr-44 py-2"
           type={show ? 'text' : 'password'}
           placeholder="Type Password*"
           required
           name="password"
           id=""
         />
         <span
           className="absolute right-2 my-3 text-lg"
           onClick={() => setShow(!show)}
         >
           {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
         </span>
       </div>
       <div className="my-3 relative">
         <p className="my-2">Confirm Password</p>
         <input
           className="border-2 px-2 pr-44 py-2"
           type={showConfirm ? 'text' : 'password'}
           placeholder="Confirm Password*"
           name="confirmPassword"
           id=""
         />
         <span
           className="absolute right-2 my-3 text-lg"
           onClick={() => setShowConfirm(!showConfirm)}
         >
           {showConfirm ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
         </span>
         <br />
         {error && <small className="text-rose-700">{error}</small>}
       </div>
       <div>
         <button className="w-full border my-3 py-2 btn btn-primary">
           Submit
         </button>
       </div>
     </form>
     {
       success &&  <h2 className="text-green-500">{success}</h2>
     }

     <h2>
       Your have Already account ?{' '}
       <Link className="hover:underline text-blue-600 font-bold text-lg" to="/login">
         Login Now
       </Link>
     </h2>
   </div>
 );
};

export default Register;