import {useEffect, useState} from "react";
import {FormattedMessage} from "react-intl";

export default function Countdown() {
    const eventDate = new Date(2025,7, 16);
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
            <div>
                {counter.days > 0 ?
                    <FormattedMessage id="home_countdown" values={{
                        days: counter.days,
                        hours: String(counter.hours).padStart(2, '0'),
                        minutes: String(counter.minutes).padStart(2, '0'),
                        seconds: String(counter.seconds).padStart(2, '0'),
                    }}/>
                    :
                    counterRunning(seconds) &&
                    <FormattedMessage id="home_countdown_lastday" values={{
                        hours: String(counter.hours).padStart(2, '0'),
                        minutes: String(counter.minutes).padStart(2, '0'),
                        seconds: String(counter.seconds).padStart(2, '0'),
                    }}/>
                }
            </div>
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

function counterRunning(seconds)
{
    return seconds > 0;
}