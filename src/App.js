import { useState, useEffect } from "react";
import "./App.css";
import CurrencyRow from "./components/CurrencyRow";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        console.log(currencyOptions);
      });
  }, []);

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow currencyOptions={currencyOptions} />
      <div className="equals-symbol">=</div>
      <CurrencyRow currencyOptions={currencyOptions} />
    </>
  );
}

export default App;
