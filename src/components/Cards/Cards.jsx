import { useEffect, useState } from "react";
import Card from "./Card";
import { Helmet } from "react-helmet-async";

const Cards = () => {
 const [cards, setCards] = useState([]);

 useEffect(() => {
  fetch('hospital.json')
    .then(res => res.json())
    .then(data => setCards(data));
 },[])
 return (
   <div>
     <h3 className="text-5xl text-center items-center font-bold first-letter:text-6xl">Real Estate</h3>
     <p className="text-center items-center justify-center lg:mx-96 my-6">
       Conveniently located near premier medical facilities, our properties
       offer peace of mind and easy access to essential healthcare services.
       Experience comfort and security knowing that top-notch medical care is
       just moments away from your doorstep
     </p>
     <div className="grid lg:mx-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-4">
       {cards.map(card => (
         <Card card={card} key={card.id}></Card>
       ))}
     </div>
   </div>
 );
};

export default Cards;