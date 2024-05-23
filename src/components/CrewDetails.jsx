import { useEffect, useState } from "react";
import { crewImg } from "../utils/imageMaps";

const CrewDetails = ({ member }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (member) {
      const loadImage = async () => {
        const image = await crewImg[member?.role]();
        setImageSrc(image.default);
      };
      loadImage();
    }
  }, [member]);

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className=" text-center">
      <h1 className="text-4xl mb-4">{member.name}</h1>

      <div className="flex flex-col-reverse md:flex-row place-items-center">
        <div className="md:w-1/2">
          <p className="text-lg my-2 md:my-0">
            <strong>Mission Role:</strong> {` ${member.role}`}
          </p>
          <p className="mb-4">{member.bio}</p>
        </div>

        <div className="md:w-1/2 flex justify-center items-center my-4 md:my-1">
          <img
            // src={destination?.images?.png}
            src={imageSrc}
            alt={member.name}
            className="mx-auto mb-4 h-[350px] w-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CrewDetails;
