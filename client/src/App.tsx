import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <div>
      <NavigationBar />
      <Counter />
    </div>
  );
}

export default App;
