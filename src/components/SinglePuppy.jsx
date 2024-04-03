import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import './App.css'
const SINGLE_API = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players`


const SinglePuppy = () => {
  const navigate = useNavigate()
  const {puppyId} = useParams();
  const [singlePup, setSinglePup] = useState([])
  
  const fetchSinglePuppy = async () =>{
    const result = await fetch(`${SINGLE_API}/${puppyId}`)
    const jsonPup = await result.json()
    setSinglePup(jsonPup.data.player)
  }
  fetchSinglePuppy()
  return(
    <>
      <div className="singleContainer">
        <h2>{singlePup.name}</h2>
        <h3>Id: {singlePup.id}</h3>
        <img src={singlePup.imageUrl} className="pupImage"/>
        <h3>Breed: {singlePup.breed}</h3>
        <h3>Status: {singlePup.status}</h3>
        <button onClick={()=>{navigate('/')}}>Back</button>
      </div>
    </>
  )
}
export default SinglePuppy;
