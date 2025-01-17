import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const UpdateProfile = () => {

 

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.name.value;
    const photo = e.target.photo.value;
  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  })
    .then(() => {
        console.log('updated');
    })
    .catch(error => {
      console.log(error);
    })

    setUpdate(email,photo);
  }

 const { user,setUpdate } = useContext(AuthContext)
  console.log(user);
  

 return (
   <div>
     <Helmet>
       <title>Medixi Prime || Update Profile </title>
     </Helmet>
     <form onSubmit={handleSubmit}>
       <div className="flex flex-col lg:flex md:flex py-12  gap-12 items-center justify-center my-12 border-2 lg:mx-96 bg-gray-200">
         <div className="flex flex-col items-center gap-4">
           <img
             className="rounded-full w-32"
             src={
               user.photoURL }
             alt="image"
           />
           <h1>
             Name : <span className="font-bold">{user.displayName}</span>{' '}
           </h1>
           <h1>
             Email : <span className="font-bold">{user.email}</span>{' '}
           </h1>
         </div>
         <div className="flex flex-col space-y-5 my-12">
           <div>
             <p className="my-2 opacity-80 underline">Update Name :</p>
             <input
               name="name"
               className="border-2 px-4 w-[24rem] py-2 rounded-lg"
               type="text"
               placeholder={user.displayName}
             />
           </div>
           <div>
             <p className="my-2 underline opacity-80">Update URL : </p>
             <input
               name="photo"
               className="border-2 px-4 w-[24rem] py-2 rounded-lg"
               type="text"
               placeholder={user.photoURL}
             />
           </div>
           <button className="border-2 bg-white font-bold rounded-lg text-green-400 border-green-500  py-2">
             Update Profile
           </button>
         </div>
       </div>
     </form>
   </div>
 );
};

export default UpdateProfile;