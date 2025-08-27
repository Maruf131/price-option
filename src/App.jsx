
import "./App.css";
import LinkChart from "./components/linkChart/LinkChart";

// import DaisyNav from "./components/daisyNav/DaisyNav";
import Navbar from "./components/navbar/Navbar";
import PriceOptions from "./components/priceOptions/PriceOptions";

function App() {
  return (
    <>
    {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LinkChart></LinkChart>

    </>
  );
}

export default App;
