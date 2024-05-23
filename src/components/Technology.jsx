import { useState } from "react";
import useData from "../utils/useData";
import TechDetails from "./TechDetails";

const Technology = () => {
  const { technology } = useData();
  const [select, setSelect] = useState("Launch vehicle");
  let tech = technology.find(
    (t) => t.name.toUpperCase() === select.toUpperCase()
  );

  return (
    <div className="w-[80%] mx-auto home-height pt-8 mt-2 flex items-center flex-col">
      {/* Links */}
      <div className="flex space-x-6 md:space-x-10 border-b border-white pb-2">
        {technology.map((tech, index) => {
          return (
            <h2
              className="hover:cursor-pointer text-sm font-bold hover:border-b border-b-red-400"
              onClick={() => setSelect(tech.name.toUpperCase())}
              key={index}
            >
              {tech.name}
            </h2>
          );
        })}
      </div>
      <div className="block mt-4">
        <TechDetails tech={tech} />
      </div>
    </div>
  );
};
export default Technology;
