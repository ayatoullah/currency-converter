import React from "react";
import "./Converter.css";
import Select from "../Select/Select";

const Converter = (props) => {
  const { onChange, onSelect, rates, selectedCurrency, amount, disabled } = props;
  const changeInputHandler = (e) => onChange(e.target.value);
  const changeCurrencyHandler = (e) => onSelect(e.target.value);
  return (
    <div className="converter">
      <input type="number" value={amount} onChange={changeInputHandler} />
      <Select
        rates={rates}
        selectedCurrency={selectedCurrency}
        changeCurrencyHandler={changeCurrencyHandler}
        disabled={disabled}
      />
    </div>
  );
};

export default Converter;
