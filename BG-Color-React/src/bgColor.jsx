import { useState } from "react";

export default function BgColor(){

    const [color, setColor] = useState("purple");
    return (
    <>
<h1 className="bg-green-500 md:bg-red-500 lg:bg-green-500 xl:bg-yellow-300 text-center">
  hello
</h1>

<div className="w-full h-screen" style={{ backgroundColor: color }}>
  <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
    <div className="flex flex-wrap justify-center gap-3 bg-white rounded-lg px-3 py-2 shadow-lg">
      <button
        onClick={() => setColor("red")}
        className="text-white rounded-full py-1 px-4"
        style={{ backgroundColor: "red" }}
      >
        Red
      </button>
      <button
        onClick={() => setColor("Green")}
        className="text-white rounded-full py-1 px-4"
        style={{ backgroundColor: "Green" }}
      >
        Green
      </button>{" "}
      <button
        onClick={() => setColor("olive")}
        className="text-white rounded-full py-1 px-4"
        style={{ backgroundColor: "olive" }}
      >
        olive
      </button>{" "}
      <button
        onClick={() => setColor("Blue")}
        className="text-white rounded-full py-1 px-4"
        style={{ backgroundColor: "blue" }}
      >
        Blue
      </button>{" "}
      <button
        onClick={() => setColor("black")}
        className="text-white rounded-full py-1 px-4"
        style={{ backgroundColor: "black" }}
      >
        balck
      </button>
    </div>
  </div>
</div>
</>);
}
