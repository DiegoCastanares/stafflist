import "./App.css";
import React, { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main className="container">
      <h2>Our Staff</h2>
      <List people={people} />
      <button className="btn" onClick={() => setPeople(data)}>
        View All
      </button>
    </main>
  );
}

export default App;
