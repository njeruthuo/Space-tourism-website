// import { Link } from "react-router-dom";
import { useState } from "react";
import useData from "../utils/useData";
import DestinationDetails from "./DestinationDetails";

const Destinations = () => {
  const { destinations } = useData();
  const [select, setSelect] = useState("MOON");
  let destination = destinations.find(
    (destination) => destination.name.toUpperCase() === select.toUpperCase()
  );

  return (
    <div className="w-[80%] mx-auto home-height pt-8 mt-2 flex items-center flex-col">
      {/* Links */}
      <div className="flex space-x-6 md:space-x-10 border-b border-white pb-2">
        {destinations.map((destination, index) => {
          return (
            <h2
              className="hover:cursor-pointer font-bold hover:border-b border-b-red-400"
              onClick={() => setSelect(destination.name.toUpperCase())}
              key={index}
            >
              {destination.name}
            </h2>
          );
        })}
      </div>
      <div className="block mt-4">
        <DestinationDetails destination={destination} />
      </div>
    </div>
  );
};
export default Destinations;
