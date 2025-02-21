import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";

function App() {
  // let value = 0;
  // [Current-state, setState] = useState()
  const [count, setCount] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  //1. useEffect(<function>, <dependency>)

  useEffect(() => {
    console.log("Called");
  }, []);

  console.log("Outside useEffect");
  return (
    <>
      <h1 className="text-blue-900 text-3xl font-bold">{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-900 py-2.5 px-5 rounded-md text-white"
      >
        Count Up
      </button>
      <button
        onClick={() => setIsDeleted(!isDeleted)}
        className="bg-blue-900 py-2.5 px-5 rounded-md text-white"
      >
        {isDeleted && "Deleted"}
        {!isDeleted && "Not delete"}
      </button>
      {/* <ButtonAdd /> */}
    </>
  );
}

export default App;
