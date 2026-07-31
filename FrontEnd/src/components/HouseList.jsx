import { useEffect, useState, use } from "react";
import HouseRow from "./HouseRow";
import AddHouse from "./AddHouse";
import useHouses from "./hooks/useHouses";
import loadingStatus from "./hooks/loadingStatus";
import LoadingIndicator from "./loadingIndicator";
import ErrorBoundary from "./ErrorBoundry";

const HouseList = ({ selectHouse }) => {
  const { houses, setHouses, loadingState } = useHouses();

  if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />;

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
          <ErrorBoundary fallback="Error loading house rows!">
            {houses.map((h) => (
              <HouseRow key={h.id} selectHouse={selectHouse} house={h} />
            ))}
          </ErrorBoundary>
        </tbody>
      </table>
      <AddHouse setHouses={setHouses}></AddHouse>
    </>
  );
};

export default HouseList;
