import React from "react";

export default function CurrencyRow({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
}) {
  console.log("amount", amount);
  return (
    <div>
      <input
        className="input"
        type="number"
        value={amount}
        onChange={onChangeAmount}
      ></input>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
