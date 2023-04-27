import React from "react";
import { Route, Routes, useLocation, useParams, } from "react-router-dom";
import HostNavBar from "./components/layout/HostNavBar";

import { About, Home } from "./routes/pages";
import { DashBoard, Income, Reviews } from "./routes/pages/Host";

import LayOut from "./components/layout/LayOut";
import { VanDetails, Vens } from "./routes/pages/vens/";
import SubVens  from "./routes/pages/SubNaVans/Vens";
import SubVensDetails from "./routes/pages/SubNaVans/SunVensDetails";



 function App() {
  
  return (
    <React.Fragment>
        <Routes>
        <Route element={ <LayOut/>}>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />

            <Route path="/host" element={<HostNavBar/>}>
              <Route index element={<DashBoard/>}/>
              <Route path="review" element={<Reviews/>}/>
              <Route path="income" element={<Income/>}/>
              <Route path="vans" element={<SubVens/>}/>
              <Route path="vans/:id" element={<SubVensDetails />}/>
            </Route>

          <Route path="vens" element={<Vens />}/>
          <Route path="/vens/:id" element={<VanDetails/>}/>
      </Route>
        </Routes>
      
    </React.Fragment>
    );
}

export default App;


