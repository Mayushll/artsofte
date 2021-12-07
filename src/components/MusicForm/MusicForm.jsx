import React, {useState} from 'react';
import Music from "../../store/Music";
import {observer} from "mobx-react";
import styles from "./MusicForm.module.css"
import DateFilter from "./DateFilter/DateFilter";
import DurationFilter from "./DurationFilter/DurationFilter";
import PhoneFilter from "./PhoneFilter/PhoneFilter";

export const MusicForm = observer(() => {
    const [durationFilter, setDurationFilter] = useState()
    const [phoneFilter, setPhoneFilter] = useState("")
    const [dateFilter, setDateFilter] = useState()

    return (
        <div>
            <div className={styles.wrapper}>
                <DurationFilter
                    durationFilter = {durationFilter}
                    setDurationFilter = {setDurationFilter}
                    dateFilter = {dateFilter}
                    phoneFilter = {phoneFilter}
                />
                <DateFilter
                    durationFilter = {durationFilter}
                    setDateFilter = {setDateFilter}
                    dateFilter = {dateFilter}
                    phoneFilter = {phoneFilter}
                />
                <PhoneFilter
                        durationFilter = {durationFilter}
                        setPhoneFilter = {setPhoneFilter}
                        dateFilter = {dateFilter}
                        phoneFilter = {phoneFilter}
                />
                <button onClick={ ()=> {
                    setPhoneFilter("")
                    setDateFilter("")
                    setDurationFilter("")
                    Music.restart()
                }}>
                    Сброс
                </button>
            </div>

            <th />
        </div>
    );
});

export default MusicForm;