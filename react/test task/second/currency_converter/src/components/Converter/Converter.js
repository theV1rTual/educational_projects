import React, {useEffect, useState} from "react";
import {render} from 'react-dom';
import axios from 'axios';
import classes from './Converter.module.css'

const Converter = () => {
    const [first, setFirst] = useState("AUD");
    const [second, setSecond] = useState("USD");
    const [rate, setRate] = useState([]);

    const getRate = (first, second) => {
        axios({
            method: "GET",
            url: `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=0b00b1ad315a780d103f`
        })
            .then((response) => {
                console.log(response.data);

                setRate(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    };
    return(
        <div className={classes.container}>
            <div>
                Currency Converter
            </div>
            <div>
                <div>
                    1 {first} = {rate[`${first}_${second}`]} {second}
                </div>
                <br />
                <input className={classes.input} type="text" value={first} onChange={(e) => setFirst(e.target.value)} />
                <input className={classes.input} type="text" value={second} onChange={(e) => setSecond(e.target.value)} />
                <button className={classes.button} onClick={() => {getRate(first, second)}}>Convert</button>
            </div>
        </ div>
    );
}

export default Converter;