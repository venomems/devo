import React from "react";
import {Input} from "./Input";
import {User} from "./User";
import {Button} from "./Button";

export function Navigation() {
    return (
        <div className={'header__menu'}>
            <Input/>
            <User/>
        </div>
    )
}