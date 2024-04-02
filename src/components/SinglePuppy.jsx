const SinglePuppy = ({ puppyList, setPuppyList }) => {
  return(
    <>
      <h1>{puppyList.name}</h1>
      <h2>{puppyList.id}</h2>
      <img src={puppyList.imageUrl}/>
      <h2>{puppyList.breed}</h2>
      <h2>{puppyList.status}</h2>
      <button>Back</button>
    </>
  )
}
export default SinglePuppy;


//potentially have to add another useEffect to fetch the
//puppies from the api in order to setPuppyList back to original
//so puppyList will show back up 

//REACT ROUTER