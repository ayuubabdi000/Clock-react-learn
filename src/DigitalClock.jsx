import React, { useEffect, useState } from 'react'
import './index.css'
const DigitalClock = () => {
    const [time,setTime]=useState(new Date())

    useEffect(()=>{
        const intervalid= setInterval(()=>{
            setTime(new Date)
        },1000);

        return ()=>{
            clearInterval(intervalid)
        }
    },[]);
    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const merdiem = hours >=12 ? "PM":"Am";

        hours =hours % 12 || 12;

        return `${hours}:${minutes}:${seconds}:${merdiem}`
    }
    function padZero(number){
        return (number <12? "0":"")+number;
        
    }


  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  )
}

export default DigitalClock
