import React from "react";
import {Link} from "react-router-dom";

export function User() {
    return (
        <Link to="/auth">
            <div className="header__menu-user">
                <img src="user.svg" alt={'userStatus'} />
                <span className="header__user">Александр</span>
            </div>
        </Link>
    )
}