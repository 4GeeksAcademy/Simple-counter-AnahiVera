import React, { useEffect, useState } from "react";

const SecondsCounter = (props) => {
  
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {

        let idInterval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1)
        }, 1000)

        return () => {
            clearInterval(idInterval)
        }

    }, [])

    const secondsString = String(seconds).padStart(5, "0");

    return (
    <div className="card">
      <div className="counterClock">
          <i className="fa-regular fa-clock fa-6x" />
          <div className="boxFour">{secondsString[0]}</div>
          <div className="boxThree">{secondsString[1]}</div>
          <div className="boxTwo">{secondsString[2]}</div>
          <div className="boxOne"> {secondsString[3]}</div>
          <div className="boxOne"> {secondsString[4]}</div>

      </div>
  </div>
       
    )
}


export default SecondsCounter;