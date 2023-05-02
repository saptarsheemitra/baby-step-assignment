import React from "react";

function Home({ children }) {
  return (
    <div className="mt-5 d-flex flex-column justify-content-center">
      {children}
    </div>
  );
}

export default Home;
