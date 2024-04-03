import { useState } from "react"

const SearchBar = ({puppyList, setPuppyList}) => {

  const [searchPuppy, setSearchPuppy] = useState('');
  const [filteredPuppies, setFilteredPuppies] = useState([puppyList])

  const filterPup = (e) => {
    e.preventDefault()
    setSearchPuppy(e.target.value)
    }

  return(
    <>
      <form>
        <label>Search:
        <input type="text" placeholder="Enter Puppy Name" onChange={filterPup}/>
        </label>
      </form>
      <h1>{filteredPuppies.name}</h1>
    </>
  )

}

export default SearchBar