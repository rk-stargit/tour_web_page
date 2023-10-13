import React from "react";
import Card from "./Card";
function Tour({tours, removeTour,onlyTour}) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Tour Destination</h2>
      </div>

      <div className="cards">
        {tours.map((tour) => {
          return (
            <Card
              key={tour.id}
              {...tour}
              removeTour={removeTour}
              onlyTour={onlyTour}></Card>
          );
        })}
      </div>
    </div>
  );
}
export default Tour;
