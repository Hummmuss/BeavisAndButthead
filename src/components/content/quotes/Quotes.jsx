import React from 'react';
import OneQuote from "./OneQuote";
import style from "./Quotes.module.css"

const Quotes = (props) => {
    return (
        <div  className={style.quotes}>
            <a className={style.heading}>Quotes</a>
            <div style={{marginTop: 30}}>
                {props.QuotesArray.map((quote) => (
                    <OneQuote text={quote.text} author={quote.author} img={quote.img}/>
                ))}
            </div>
        </div>
    )
}

export default Quotes;
