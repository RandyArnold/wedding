import {FormattedMessage} from "react-intl";

const castles = [
    {
        name: 'program_activities_castle1_name',
        direction: 'https://maps.app.goo.gl/ahyBv9BpUyvDXQLP6',
        description: 'program_activities_castle1_description',
    },
    {
        name: 'program_activities_castle2_name',
        direction: 'https://maps.app.goo.gl/53L178BPMKBsKmPc6',
        description: 'program_activities_castle2_description',
    },
]

const restautants = [
    {
        name: 'Le Paddock',
        direction: 'https://maps.app.goo.gl/rcf9HRrq591PuQeE6',
        city: 'Saint-Amand-Montrond',
    },
    {
        name: 'L\'Entrepôt',
        direction: 'https://maps.app.goo.gl/MaCXJ9GBVh4Fbmpt7',
        city: 'Saint-Amand-Montrond',
    },
    {
        name: 'Le Bistrot des Halles',
        direction: 'https://maps.app.goo.gl/NRdFUTGb37eLPhXz5',
        city: 'Saint-Amand-Montrond',
    },
    {
        name: 'La Mère Poule',
        direction: 'https://maps.app.goo.gl/DRUvVpEVmH6M5i6e7',
        city: 'Bourges',
    },
    {
        name: 'La Gargouille',
        direction: 'https://maps.app.goo.gl/MTT6Lt3cFRdSsTfr6',
        city: 'Bourges',
    },
]

export default function Schedule() {

    return (
        <div className="bg-white pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <FormattedMessage id="program_activities_title"/>
                    </h2>
                    <p className="mt-12 text-gray-500  text-left">
                        <p className="mb-2"><FormattedMessage id="program_activities_body_p1"/></p>
                        <ul className="list-disc">
                            {castles.map((castle) => (
                                <li key={castle.name}>
                                    <a href={castle.direction} target="_blank" rel="noreferrer"
                                       className="underline text-sm text-gray-700">
                                        <FormattedMessage id={castle.name}/>
                                    </a>
                                    <FormattedMessage id={castle.description}/>
                                </li>
                            ))}

                        </ul>
                        <p className="mt-6 mb-2"><FormattedMessage id="program_activities_body_p2"/></p>
                        <p className="mt-6 mb-2"><FormattedMessage id="program_activities_body_p3"/></p>
                        <ul className="list-disc">
                            {restautants.map((restaurant) => (
                            <li key={restaurant.name}>
                                <a href={restaurant.direction} target="_blank" rel="noreferrer"
                                   className="underline text-sm text-gray-700">
                                    {restaurant.name}
                                </a>
                                <FormattedMessage id="program_activities_separator"/>
                                {restaurant.city}
                            </li>

                            ))}
                        </ul>
                    </p>
                </div>

            </div>
        </div>
    )
}
