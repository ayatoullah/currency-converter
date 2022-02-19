import React from "react";
import Option from "../Option/Option";

const Select = (props) => {
  const { rates, selectedCurrency, changeCurrencyHandler, disabled } = props;

  return (disabled) ? (
    <select value={selectedCurrency} onChange={changeCurrencyHandler} disabled>
      {rates && rates.map((rate) => <Option value={rate}></Option>)}
    </select>
  ) : (
    <select value={selectedCurrency} onChange={changeCurrencyHandler}>
      {rates && rates.map((rate, index) => <Option value={rate}></Option>)}
    </select>
  );
};

export default Select;
