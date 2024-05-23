import { useState } from "react";
import useData from "../utils/useData";
import CrewDetails from "./CrewDetails";

const Crew = () => {
  const { crew } = useData();
  const [select, setSelect] = useState("Commander");
  let member = crew.find((m) => m.role.toUpperCase() === select.toUpperCase());

  return (
    <div className=" mx-auto home-height pt-8 mt-2 flex items-center flex-col">
      {/* Links */}
      <div className="flex space-x-6 md:space-x-10 border-b border-white pb-2">
        {crew.map((member, index) => {
          return (
            <h2
              className="hover:cursor-pointer font-bold hover:border-b border-b-red-400 text-xs"
              onClick={() => setSelect(member.role.toUpperCase())}
              key={index}
            >
              {member.role}
            </h2>
          );
        })}
      </div>
      <div className="block mt-4 w-[80%] mx-auto">
        <CrewDetails member={member} />
      </div>
    </div>
  );
};
export default Crew;
