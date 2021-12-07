import React, {useEffect, useRef} from 'react';
import Music from "../../../store/Music";

const PhoneFilter = ({phoneFilter, dateFilter, setPhoneFilter, durationFilter}) => {
    const didMount = useRef(false)
    useEffect(
        () => {
            if (didMount.current === false) {
                didMount.current = true
                return
            }
            Music.filter(+durationFilter, phoneFilter, dateFilter)
        }, [phoneFilter]
    )
    return (
            <input
                   value={phoneFilter}
                   onChange={(e)=> {
                       setPhoneFilter(e.target.value)
                   }}
            />
    );
};

export default PhoneFilter;