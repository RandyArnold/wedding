import Schedule from "./Schedule.jsx";
import Activities from "./Activities.jsx";
import Music from "./Music.jsx";


export default function HomePage() {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <Schedule/>
                <Activities/>
                <Music/>
            </div>
        </div>
    )
}
