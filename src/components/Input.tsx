import React, {useEffect} from "react";
import {Button} from "./Button";
import {useInput} from "./hook/input";
import {useDebounce} from "./hook/debounce";

export function Input() {
    const input = useInput("");

    const debounced = useDebounce(input.value, 400);

    useEffect(() => {
        if (debounced.length > 3) {
            // request
            // axios.get(url)
        }

        console.log('debounced', debounced);
    }, [input.value])

    return (
        <div className="header__menu-search">
            <input
                className="header__menu-input"
                type="text"
                {...input}
            />
            <button className="header__menu-button">
                <img className="header__button-img" src="/public/search.svg" alt={'button'}/>
            </button>
        </div>
    )
}