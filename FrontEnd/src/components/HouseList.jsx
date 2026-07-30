import { useEffect, useState } from "react";
import HouseRow from "./HouseRow";
import AddHouse from "./AddHouse";

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("http://localhost:5000/house");
      const houses = await response.json();
      setHouses(houses);
    };
    fetchHouses();
  }, []);

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <HouseRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
      <AddHouse houses={houses} setHouses={setHouses}></AddHouse>
    </>
  );
};

export default HouseList;
