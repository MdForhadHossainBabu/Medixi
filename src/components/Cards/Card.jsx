import { Link } from "react-router-dom";

const Card = ({ card }) => {
 console.log(card);
 const {
   description,
   estate_title,
   image_url,
   location,
   price,
   facilities,
   status,
   segment_name,
 } = card;
 return (
   <div className="card bg-gray-100 drop-shadow-lg shadow-2xl ">
     <figure>
       <img
         className="w-96 h-[15rem] my-5 rounded-xl shadow-xl drop-shadow-2xl"
         src={image_url}
         alt="Shoes"
       />
     </figure>
     <div className="card-body">
       <h2 className="card-title">{segment_name}</h2>
       <p>{estate_title}</p>
       <div>
         <button className="border-2 px-12 border-red-300 uppercase">
           {status}
         </button>
       </div>
       <div>
         <ul className="flex border-red-300 gap-2">
           <li className="border-2 border-red-200 flex-1 text-sm items- py-2">
             {facilities[0]}
           </li>
           <li className="border-2 border-red-200 flex-1 text-sm items- py-2">
             {facilities[1]}
           </li>
           <li className="border-2 border-red-200 flex-1 text-sm items- py-4">
             {facilities[2]}
           </li>
           <li className="border-2 border-red-200 flex-1 text-sm items- py-2">
             {facilities[3] || facilities[0]}
           </li>
         </ul>
       </div>
       <Link
         to="/singleData"
         state={{card}}
         className="w-full text-center border-2 border-red-500 py-2 font-bold bg-secondary rounded-lg"
       >
         <button>View Property</button>
       </Link>
     </div>
   </div>
 );
};

export default Card;