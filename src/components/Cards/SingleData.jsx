import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SingleData = () => {
  const locations = useLocation();
  const {area, description, estate_title, id, image_url, price, segment_name, status, facilities,location } = locations.state.card;
 console.log(locations.state.card);
  return (
    <>
      <Helmet>
        <title>Medixi Prime || card details</title>
      </Helmet>
      <h3 className="text-4xl font-bold text-center items-center first-letter:text-5xl">
        Current Pages Details
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:mx-52 my-12 mx-4 border-2 px-12 py-3 rounded-lg bg-gray-200">
        <div>
          <img
            className="lg:w-[52rem] lg:h-full rounded-xl shadow-xl drop-shadow-xl"
            src={image_url}
            alt=""
          />
        </div>

        <div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">
              <span className="underline">ID NO</span> : {id}
            </h1>
            <h3 className="text-2xl font-bold">{segment_name}</h3>
            <h1 className="ml-12 font-bold opacity-75">{estate_title}</h1>
            <p>{description}</p>
            <span className="flex flex-col font-medium">
              <li>{facilities[0]}</li>
              <li>{facilities[1]}</li>
              <li>{facilities[2]}</li>
              <li>{facilities[1]}</li>
            </span>
            {/* location */}
            {/* price */}
            <p>Price : ${price}</p>
            <ol>
              <span className="font-bold">Status :</span> {status}
            </ol>
            <span>
              <span className="font-bold">Area : </span> {area}
            </span>
            <ol className="font-medium">
              <span className="font-bold">location :</span> {location}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleData;