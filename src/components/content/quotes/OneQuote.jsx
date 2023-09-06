import React from 'react'
import style from './OneQuote.module.css'

const Quote = (props) => {
    return (
        <div style={{flexWrap: "wrap"}} className={style.item}>
            <img
                src={props.img}/>
            <div className={style.textblock}>
                <div className={style.text}>
                    "{props.text}"
                </div>
                <div className={style.author}>
                    - {props.author}
                </div>
            </div>
        </div>
    )
}

export default Quote;
