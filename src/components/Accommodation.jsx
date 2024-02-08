import {FormattedMessage} from "react-intl";

const items = [
    {
        title: "accommodation_1_title",
        image: "/images/tent.jpg",
        body: "accommodation_1_body",
        address: "accommodation_1_body",
        reservation: {
            link: '',
            phone: '',
        },
    },
    {
        title: "accommodation_2_title",
        image: "/images/tent.jpg",
        body: "accommodation_2_body",
        address: "accommodation_2_body",
        reservation: {
            link: '',
            phone: '',
        },
    },
    {
        title: "accommodation_3_title",
        image: "/images/tent.jpg",
        body: "accommodation_3_body",
        address: "accommodation_3_body",
        reservation: {
            link: '',
            phone: '',
        },
    },
]

const features = [
    {
        name: 'Durable',
        description: 'The leather cover and machined steel disc binding stand up to daily use for years to come.',
    },
    {
        name: 'Refillable',
        description: 'Buy it once and refill as often as you need. Subscribe and save on routine refills.',
    },
    {
        name: 'Thoughtfully designed',
        description:
            'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.',
    },
    { name: 'Locally made', description: 'Responsibly and sustainably made real close to wherever you are, somehow.' },
]

export default function Accommodation() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <FormattedMessage id="accommodation_title"/>
                        ️</h2>
                </div>

                <ul role="list" className="divide-y divide-gray-200">
                    {items.map((item) => (
                        <li key={item.id} className="px-4 py-4 sm:px-0">
                            <div className="bg-white">
                                <section aria-labelledby="features-heading" className="relative">
                                    <div className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
                                        <img
                                            src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg"
                                            alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>

                                    <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
                                        <div className="lg:col-start-2">
                                            <h2 id="features-heading" className="font-medium text-gray-500">
                                                Leatherbound Daily Journal
                                            </h2>
                                            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">All in the Details</p>
                                            <p className="mt-4 text-gray-500">
                                                We've obsessed over every detail of this handcrafted journal to bring you the best materials for daily
                                                use.
                                            </p>

                                            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
                                                {features.map((feature) => (
                                                    <div key={feature.name}>
                                                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                                                        <dd className="mt-2 text-gray-500">{feature.description}</dd>
                                                    </div>
                                                ))}
                                            </dl>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </li>
                    ))}
                </ul>


            </div>
        </div>
    );
}