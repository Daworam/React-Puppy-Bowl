import AllPuppies from "./components/AllPuppies";

import { Route, Routes } from "react-router-dom";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT`;

function App() {
  return (
    <>
      <h1>Puppy Bowl</h1>
      <AllPuppies />
    </>
  );
}

export default App;
