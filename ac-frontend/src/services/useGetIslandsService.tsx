import { useEffect, useState } from "react";
import { Service } from "../common/Service";
import { baseUrl } from "../settings";
import { TurnipIsland } from "../models/TurnipIsland";

const useGetIslandsService = () => {
  const [result, setResult] = useState<Service<TurnipIsland[]>>({
    status: "loading",
  });

  useEffect(() => {
    fetch(baseUrl + "turnipislands")
      .then((response) => response.json())
      .then((response) => {
        return setResult({ status: "loaded", payload: response });
      })
      .catch((error) => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default useGetIslandsService;
