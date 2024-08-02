import {FormattedMessage} from "react-intl";

const witnesses = [
    {
        name: 'Sarina Saiful',
        description: 'home_witnesses_sarina_description',
        imageUrl: '/images/sarina.jpg',
    },
    {
        name: 'Christoph Thalmann',
        description: 'home_witnesses_christoph_description',
        imageUrl: '/images/unknown.jpg',
    },
    // More people...
]

export default function Witnesses() {
    return (
        <div className="bg-white pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><FormattedMessage id="home_witnesses_title"/></h2>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
                >
                    {witnesses.map((witness) => (
                        <li key={witness.name}>
                            <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={witness.imageUrl} alt="" />
                            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{witness.name}</h3>
                            <p className="text-base leading-7 text-gray-600">
                                <FormattedMessage id={witness.description}/>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
