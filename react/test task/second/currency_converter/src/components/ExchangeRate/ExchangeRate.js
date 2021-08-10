import React, {useEffect, useState} from "react";
import {render} from 'react-dom';
import axios from 'axios';
import classes from './ExchangeRates.module.css';

const Converter = () => {

    const [currency, setCurrency] = useState("");
    const [dollarValue, setDollarValue] = useState("");
    const [euroValue, setEuroValue] = useState("")
    const [rubles, setRublesValue] = useState("");

    const getRates = (currency) => {
        axios({
            method: "GET",
            url: `https://free.currconv.com/api/v7/convert?q=${currency}_USD&compact=ultra&apiKey=0b00b1ad315a780d103f`
        })
            .then((response) => {
                console.log(response.data);
                setDollarValue(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
        axios({
            method: "GET",
            url: `https://free.currconv.com/api/v7/convert?q=${currency}_EUR&compact=ultra&apiKey=0b00b1ad315a780d103f`
        })
            .then((response) => {
                console.log(response.data);
                setEuroValue(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
        axios({
            method: "GET",
            url: `https://free.currconv.com/api/v7/convert?q=${currency}_RUB&compact=ultra&apiKey=0b00b1ad315a780d103f`
        })
            .then((response) => {
                console.log(response.data);
                setRublesValue(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

        
    };

    return(
        <div className={classes.container}>
            <div>
                Exchange Rate
            </div>
            <div className={classes.rates}>
                <div>
                    1 {currency} = {dollarValue[`${currency}_USD`]} USD
                    <br />
                    1 {currency} = {euroValue[`${currency}_EUR`]} EUR
                    <br />
                    1 {currency} = {rubles[`${currency}_RUB`]} RUB

                </div>
                <input className={classes.input} type="text" value={currency} onChange= {(e) => setCurrency(e.target.value)} />
                <button className={classes.button} onClick={() => {getRates(currency)}}>Show rates</button>
            </div>
        </ div>
    );
}

export default Converter;