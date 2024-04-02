import { useState, useEffect } from "react";
import PuppyCards from "./PuppyCards";
import SinglePuppy from './SinglePuppy'
import { Route, Routes} from "react-router-dom";

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT`;

const AllPuppies = () => {
  const [needsUpdate, setNeedsUpdate] = useState(true);
  const [puppyList, setPuppyList] = useState([]);

  useEffect(() => {
    if (needsUpdate) {
      const fetchPuppies = async () => {
        try {
          const result = await fetch(API_URL + `/players`);
          const jsonResult = await result.json();
          setPuppyList(jsonResult.data.players);
        } catch (error) {
          alert("Error fetching puppies!");
        }
      };
      fetchPuppies();
      setNeedsUpdate(false);
    }
  }, []);
  console.log(puppyList);
  return (
    <>
      <Routes>
        <Route path="/" element={<PuppyCards puppyList={puppyList} setPuppyList={setPuppyList} />}></Route>
        <Route path='/:puppyId' element ={<SinglePuppy puppyList={puppyList}/>}></Route>
      </Routes>
    </>
  );
};

export default AllPuppies;
