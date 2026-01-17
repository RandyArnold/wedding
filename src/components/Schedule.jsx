import {FormattedMessage, useIntl} from "react-intl";


export default function Schedule() {
    const intl = useIntl();

    return (
        <div className="bg-white pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <FormattedMessage id="program_schedule_title"/>
                    </h2>
                    <p className="mt-4 text-gray-500  text-center">
                        <FormattedMessage id="program_schedule_catchPhrase"/>
                    </p>
                </div>
                <div className=" mx-auto max-w-3xl text-center">
                    {intl.locale === 'de-DE' && <img className=" rounded-2xl object-cover mx-auto" src="/images/programDE.png" alt="" /> }
                    {intl.locale === 'fr-FR' && <img className=" rounded-2xl object-cover mx-auto" src="/images/programFR.png" alt="" /> }
                </div>
            </div>
        </div>
    )
}
