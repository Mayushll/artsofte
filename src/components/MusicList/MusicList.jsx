import React, {useEffect, useRef, useState} from 'react';
import MusicItem from "./MusicItem/MusicItem";
import styles from "./MusicList.module.css"
import {observer} from "mobx-react";
import Music from "../../store/Music";
import MusicPagination from "./MusicPagination/MusicPagination";
export const MusicList = observer(({music}) => {
    const number = useRef(0)
    const pages = useRef([])
    const [currentItems, setItemsPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(
        () => {
            setCurrentPage(1)
        }, [Music.filteredData.Root.Data.length]
    )
    number.current = Math.ceil(Music.filteredData.Root.Data.length / 10)
    pages.current = []
    for (let i = 1; i <= number.current; i++) {
        pages.current.push(i)
    }
    console.log(currentPage)
    return (
        <div>
            {Music.filteredData.Root.Data.length ?
                <div className={styles.title}>
                    <div className={styles.titleDate}>
                        Дата
                    </div>
                    <div className={styles.titleNumber}>
                        Номер
                    </div>
                    <div className={styles.titleSound}>
                        Запись голоса
                    </div>
                </div>
                : null
            }
            {
                Music.filteredData.Root.Data.length ?
                    Music.filteredData.Root.Data.slice(currentItems * currentPage - currentItems, currentItems * currentPage).map((item, index) =>
                        <MusicItem key={index} item={item}/>
                    )
                    : <div style={{marginLeft: "1vw"}}>Голосовых сообщений не нашлось :(</div>
            }
            <MusicPagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
});

export default MusicList;