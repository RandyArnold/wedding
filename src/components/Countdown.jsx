import {FormattedMessage} from "react-intl";
import ConfettiExplosion from "react-confetti-explosion";

export default function Countdown() {
    const eventDate = new Date(2025,7, 16);
    const eventInDays = Math.ceil((eventDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24));

    return (
        <div className="App">
            <div className="text-center">
                {
                    (eventInDays > 1) &&
                    <FormattedMessage id="home_countdown" values={{days: eventInDays}}/>
                }
                {
                    (eventInDays === 1 ) &&
                    <FormattedMessage id="home_countdown_tomorrow" values={{days: eventInDays}}/>
                }
                {
                    (eventInDays === 0 ) &&
                    <>
                        <FormattedMessage id="home_countdown_lastday" values={{
                            hours: eventInDays,
                        }}/>
                        <div className="flex flex-col items-center">
                            <ConfettiExplosion particleCount={150}/>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}
