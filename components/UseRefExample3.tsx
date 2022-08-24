import { NextPage } from "next";
import { useState, useRef, useEffect } from "react";

const UseRefExample2: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <div className="m-5 grid md:grid-cols-2 border border-white rounded-lg">
      <div className="flex flex-col text-center md:border-r">
        <h2 className="text-2xl font-semibold mt-5 mb-3">
          Tracking State Changes
        </h2>
        <p className="text-justify p-3 mb-3">
          &emsp; The useRef Hook can also be used to keep track of previous
          state values. This is because we are able to persist useRef values
          between renders. <br />
          &emsp; This time we use a combination of <u>useState</u>,{" "}
          <u>useEffect</u>, and <u>useRef</u> to keep track of the previous
          state. In the <u>useEffect</u>, we are updating the <u>useRef</u>{" "}
          current value each time the inputValue is updated by entering text
          into the input field.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-3">
        <input
          className="p-2 mb-5 rounded-lg"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something here"
        />
        <p className="text-justify mt-5">Current Value: {inputValue}</p>
        <p className="text-justify mt-2">
          Previous Value: {previousInputValue.current}
        </p>
      </div>
    </div>
  );
};

export default UseRefExample2;
