import {FormattedMessage} from "react-intl";
import Countdown from "./Countdown.jsx";
import Witnesses from "./Witnesses.jsx";
import RegistrationForm from "./RegistrationForm.jsx";
import Accommodation from "./Accommodation.jsx";

const features = [
    {
        name: 'home_p1_title',
        description: 'home_p1_body',
        imageSrc: '/images/home.jpg',
        imageAlt: 'home',
    },
    {
        name: 'home_p2_title',
        description: 'home_p2_body',
        imageSrc: '/images/theme.jpg',
        imageAlt: 'theme',
    }, {
        name: 'home_p3_title',
        description: 'home_p3_body',
        imageSrc: '/images/honeymoon.jpg',
        imageAlt: 'honeymoon',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HomePage() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Corin + Philipp =
                        ❤️</h2>
                    <p className="mt-8 text-gray-500">
                        <FormattedMessage id="home_catchPhrase"/>
                    </p>
                </div>
                <h1 className="text-center pt-2 text-2xl tracking-tight text-gray-900 sm:text-3xl"><Countdown/></h1>
                <div className="mt-16 space-y-16">
                    {features.map((feature, featureIdx) => (
                        <div
                            key={feature.name}
                            className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                        >
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                                    'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                                )}
                            >
                                <h3 className="text-lg font-medium text-gray-900"><FormattedMessage id={feature.name}/>
                                </h3>
                                <p className="mt-2 text-sm text-gray-500"><FormattedMessage id={feature.description}/>
                                </p>
                                {
                                    feature.name == 'home_p1_title' &&
                                    <a href="https://maps.app.goo.gl/1Ad1RDmweXRM8jGA7" target="_blank" rel="noreferrer" className="underline text-sm text-gray-700">
                                        <p className="mt-2">
                                            1114 route du petit Givry,
                                        </p>
                                        <p>
                                            18200 Meillant
                                        </p>
                                    </a>
                                }
                            </div>
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                                    'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                                )}
                            >
                                <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                                    {/*<img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center align-middle" />*/}
                                    <img src={feature.imageSrc} alt={feature.imageAlt}
                                         className="object-contain object-center align-middle"/>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Witnesses/>
                    <Accommodation/>
                    <RegistrationForm/>
                </div>
            </div>
        </div>
    )
}
