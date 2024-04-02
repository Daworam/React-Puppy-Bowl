import "./App.css";

const PuppyCards = ({ puppyList, setPuppyList}) => {
  const API_URL_ID = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players`;

  return (
    <section className="main">
      {puppyList.map((puppy) => {
        return (
          <section key={puppy.id} className="indCard">
            <h3>{puppy.name}</h3>
            <img src={puppy.imageUrl} className="pupImage" />
            <p>{puppy.breed}</p>
            <button
              onClick={async () => {
                try {
                  const response = await fetch(`${API_URL_ID}/${puppy.id}`, {
                    method: "DELETE",
                  }); 
                } catch (error) {
                  alert("Error deleting puppy");
                }
              }}
            >Delete</button>
            <button
              className="detailsButton"
              onClick={() => {
                setPuppyList(puppy);
              }}
            >
              Click for Details!
            </button>
          </section>
          
        );
      })}
      
    </section>
  );
};

export default PuppyCards;