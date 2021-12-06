import "./App.css";
import Loading from "./Loading";
import Tours from "./Tours";
import Data from "./Data";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState(Data);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const refreshTours = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTours(Data);
    }, 1000);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main className="row justify-content-center">
        <div className="fs-1 fw-bolder text-center my-4">No mas playas</div>
        <button className="btn btn-success col-5 mb-3" onClick={refreshTours}>
          Cargar de nuevo
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
