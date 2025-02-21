import React from "react";
import { useSelector } from "react-redux";
import { selectCountValue } from "../../features/counter/counterSlice";

export default function Product() {
  const countValue = useSelector(selectCountValue);

  console.log("countValue", countValue);

  return <div>{countValue}</div>;
}
