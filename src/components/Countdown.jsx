import { useState, useEffect } from "react";

//import hooks - use state, useeffect
// create states for days, hours, minutes, seconds
    // create variables for each
//pass the states as props to <Countdown /> component in Content
// bind the setStates to the variables 
// use if statement for when countdown reaches zero, otherwise keep counting
// use setinterval so countdown updates every second

const Countdown = () => {

    const [getDays, setDays] = useState()
    const [getHours, setHours] = useState()
    const [getMinutes, setMintes] = useState()
    const [getSeconds, setSeconds] = useState()

let interval;

const startCountDown = () => {
    const countDownDate = new Date('December 25, 2024 ').getTime();

    interval = setInterval(() =>{
        const now = new Date().getTime();

        const dfrence = countDownDate - now;

        const days = Math.floor(dfrence / (24 * 60 * 60 * 1000));
        const hours = Math.floor((dfrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
        const minutes = Math.floor((dfrence % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((dfrence % (60 * 1000)) / 1000);

        if(dfrence < 0){
            clearInterval(interval.current);
            return "Merry Christmas!"
        }else{
            setDays(days);
            setHours(hours);
            setMintes(minutes);
            setSeconds(seconds);
        }
    });
};

useEffect(() => {
    startCountDown();
})
    
    return (<p>There are: {getDays} days {getHours} hours {getMinutes} minutes {getSeconds} seconds left until Christmas!</p>);
}

export default Countdown;