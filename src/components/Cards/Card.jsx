import { Link } from "react-router-dom";

const Card = ({ card }) => {
//  console.log(card);
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
   <div
     data-aos="flip-down"
     data-aos-duration="1000"
     className="card bg-gray-100 drop-shadow-lg shadow-2xl "
   >
     <figure>
       <img data-aos="flip-right" data-aos-duration="700"
         className="w-96 h-[15rem] my-5 rounded-xl shadow-xl drop-shadow-2xl"
         src={image_url}
         alt="image"
       />
     </figure>
     <div className="card-body">
       <h2 data-aos="fade-down" data-aos-duration="700" className="card-title">
         {segment_name}
       </h2>
       <p data-aos="fade-up" data-aos-duration="700">
         {estate_title}
       </p>
       <div>
         <button className="border-2 px-12 border-green-300 uppercase">
           {status}
         </button>
       </div>
       <div>
         <ul className="flex border-green-300 items-center gap-2 text-center">
           <li className="border-2 border-green-200 flex-1 items-center text-sm items- py-2  overflow-hidden h-12">
             {facilities[0]}
           </li>
           <li className="border-2 border-green-200 flex-1 text-center text-sm items- py-2 h-12 overflow-hidden">
             {facilities[1]}
           </li>
           <li className="border-2 border-green-200 flex-1 text-center text-sm items- py-4 h-12 overflow-hidden">
             {facilities[2]}
           </li>
           <li className="border-2 border-green-200 flex-1 text-center text-sm items- py-2 h-12 overflow-hidden">
             {facilities[3] || facilities[0]}
           </li>
         </ul>
       </div>
       <Link data-aos="zoom-in"
         data-aos-duration="1000"
         to="/singleData"
         state={{ card }}
         className="w-full text-center border-2  py-2 font-bold bg-green-500 text-white rounded-lg hover:scale-105 duration-500"
       >
         <button>View Property</button>
       </Link>
     </div>
   </div>
 );
};

export default Card;