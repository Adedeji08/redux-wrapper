import { increment } from "@/store/CounterSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const IncrementCounter = () => {
  const dispatch = useDispatch()
   const counter = useSelector((state) => state.counter.count)
  return (
    <div>
      <h1>
        Counter: <span>{counter}</span>
      </h1>
      <button onClick={() => dispatch(increment())}>Add To Count</button>
    </div>
  )
}

export default IncrementCounter
