import React, { useState } from 'react'
import s from './Paginator.module.css'

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChange, portion = 20 }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let countPortions = Math.ceil(pagesCount / portion);
    let [currentPortion, setCurrentPortion] = useState(1);
    let leftLimit = (currentPortion - 1) * portion + 1;
    let rightLimit = currentPortion * portion;

    return (
        <div>
            <button
                disabled={currentPortion === 1 && true}
                onClick={() => { setCurrentPortion(currentPortion - 1) }}> {"<<"} </button>

            {pages.filter(p => p >= leftLimit && p <= rightLimit)
                .map(p => {
                    return <span className={currentPage === p && s.selectedPage}
                        key={p}
                        onClick={(e) => { onPageChange(p) }}> {p} </span>
                })}

            <button
                disabled={countPortions === currentPortion && true}
                onClick={() => { setCurrentPortion(currentPortion + 1) }}> {">>"} </button>

        </div>
    )
}

export default Paginator;