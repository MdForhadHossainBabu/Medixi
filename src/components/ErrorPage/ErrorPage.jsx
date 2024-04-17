import { Link } from "react-router-dom";

const ErrorPage = () => {
 return (
   <>
     <div className="flex flex-col items-center my-24 relative">
       <h1 className="text-7xl font-extrabold text-red-500">404/</h1>{' '}
       <p className="absolute lg:left-[55%] md:left-[50%] md:top-[58%] top-[65%] left-[43%] lg:top-[51%]  font-bold text-xl">
         Page Not Found
       </p>
   </div>
   

   <div className=" lg:px-24 text-center py-4">
    <Link to="/" className="border-2 px-24 py-4 text-xl font-bold rounded-xl bg-green-400 text-white">Back to Home</Link>
   </div>
   </>
 );
};

export default ErrorPage;