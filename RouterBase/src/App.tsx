import React from "react";
import { Route, Routes } from "react-router-dom";
import HostNavBar from "./components/layout/HostNavBar";

import { About, Home } from "./routes/pages";
import { DashBoard, Income, Reviews } from "./routes/pages/Host";

import HostVanNavBar from "./components/layout/HostVansNavBar";
import LayOut from "./components/layout/LayOut";
import SubVensDetails from "./routes/pages/SubNaVans/SunVensDetails";
import SubVens from "./routes/pages/SubNaVans/Vens";
import { VanDetails, Vens } from "./routes/pages/vens/";
import {
  Details,
  Photos,
  Pricing,
} from "./routes/pages/SubNaVans/HostVanNavBarChilds";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="host" element={<HostNavBar />}>
            <Route index element={<DashBoard />} />
            <Route path="review" element={<Reviews />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<SubVens />} />
              <Route path="vans/:id" element={<SubVensDetails />} >
                    <Route index element={<Details />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="photos" element={<Photos />} />
              </Route>

          </Route>
            <Route path="vens" element={<Vens />} />
              <Route path="vens/:id" element={<VanDetails />} />

        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
