import React from 'react';
import styles from "./MusicPagination.module.css"
export const MusicPagination = ({pages, setCurrentPage, currentPage}) => {
    return (
        <form className={styles.wrapper}>
            {
                pages.current.map((item, index)=>
                    <div key={index} className={styles.item}>
                            <div>

                                <a href="#" className={currentPage === item ? styles.active : styles.notActive}
                                       onClick={() => {
                                    setCurrentPage(item)
                                }}>{item}
                                </a>
                            </div>
                    </div>
                )
            }
        </form>
    );
};

export default MusicPagination;