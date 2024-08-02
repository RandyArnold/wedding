import {FormattedMessage, useIntl} from "react-intl";


export default function Accommodation() {
    const intl = useIntl();

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
                    {intl.locale === 'de-DE' &&
                        <>
                            <p className="mt-10 text-left text-gray-600">
                                Diejenigen die es bequemer mögen: hier einige Unterkünfte (ca. 5-15 Minuten entfernt):
                            </p>
                            <p className="mt-4 text-left text-gray-600">
                                AirBnb:&nbsp;
                                <a href="https://www.airbnb.ch/s/Meillant--France/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJmZpAio99-kcRIII6BdfIDQQ&checkin=2025-08-16&checkout=2025-08-17&adults=1" target="_blank" rel="noreferrer" className="underline">
                                    Meillant Ferienwohnungen & Unterkünfte
                                </a>
                            </p>
                            <p className="text-left text-gray-600">
                                Hotel St Amand:&nbsp;
                                <a href="https://www.booking.com/searchresults.fr.html?ss=Saint-Amand-Montrond&ssne=Saint-Amand-Montrond&ssne_untouched=Saint-Amand-Montrond&efdco=1&label=msn-VWChlyD*qYj45A6mp*_AXA-79920932670069%3Atikwd-79921080355733%3Aloc-175%3Aneo%3Amte%3Alp153788%3Adec%3Aqsh%C3%B4tel+st+amand+montrond&aid=2106269&lang=fr&sb=1&src_elem=sb&src=searchresults&dest_id=-1463626&dest_type=city&checkin=2025-08-16&checkout=2025-08-17&group_adults=2&no_rooms=1&group_children=0" target="_blank" rel="noreferrer" className="underline">
                                    Booking.com: Hotels in Saint-Amand-Montrond

                                </a>
                            </p>
                            <p className="text-left text-gray-600">
                                Taxi-Unternehmen: Les taxis dunois SARL&nbsp;&#x2022;&nbsp;
                                <a href="TEL:+33613597602" className="underline">
                                    +33 613 59 76 02
                                </a>
                            </p>


                            <p className="mt-10 text-left text-gray-600">
                                Damit wir den Camping-Platz «chez Arnold» vorbereiten können, gebt bitte bei der Anmeldung an, wie ihr zu übernachten gedenkt
                            </p>
                        </>
                    }
                </div>

            </div>
        </div>
    )
}
