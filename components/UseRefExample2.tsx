import { NextPage } from "next";
import { useState, useRef, useEffect } from "react";

const UseRefExample2: NextPage = () => {
  const [name, setName] = useState("");
  const inputElement = useRef<HTMLInputElement | null>(null);

  const focus = () => {
    inputElement.current?.focus();
  };

  return (
    <div className="m-5 grid md:grid-cols-2 border border-white rounded-lg">
      <div className="flex flex-col text-center md:border-r">
        <h2 className="text-2xl font-semibold mt-5 mb-3">
          Accessing DOM Elements
        </h2>
        <p className="text-justify p-3 mb-3">
          &emsp; In general, we want to let React handle all DOM manipulation.
          But there are some instances where useRef can be used without causing
          issues. <br /> &emsp; In React, we can add a ref attribute to an
          element to access it directly in the DOM.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-3">
        <input
          placeholder="Type your name here"
          className="p-2 mb-5 rounded-lg"
          ref={inputElement}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={focus}
        >
          Focus Input
        </button>
      </div>
    </div>
  );
};

export default UseRefExample2;
