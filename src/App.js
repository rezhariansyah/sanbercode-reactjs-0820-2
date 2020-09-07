import React from "react";
import Tugas9 from "./Tugas-9/Tugas9";
import Tugas10 from "./Tugas-10/Tugas10";
import data from "./Tugas-10/data";
import Timer from "./Tugas-11/Timer";

function App() {
  return (
    <>
      <Tugas9 />
      <Tugas10 data={data} />
      <Timer />
    </>
  );
}

export default App;
