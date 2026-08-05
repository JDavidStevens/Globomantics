import HouseList from "./HouseList";
import navValues from "./navigation/navValues";
import House from "./House";

const ComponentPicker = ({ currentNavLocation }) => {
  switch (currentNavLocation) {
    case navValues.home:
      return <HouseList />;
    case navValues.house:
      return <House />;
    default:
      return (
        <h3>No component for navigation value {currentNavLocation} found</h3>
      );
  }
};

export default ComponentPicker;
