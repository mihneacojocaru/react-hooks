import { NextPage } from "next";
import Router from "next/router";
import React from "react";

import UseCallbackExample from "../components/UseCallbackExample";

const useRefPage: NextPage = () => {
  return (
    <div className="container mx-auto py-16 flex flex-1 flex-col justify-center items-center">
      <h2 className="text-4xl text-center text-orange-500 font-semibold p-2">
        useCallback Hook
      </h2>
      <a
        className="text-2xl p-5 underline text-blue-400 cursor-pointer"
        onClick={() => Router.push("/")}
      >
        &larr; Go Back
      </a>
      <div className="grid m-5 text-xl">
        <p className="my-2">
          The React useCallback Hook returns a memoized callback function.{" "}
        </p>
        <p className="mb-2">
          Think of memoization as caching a value so that it does not need to be
          recalculated.
        </p>
        <p className="mb-2">
          This allows us to isolate resource intensive functions so that they
          will not automatically run on every render.
        </p>

        <p className="mb-2">
          The useCallback Hook only runs when one of its dependencies update.
          This can improve performance. &nbsp;
        </p>
        <p>
          <mark className="bg-orange-100">
            <i>useMemo</i> returns the result of the function and{" "}
            <i>useCallback</i> returns the whole function
          </mark>
        </p>
      </div>
      <UseCallbackExample />
    </div>
  );
};

export default useRefPage;
