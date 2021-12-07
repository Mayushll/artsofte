import React, {useEffect} from 'react';
import Music from "../../../store/Music";
import {observer} from "mobx-react";

const DurationFilter = observer(({durationFilter, setDurationFilter, dateFilter, phoneFilter}) => {
    useEffect(
        () => {
            switch (durationFilter) {
                case "0":
                    Music.filter(+durationFilter, phoneFilter, dateFilter)
                    break
                case "1":
                    Music.filter(+durationFilter, phoneFilter, dateFilter)
                    break
                case "3":
                    Music.filter(+durationFilter, phoneFilter, dateFilter)
                    break
                case "5":
                    Music.filter(+durationFilter, phoneFilter, dateFilter)
                    break
                case "10":
                    Music.filter(+durationFilter, phoneFilter, dateFilter)
                    break
                default:
                    return
            }
        }, [durationFilter]
    )
    return (
        <div>
            <select
                onChange={(e)=>setDurationFilter(e.target.value)}
                value={durationFilter}
            >
                <option value="0">Любая длительность</option>
                <option value="1">Меньше минуты</option>
                <option value="3">До 3 минут</option>
                <option value="5">До 5 минут</option>
                <option value="10">До 10 минут</option>
            </select>
        </div>
    );
});

export default DurationFilter;