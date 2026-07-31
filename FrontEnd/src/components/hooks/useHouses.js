import { useEffect, useState } from "react";
import loadingStatus from "./loadingStatus";

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

  useEffect(() => {
    const fetchHouses = async () => {
      setLoadingState(loadingStatus.isLoading);
      try {
        const response = await fetch("http://localhost:5000/house");
        const houses = await response.json();
        setHouses(houses);
        setLoadingState(loadingStatus.loaded);
      } catch {
        setLoadingState(loadingStatus.hasErrored);
      }
    };
    fetchHouses();
  }, []);

  return { houses, setHouses, loadingState };
};

export default useHouses;
