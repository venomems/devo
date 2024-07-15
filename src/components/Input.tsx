import React from "react";
import {Button} from "./Button";

export function Input() {
    return (
        <div className="header__menu-search">
            <input className="header__menu-input"/>
            <button className="header__menu-button">
                <img className="header__button-img" src="/public/search.svg" alt={'button'}/>
            </button>
        </div>
    )
}