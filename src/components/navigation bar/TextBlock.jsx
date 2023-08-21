import style from './TextBlock.module.css'
import React from "react";
import NavItem from "./NavItem";

const textBlock = () => {
    return (
        <div>
            <div className ={style.textblock}>
                <NavItem text={'hahah'}/>
                <NavItem text={'sshit'}/>
                <NavItem text={'your mother'}/>
                <NavItem text={'butthole'}/>
                <NavItem text={'asjhdad'}/>
                <NavItem text={'tetetee'}/>
                <NavItem text={'bububu'}/>
            </div>
        </div>
    )
}

export default textBlock;