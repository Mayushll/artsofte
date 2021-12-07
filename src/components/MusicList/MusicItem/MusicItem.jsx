import React from 'react';
import styles from "../MusicList.module.css";
import mp3 from "../Sword_Art_Online_-_Luminous_Sword_(musmore.com).mp3";

export const MusicItem = ({item}) => {
    return (
        <div>
            <div className={styles.wrapper}>
                <span className={styles.date}>{item.VisualReceived}</span>
                <span className={styles.phone}>{item.From}</span>
                <div className={styles.player}>
                    <audio className={styles.audio} controls src={mp3}/>
                    <div className={styles.duration}>{item.VisualDuration}</div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default MusicItem;