import {FormattedMessage, useIntl} from "react-intl";


export default function Music() {
    const intl = useIntl()

    return (
        <div className="bg-white pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mt-24 mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <FormattedMessage id="program_music_title"/>
                    </h2>
                    <p className="mt-12 text-gray-500  text-left">
                        <p className="mb-2"><FormattedMessage id="program_music_body_p1"/>
                            <a href="MAILTO:corin.arnold@outlook.fr" rel="noreferrer" className="underline text-gray-700">
                                corin.arnold@outlook.fr
                            </a>
                            {intl.locale === 'de-DE' && <> (damit wir ihn gekonnt ignorieren können. 😉)</>}
                        </p>
                        <p className="mb-2"><FormattedMessage id="program_music_body_p2"/></p>
                    </p>
                </div>
                <div className="mt-12 mx-auto max-w-3xl text-center">
                    <img className="aspect-[3/2] w-2/3 rounded-2xl object-cover mx-auto" src="/images/DJ.png" alt="" />
                </div>
            </div>
        </div>
    )
}
