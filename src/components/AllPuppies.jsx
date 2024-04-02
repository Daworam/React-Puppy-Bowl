import { useState, useEffect } from "react";
import PuppyCards from "./PuppyCards";
import AddPlayerForm from "./AddPlayerForm";
import SinglePuppy from "./SinglePuppy";

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
  console.log(puppyList)
  return (
    <>
      {puppyList.length ? (
        <>
          <AddPlayerForm />
          <PuppyCards puppyList={puppyList} setPuppyList={setPuppyList}/>
        </>
      ) : (
        <SinglePuppy puppyList={puppyList} setPuppyList={setPuppyList}/>
      )}
    </>
  );
};

export default AllPuppies;
