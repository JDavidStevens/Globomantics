import Banner from "./components/Banner";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundry";
import { useCallback, useState } from "react";
import navValues from "./components/navigation/navValues";
import HouseList from "./components/HouseList";
import House from "./components/House";
import navigationContext from "./components/navigation/navigationContext";
import ComponentPicker from "./components/ComponentPicker";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback="Something went wrong!">
        <Banner>
          <div>Providing houses all over the world</div>
        </Banner>
        <Routes>
          <Route index element={<HouseList />} />
          <Route path="house" element={<House />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
