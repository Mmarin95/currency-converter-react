import React from "react";

export default function CurrencyRow({ currencyOptions }) {
  return (
    <div>
      <input className="input" type="number"></input>
      <select size="1">
        {currencyOptions.map((option) => {
          return <option key={option} value={option}>
            {option}
          </option>;
        })}
      </select>
    </div>
  );
}
