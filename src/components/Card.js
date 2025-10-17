
const Card = (props) => {
    const { resData } = props;
  
    const restaurantName = resData?.info?.name || "No Name Available";
    const cuisines = resData?.info?.cuisines?.join(", ") || "No Cuisines Available";
    const imgSrc = resData?.info?.cloudinaryImageId || "No Image Available";
    const avgRating = resData?.info?.avgRating || 0; 
    const fullStars = Math.floor(avgRating); 
    const hasHalfStar = avgRating % 1 >= 0.5; 
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); 

  
    // Create an array of star components
    const starIcons = [
      ...Array(fullStars).fill(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.392.215-.858-.161-.787-.592l.9-5.275-3.847-3.22c-.322-.27-.155-.74.283-.74h5.288l2.167-4.951c.185-.429.804-.429.99 0l2.167 4.95h5.288c.438 0 .605.47.283.74l-3.847 3.22.9 5.275c.071.431-.396.807-.787.592L8 12.347l-4.388 3.096z"/></svg>), // Full stars
      ...(hasHalfStar ? [<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16"><path d="M8 12l-3.668 2.028.698-4.076L1 6.928l4.149-.603L8 2l2.851 4.325 4.149.603-3.03 3.024.698 4.075L8 12z"/></svg>] : []), // Half star (if applicable)
      ...Array(emptyStars).fill(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16"><path d="M8 12l-3.668 2.028.698-4.076L1 6.928l4.149-.603L8 2l2.851 4.325 4.149.603-3.03 3.024.698 4.075L8 12z"/></svg>), // Empty stars
    ];
    return (
      <div className="card" style={{ width: "16rem", padding: "10px", margin: "20px" }}>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imgSrc}`}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "180px" }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bold" }}>
            {restaurantName}
          </h5>
          <p className="card-text">
            {cuisines}
          </p>
          <div className="display-flex">
            <a href="#" className="btn btn-primary">
              VISIT NOW!
            </a>
            <div>
              {starIcons}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;