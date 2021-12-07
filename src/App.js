import "./App.css";
import Loading from "./Loading";
import Beaches from "./Beaches";
import Data from "./Data";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [beaches, setBeaches] = useState(Data);

  const removeBeach = (id) => {
    const newBeaches = beaches.filter((beach) => beach.id !== id);
    setBeaches(newBeaches);
  };

  const refreshBeaches = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setBeaches(Data);
    }, 1000);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (beaches.length === 0) {
    return (
      <main className="row justify-content-center">
        <div className="fs-1 fw-bolder text-center my-4">No mas playas</div>
        <button
          className="btn btn-outline-success col-5 mb-3"
          onClick={refreshBeaches}
        >
          Cargar de nuevo
        </button>
      </main>
    );
  }
  return (
    <main>
      <Beaches beaches={beaches} removeBeach={removeBeach} />
    </main>
  );
}

export default App;
