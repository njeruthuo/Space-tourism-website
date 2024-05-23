import { useEffect, useState } from "react";
import {imageMap} from "../utils/imageMaps";

const DestinationDetails = ({ destination }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (destination) {
      const loadImage = async () => {
        const image = await imageMap[destination.name]();
        setImageSrc(image.default);
      };
      loadImage();
    }
  }, [destination]);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className=" text-center">
      <h1 className="text-4xl mb-4">{destination.name}</h1>

      <div className="flex flex-col-reverse md:flex-row place-items-center">
        <div className="md:w-1/2">
          <p className="mb-4">{destination.description}</p>
          <p>
            <strong>Distance:</strong> {destination.distance}
          </p>
          <p>
            <strong>Travel time:</strong> {destination.travel}
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center items-center my-4 md:my-1">
          <img
            // src={destination?.images?.png}
            src={imageSrc}
            alt={destination.name}
            className="mx-auto mb-4 h-[350px] w-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
