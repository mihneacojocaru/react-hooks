import { NextPage } from "next";
import { useState, useEffect, useCallback, useRef } from "react";

interface ListInterface {
  getItems: Function;
}

const List: React.FC<ListInterface> = ({ getItems }) => {
  const [items, setItems] = useState([]);

  const renderRef = useRef(0);

  useEffect(() => {
    setItems(getItems());
    renderRef.current++;
    console.log("Updating items");
  }, [getItems]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-5">
        Numbers were updated{" "}
        <span className="text-orange-500 text-xl">{renderRef.current}</span>{" "}
        times
      </p>
      <div className="grid grid-cols-3 my-5">
        {items.map((item) => (
          <div
            className="px-5 mx-3 text-xl bg-white rounded-full text-orange-500"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const UseRefExample2: NextPage = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  //+++ With useCallback

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  //+++ Without useCallback

  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

  const theme = {
    backgroundColor: dark ? "#f1f900" : "#1800f9",
    color: dark ? "#000" : "#fff",
    borderRadius: "10px 0 0 10px",
  };

  return (
    <div className="m-5 grid md:grid-cols-2 border border-white rounded-lg">
      <div className="flex flex-col text-center md:border-r" style={theme}>
        <h2 className="text-2xl font-semibold mt-5 mb-3">
          useCallback Example
        </h2>
        <p className="text-justify p-3 mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
          voluptatibus?
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-3">
        <input
          className="p-2 rounded-lg"
          type="number"
          placeholder="Type a number"
          value={number}
          onChange={(e: any) => {
            setNumber(parseInt(e.target.value));
          }}
        />
        <p className="text-justify mt-5">Current Number: {number}</p>
        <List getItems={getItems} />
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => {
            setDark((prev) => !prev);
          }}
        >
          Toogle Theme
        </button>
      </div>
    </div>
  );
};

export default UseRefExample2;
