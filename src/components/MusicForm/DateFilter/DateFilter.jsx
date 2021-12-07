import React, {useEffect} from 'react';
import Music from "../../../store/Music";
import {observer} from "mobx-react";

const DateFilter = observer(({durationFilter, setDateFilter, dateFilter, phoneFilter}) => {
    useEffect(
        () => {
            Music.filter(null, null, null)
            switch (dateFilter) {
                case "allTime":
                    Music.filter(+durationFilter, phoneFilter, dateFilter)
                    break
                case "today":
                    Music.filter(+durationFilter, phoneFilter, dateFilter)
                    break
                case "yesterday":
                    Music.filter(+durationFilter, phoneFilter, dateFilter)
                    break
                case "lastWeek":
                    Music.filter(+durationFilter, phoneFilter, dateFilter)
                    break
                case "lastMonth":
                    Music.filter(+durationFilter, phoneFilter, dateFilter)
                    break
                case "currentMonth":
                    Music.filter(+durationFilter, phoneFilter, dateFilter)
                    break
                default:
                    return
            }
        }, [dateFilter]
    )
    return (
        <div>
            <select
                onChange={(e)=>setDateFilter(e.target.value)}
                value={dateFilter}
            >
                <option value="allTime">Всё время</option>
                <option value="today">Сегодня</option>
                <option value="yesterday">Вчера</option>
                <option value="lastWeek">За прошлую неделю</option>
                <option value="lastMonth">За прошлый месяц</option>
                <option value="currentMonth">За текущий месяц</option>
            </select>
        </div>
    );
});

export default DateFilter;