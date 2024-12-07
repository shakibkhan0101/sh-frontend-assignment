import React, { useState } from "react";
import Home from "./components/Home";
import AddSpecialHours from "./components/AddSpecialHours";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  // Static regular hours
  const [regularHours] = useState([
    { id: 1, day: "Monday – Thursday", openTime: "8:00 AM", closeTime: "7:45 PM" },
    { id: 2, day: "Friday", openTime: "9:00 AM", closeTime: "7:45 PM" },
    { id: 3, day: "Saturday – Sunday", openTime: "9:00 AM", closeTime: "5:45 PM" },
  ]);

  // Special hours state
  const [specialHours, setSpecialHours] = useState([
    {
      id: 1,
      date: "2024-12-25",
      openTime: "Closed",
      closeTime: null,
      message: "Christmas Holiday",
    },
  ]);

  // Function to add new special hours
  const addSpecialHour = (newSpecialHour) => {
    setSpecialHours([...specialHours, newSpecialHour]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home regularHours={regularHours} specialHours={specialHours} />}
        />
        <Route
          path="/add-special-hours"
          element={<AddSpecialHours addSpecialHour={addSpecialHour} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
