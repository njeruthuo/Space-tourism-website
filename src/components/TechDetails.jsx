import { useEffect, useState } from "react";
import { techImg } from "../utils/imageMaps";

const TechDetails = ({ tech }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (tech) {
      const loadImage = async () => {
        const image = await techImg[tech?.name]();
        setImageSrc(image.default);
      };
      loadImage();
    }
  }, [tech]);

  if (!tech) {
    return <div>tech not found</div>;
  }

  return (
    <div className=" text-center">
      <h1 className="text-4xl mb-4">{tech.name}</h1>

      <div className="flex flex-col-reverse md:flex-row place-items-center">
        <div className="md:w-1/2">
          <p className="mb-4">{tech.description}</p>
        </div>

        <div className="md:w-1/2 flex justify-center items-center my-4 md:my-1">
          <img
            src={imageSrc}
            alt={tech.name}
            className="mx-auto mb-4 rounded-md h-[350px] w-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TechDetails;
