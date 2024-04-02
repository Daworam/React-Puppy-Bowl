import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
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
      <h1>{singlePup.name}</h1>
      <h2>{singlePup.id}</h2>
      <img src={singlePup.imageUrl} className="pupImage"/>
      <h2>{singlePup.breed}</h2>
      <h2>{singlePup.status}</h2>
      <button onClick={()=>{navigate('/')}}>Back</button>
    </>
  )
}
export default SinglePuppy;
