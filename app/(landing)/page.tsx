'use client';
import { use, useState } from 'react';
import style from './style.module.css'

export default function Home() {
  const [openBtn, setOpenBtn] = useState(false);
  const [time, setTime] = useState(9);
  const [timeClass, setTimeClass] = useState(false);
  const [activateBtn, setActivateBtn] = useState(false)
  const [alarm, setAlarm] = useState(false);

  function handleTime(){
    setActivateBtn(prev => !prev)
    setAlarm(prev => !prev)
    setTimeout(() => {
    },5000)
  }

  function closeAlarm(){
    setActivateBtn(prev => !prev)
    setAlarm(prev => !prev)
  }

  return (
    <div className={style.body}>
    <div className={style.grid}></div>
    <div className={style.warning}></div>
    <div className={style.base}>
      <button id={style.activate} className={`${activateBtn ? style.pushed : ''}`} onClick={handleTime}>
        <span></span>
      </button>
    </div>

    <div className={`${style.box} ${openBtn ? style.boxopened : ''}`} onClick={() => setOpenBtn(prev => !prev)} id={style.cover}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span></span><span></span>
    </div>

    <div className={style.hinges}></div>

    <div className={style.text}>Press The Button</div>

    <div id={style.panel} className={`${alarm ? style.show : ''}`}>
      <div id={style.msg}>DEVICE SELF-DESTRUCTION</div>
      <span id={style.abort} onClick={closeAlarm}>ABORT</span>
      <span id={style.detonate}>DETONATE</span>
    </div>

    <div id={style.turnoff}></div>
    <div id={style.closing}></div>

    <div id={style.restart}><button id={style.reload}></button></div>
    </div>
  )
}
