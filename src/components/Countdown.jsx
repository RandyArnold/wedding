import {useEffect, useState} from "react";
import {FormattedMessage} from "react-intl";

export default function Countdown() {
    const eventDate = new Date(2025,5, 2);
    const initialCounter = Math.round((eventDate.getTime() - (new Date()).getTime()) / 1000);

    const [seconds, setSeconds] = useState(initialCounter);
    const [counter, setCounter] = useState(secondsToCounter(initialCounter));

    useEffect(() => {
        seconds > 0 &&
        setTimeout(() => {
                setSeconds(seconds - 1);
                setCounter(secondsToCounter(seconds));
            },1000)
    }, [seconds]);

    return (
        <div className="App">
            <div><FormattedMessage id="home_counter" values={{
                days: counter.days,
                hours: counter.hours,
                minutes: counter.minutes,
                seconds: counter.seconds,
            }}/></div>
        </div>
    );
}

function secondsToCounter(seconds) {
    const day = 86400;
    const hour = 3600;
    const minute = 60;

    const daysOut = Math.floor(seconds / day);
    const hoursOut = Math.floor((seconds - daysOut * day)/hour);
    const minutesOut = Math.floor((seconds - daysOut * day - hoursOut * hour)/minute);
    const secondsOut = seconds - daysOut * day - hoursOut * hour - minutesOut * minute;

    return {
        days: daysOut,
        hours:  hoursOut,
        minutes: minutesOut,
        seconds: secondsOut
    }
}