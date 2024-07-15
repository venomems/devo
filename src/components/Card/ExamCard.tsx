import React from "react";
import {LangCard} from "./LangCard";
import {DescCard} from "./DescCard";
import {TimeCard} from "./TimeCard";
import {ButtonsCard} from "./ButtonsCard";

export function ExamCard() {
    return (
        <section className="card__exam">
            <LangCard/>
            <DescCard/>
            <div className="card__footer">
                <TimeCard/>
                <ButtonsCard/>
            </div>
        </section>
    )
}