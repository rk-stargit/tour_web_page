import React, {useState} from "react";
import data from "./data";
import Tour from "./Component/Tour";
const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  function onlyTour(id) {
    const newTours = tours.filter((tour) => tour.id === id);
    setTours(newTours);
  }
  
  if (tours.length === 0) {
    return (
      <div className="bg">
        <div className="refresh">
          <h2>No tours Left</h2>
          <button className="btn-refresh" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Tour
        tours={tours}
        removeTour={removeTour}
        onlyTour={onlyTour}></Tour>
    </div>
  );
};

export default App;
