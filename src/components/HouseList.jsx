import { useState } from "react";
import HouseRow from "./HouseRow";

const houseListings = [
  {
    id: 1,
    address: "221B Baker St, London",
    country: "United Kingdom",
    price: 900000,
  },
  {
    id: 2,
    address: "742 Evergreen Terrace, Springfield",
    country: "United States",
    price: 500000,
  },
];

const HouseList = () => {
  const [houses, setHouses] = useState(houseListings);
  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "4 Privet Dr, Little Whinging, Surrey",
        country: "United Kingdom",
        price: 1000000,
      },
    ]);
  };
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
      <button onClick={addHouse} className="btn btn-primary">
        Add
      </button>
    </>
  );
};

export default HouseList;
