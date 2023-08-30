import React from 'react'
import style from './OneQuote.module.css'

const Quote = (props) => {
    return (
        <div style={{flexWrap: "wrap"}} className={style.item}>
            <img
                src={props.img}/>
            <div style={{paddingTop: 40}}>
                <div style={{margin: 10}}>
                    "{props.text}"
                </div>
                <div style={{margin: 10}}>
                    - {props.author}
                </div>
            </div>
        </div>
    )
}

export default Quote;
