import { NextPage } from "next";
import { useState, useRef, useEffect } from "react";

const UseRefExample: NextPage = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current++;
  }, [name]);
  return (
    <div className="m-5 grid md:grid-cols-2 border border-white rounded-lg">
      <div className="flex flex-col text-center md:border-r">
        <h2 className="text-2xl font-semibold mt-5 mb-3">
          Does Not Cause Re-renders
        </h2>
        <p className="text-justify p-3 mb-3">
          &emsp; The useRef Hook allows you to persist values between renders.
          It can be used to store a mutable value that does not cause a
          re-render when updated. It can be used to access a DOM element
          directly. <br /> &emsp; If we tried to count how many times our
          application renders using the useState Hook, we would be caught in an
          infinite loop since this Hook itself causes a re-render. To avoid
          this, we can use the useRef Hook.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-3">
        <input
          placeholder="Type your name here"
          className="p-2 mb-5 rounded-lg"
          onChange={(e) => setName(e.target.value)}
        />
        <p className="text-2xl mb-5 flex-wrap">
          My name is <span className="text-blue-300">{name}</span>
        </p>
        <p className="text-lg">
          I've rendered{" "}
          <span className="text-orange-500">{renderCount.current}</span> times
        </p>
      </div>
    </div>
  );
};

export default UseRefExample;
