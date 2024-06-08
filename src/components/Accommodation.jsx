import {FormattedMessage} from "react-intl";

const witnesses = [
    {
        name: 'Sarina Saiful',
        description: 'home_witnesses_sarina_description',
        imageUrl: '/images/tent.jpg',
        phoneNumber: '+41 76 218 91 95',
    },
    // More people...
]

export default function Accommodation() {
    return (
        <div className="bg-white pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <FormattedMessage id="home_accommodation_title"/>
                    </h2>
                    <p className="mt-4 text-gray-500">
                        <FormattedMessage id="home_accommodation_catchPhrase"/>
                    </p>
                </div>
                <div className="mt-20 mx-auto max-w-3xl text-center">
                    <img className="aspect-[3/2] w-2/3 rounded-2xl object-cover mx-auto" src="/images/tent.jpg" alt="" />
                    <p className="text-base leading-7 text-gray-600">
                        <FormattedMessage id="home_accommodation_description"/>
                    </p>
                </div>

            </div>
        </div>
    )
}
