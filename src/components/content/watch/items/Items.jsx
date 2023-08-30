import React from "react";
import Item from './Item'
import style from './Items.module.css'

const Items = () => {
    return (
        <div className={style.container}>
            <Item link = "/content/episode1" img = "https://www.denofgeek.com/wp-content/uploads/2020/07/beavis-and-butt-head-mtv.jpg?resize=768%2C432" number="1"/>
            <Item link = "/content/episode2" img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtky1MbC6Yx0qJF4qDHl-VsuEvWknI5XHoQ&usqp=CAU" number="2"/>
            <Item link = "/content/episode3" img = "https://content.internetvideoarchive.com/content/hdphotos/13997/013997/013997_527x395_637898026687278814.jpg" number="3"/>
            <Item link = "/content/episode4" img = "https://cdn-p.smehost.net/sites/2ed48fdcc3904f548299cd86d78e9885/wp-content/uploads/2023/03/beavis_butthead-1000x515.png" number="4"/>
            <Item link = "/content/episode5" img = "https://www.starburstmagazine.com/wp-content/uploads/2022/07/Beavis-and-Butthead-Hollywood.jpg" number="5"/>
            <Item link = "/content/episode6" img = "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/beavis-hed-fcfa4be7366e9734e4aa732c281a668f.jpg" number="6"/>
            <Item link = "/content/episode7" img = "https://images.paramount.tech/uri/mgid:arc:imageassetref:comedycentral.com:9614852b-7d1b-415f-a787-654fb27a6981?quality=0.7&gen=ntrn&legacyStatusCode=true" number="7"/>
            <Item link = "/content/episode8" img = "https://exclaim.ca/images/beavis-butthead.jpg" number="8"/>
        </div>
    )
}

export default Items;