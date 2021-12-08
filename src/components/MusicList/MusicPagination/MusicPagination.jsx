import React from 'react';
import styles from "./MusicPagination.module.css"
export const MusicPagination = ({pages, setCurrentPage, currentPage}) => {
    console.log(currentPage, pages.current.length)
    return (
        <div className={styles.wrapper}>
            {currentPage > 1 && pages.current.length > 1? <div ><button
                className={styles.arrowLeft}
                onClick={
                    () => {
                        setCurrentPage(currentPage - 1)
                    }
                }
            >
                &#5130;
                      </button>
                </div>
                : null

            }
            {
                pages.current.map((item, index) =>
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
            <div >
             {currentPage < pages.current.length && pages.current.length > 1 ? <button
                    className={styles.arrowRight}
                    onClick={
                        () => {
                            setCurrentPage(currentPage + 1)
                        }
                    }>
                 &#5125;</button>:null
                }
            </div>

        </div>
    );
};

export default MusicPagination;