import React from "react";
import NavBar from "./NavBar.tsx";
import LoanForm from "./LoanForm.tsx";
import "./App.css"; // Global styles for layout

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="main-content">
        <LoanForm />
      </div>
    </div>
  );
};

export default App;
