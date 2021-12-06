import React from "react";

const Loading = () => {
  return (
    <main className="row justify-content-center fs-1 mt-5">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </main>
  );
};

export default Loading;
