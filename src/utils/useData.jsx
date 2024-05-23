import { useState } from "react";
import data from "../data.json";

const useData = () => {
  const [info, setInfo] = useState(data);

  const { destinations, crew, technology } = info;

  return { destinations, crew, technology };
};
export default useData;
