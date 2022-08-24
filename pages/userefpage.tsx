import { NextPage } from "next";
import Router from "next/router";
import React from "react";
import UseRefExample from "../components/UseRefExample";
import UseRefExample2 from "../components/UseRefExample2";
import UseRefExample3 from "../components/UseRefExample3";

const useRefPage: NextPage = () => {
  return (
    <div className="my-10">
      <h2 className="text-4xl text-center text-orange-500 font-semibold p-2">
        useRef Hook
      </h2>
      <a
        className="text-2xl p-5 underline text-blue-400 cursor-pointer"
        onClick={() => Router.push("/")}
      >
        &larr; Go Back
      </a>
      <UseRefExample />
      <UseRefExample2 />
      <UseRefExample3 />
    </div>
  );
};

export default useRefPage;
