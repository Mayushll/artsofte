import React, {useEffect, useState} from "react"
import Music from "./store/Music";
import MusicList from "./components/MusicList/MusicList";
import styles from "./App.module.css"
import MusicForm from "./components/MusicForm/MusicForm";
import {observer} from "mobx-react";

const App = observer(() => {
    const [music, setMusic] = useState()
   useEffect(
        () => {
            Music.toHumanFormat()
        }, [Music.filteredData.Root.Data]
)
  return (
    <div className={styles.app}>
        <h1>Голосовая почта</h1>
        <MusicForm/>
        <MusicList music={music}/>
    </div>
  );
})

export default App;
