import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import CarouselComponent from "./CarouselComponent";
import Card from "./Card";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.939722256011164&lng=77.6130171974757&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const apiAdress = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurant(apiAdress);
    setOriginalList(apiAdress); 
  };
 
  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <>
      <div className="body">
        <CarouselComponent />
        <h2 className="Text">
          Restaurants with online food delivery in Bangalore
        </h2>
        <div className="display-flex options ">
          <button className="filter">Filter</button>
          <button className="filter">
            <li className="nav-item dropdown abc">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </a>
            </li>
          </button>
          <button className="filter">Fast Delivery</button>
          <button className="filter">New on Swiggy</button>
          <button
            className="filter"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setListOfRestaurant(filteredList);

            }}
          >
            Ratings 4.5+
          </button>
          <button className="filter">Pure Veg</button>
          <button 
            className="filter"
            onClick={() => setListOfRestaurant(originalList)}
          >
          Reset
          </button>

        </div>

        <div
          className="card-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {listOfRestaurants.map((restaurant) => (
            <Card key={restaurant.info.id} resData={restaurant} />
          ))}
          
        </div>
      </div>
    </>
  );
};

export default Body;
