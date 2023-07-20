import "./App.css";
import LineChart from "./Component/LineChart/LineChart";
import Personaldetail from "./Component/Personaldetail/Personaldetail";
import Dummydata from "./Component/Data/Data";
import { useState } from "react";
import Table from "./Component/Table/Table";
import Toggle from "./Component/Toggle/Toggle";
function App() {
  const [medalData, setMedalData] = useState({
    labels: Dummydata.map((data) => data.Year),
    datasets: [
      {
        label: "Medal won",
        data: Dummydata.map((data) => data.Medals),
      },
    ],
  });
  const [toogle, setToggle] = useState(true);

  function HandleTogle() {
    setToggle(!toogle);
  }
  return (
    <div className="main_container">
      <Personaldetail />
      <Toggle clicktogle={HandleTogle} />
      {toogle ? (
        <LineChart chartData={medalData} />
      ) : (
        <Table userData={Dummydata} />
      )}
    </div>
  );
}

export default App;
