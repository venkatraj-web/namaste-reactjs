import React from "react";
import ReactDOM from "react-dom/client";

import { useState } from "react";

/**
 *
 * <div id="parent">
 *      <div id="child">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * <div id="child2">
 *         <h1>I'm h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tagss"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tags"),
//   ]),
// ]);

//JSX

const Title = () => (
  <h1 className="bg-red-400 text-blue-300" id="master">
    Master
  </h1>
);

const HeadTile = function () {
  const [name, setname] = useState("venkat from state variable!");
  return (
    <div id="box">
      {Title()}
      <Title />
      <Title></Title>
      <div>
        {name} <br />
        <span
          onClick={() => {
            setname("podangu!!");
            console.log("triggered!");
          }}
        >
          change name
        </span>
      </div>
    </div>
  );
};

const dummy = <h1>venkatraj learning reactjs! </h1>;

console.log(dummy); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadTile />);
