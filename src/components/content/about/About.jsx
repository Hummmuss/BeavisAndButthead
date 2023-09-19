import React from 'react';
import style from './About.module.css'

const About = () => {
    return (
        <div className={style.about}>
            <a className={style.heading}>About</a>
            <div className={style.paragraph}>
                "Beavis and Butt-Head," an unconventional animated series created by Mike Judge, first appeared on MTV
                in 1993.
                It followed the adventures of two dim-witted teenagers who offered snarky commentary on music videos and
                engaged in mischievous pranks.
                The show's crude humor, unique character designs, and social commentary on suburban America made it a
                defining pop-culture icon of the '90s.
            </div>
            <div className={style.paragraph}>
                The duo's antics exposed the hypocrisy and absurdity of adult behavior, leading to both admiration and
                criticism.
                Despite facing controversies, the show attracted a dedicated fan base and spawned the spin-off series
                "Daria" and a feature film,
                "Beavis and Butt-Head Do America." Celebrated for its unapologetic humor, "Beavis and Butt-Head" remains
                an unforgettable part of
                1990s pop culture.
            </div>
        </div>
    )
}

export default About;