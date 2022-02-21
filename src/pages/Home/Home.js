import React from "react";
import Converter from "../../components/Converter/Converter";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import "./Home.css";

const Home = () => {
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [amountInfromCurrency, setAmountInfromCurrency] = useState(true);
    const [currencies, setCurrencies] = useState([]);
    const [fromAmount, setFromAmount] = useState(0);
    const [toAmount, setToAmount] = useState(0);
    let disabled = true;
    const access_key = "31f9f84f259bc772111e0fc80a326ea9";
    //let toAmount, fromAmount;
  
    useEffect(() => {
      getRates();
    }, []);
  
  
    const getRates = () => {
      fetch(
        `http://data.fixer.io/api/latest?access_key=${access_key}`
      )
        .then((responce) => responce.json())
        .then((responce) => {
          const firstCurrency = Object.keys(responce.rates)[0];
          setCurrencies([responce.base, ...Object.keys(responce.rates)]);
          setFromCurrency(responce.base);
          setToCurrency(firstCurrency);
        });
    };
  
    const handleFromAmountChange = (value) => {
      setFromAmount(value);
      setAmountInfromCurrency(true);
    };
  
    const handleToAmountChange = (value) => {
      setToAmount(value);
      setAmountInfromCurrency(false);
    };
  
    const handleSelectFromCurrency = (currency) => {
      setFromCurrency(currency);
    };
  
    const handleSelectToCurrency = (currency) => {
      setToCurrency(currency);
    };
  
    const convertCurrency = () => {
      if (fromCurrency && toCurrency) {
        fetch(
          `http://data.fixer.io/api/latest?access_key=${access_key}&base=${fromCurrency}&symbols=${toCurrency}`
        )
          .then((responce) => responce.json())
          .then((res) => {
  
            const rate = res["rates"][toCurrency];
            if (amountInfromCurrency) {
              setToAmount(fromAmount * rate);
            } else {
              setFromAmount(toAmount / rate);
            }
          });}
    };
    const [, ...otherCurrencies] = currencies;
  return (
    <div className="container">
      <div className="label">From</div>
      <Converter
        amount={fromAmount}
        selected={fromCurrency}
        rates={currencies}
        onChange={handleFromAmountChange}
        onSelect={handleSelectFromCurrency}
        disabled={disabled}
      />
      <div className="equity">=</div>
      <div>{/* <img src="./assets/images/swap.svg" alt="swap"/> */}</div>
      <div className="label">To</div>
      <Converter
        amount={toAmount}
        selected={toCurrency}
        rates={otherCurrencies}
        onChange={handleToAmountChange}
        onSelect={handleSelectToCurrency}
        disabled={!disabled}
      />
      <div>
        <Button text="Convert" onClick={convertCurrency} />
      </div>
    </div>
  );
};

export default Home;
