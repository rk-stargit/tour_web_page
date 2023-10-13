import React, {useState} from "react";

function Card({id, image, info, name, price, removeTour, onlyTour}) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore
    ? `${info}....`
    : `${info.substring(0, 190)}....`;
  function readmoreHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className="card">
      <img src={image} className="image" />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>
      <div className="btn-style">
        <button className="btn-color" onClick={() => onlyTour(id)}>
          Interested
        </button>
        <button className="btn-color" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}
export default Card;
