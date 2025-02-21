import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { increase, selectCountValue } from "./features/counter/counterSlice";

function App() {
  // useDispatch
  const dispatch = useDispatch();
  // useSelect
  const countValue = useSelector(selectCountValue);
  console.log("countValue", countValue);
  return (
    <>
      <h1 className="text-blue-900 text-3xl font-bold">{countValue}</h1>
      <button
        onClick={() => dispatch(increase())}
        className="bg-blue-900 py-2.5 px-5 rounded-md text-white"
      >
        Count Up
      </button>
    </>
  );
}

export default App;
