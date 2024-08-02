import {FormattedMessage} from "react-intl";
import ky from 'ky';
import {useState} from "react";
import { useIntl } from 'react-intl';
import RegistrationFormSuccessBanner from "./RegistrationFormSuccessBanner.jsx";
import RegistrationFormErrorBanner from "./RegistrationFormErrorBanner.jsx";


export default function RegistrationForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccessBannerDisplayed, setDisplaySuccessBanner] = useState(false)
    const [isErrorBannerDisplayed, setDisplayErrorBanner] = useState(false)
    const [name, setName] = useState('')

    const displaySuccessBanner = () => {
        hideErrorBanner();
        setDisplaySuccessBanner(true);
    }

    const displayErrorBanner = () => {
        hideSuccessBanner();
        setDisplayErrorBanner(true);
    }
    const hideSuccessBanner = () => {
        setDisplaySuccessBanner(false);
    }

    const hideErrorBanner = () => {
        setDisplayErrorBanner(false);
    }

    const intl = useIntl();

    async function saveData(event) {
        event.preventDefault();
        event.target.reportValidity();

        setIsLoading(true);


        const data = {
            name: event.target[0].value,
            email: event.target[1].value,
            diet: event.target[2].value,
            allergies: event.target[3].value,
            lodging: event.target[4].value,
            locale: intl.locale,
        }

        try {
            const json = await ky
                 .post('https://wedding-backend.randy-arnold.fr/register',
                    {json: data}
                )
                .json();
            setIsLoading(false);

            if (json.ok) {
                event.target.reset()
                setName(data.name)
                displaySuccessBanner();
            } else {
                setIsLoading(false);
                displayErrorBanner();
            }
        } catch (error) {
            setIsLoading(false);
            displayErrorBanner();
        }
    }

    return (
        <div className="pt-12">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <FormattedMessage id="home_registrationForm_title"/>
                </h2>
                <p className="mt-4 text-gray-500">
                    <FormattedMessage id="home_registrationForm_catchPhrase"/>
                </p>
            </div>
            <div className="space-y-10 divide-gray-900/10 flex justify-center mt-10">
                <form onSubmit={saveData}
                      className="bg-white ring-1 ring-gray-900/5 sm:rounded-xl lg:w-8/12 w-full shadow-lg">
                    <div className="px-4 py-6 sm:p-8">
                        <div className="col-span-full">
                            <label htmlFor="names"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                <FormattedMessage id="home_registrationForm_nameLabel"/> *
                            </label>
                            <div className="mt-2">
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full mt-6">
                            <label htmlFor="email"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                <FormattedMessage id="home_registrationForm_emailLabel"/> *
                            </label>
                            <div className="mt-2">
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full mt-6">
                            <label htmlFor="diet" className="block text-sm font-medium leading-6 text-gray-900">
                                <FormattedMessage id="home_registrationForm_dietOptionsLabel"/>
                            </label>
                            <div className="mt-2">
                                <select
                                    required
                                    id="diet"
                                    name="diet"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option><FormattedMessage id="home_registrationForm_dietOption_1"/>
                                    </option>
                                    <option><FormattedMessage id="home_registrationForm_dietOption_2"/>
                                    </option>
                                    <option><FormattedMessage id="home_registrationForm_dietOption_3"/>
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full mt-6">
                            <label htmlFor="diet" className="block text-sm font-medium leading-6 text-gray-900">
                                <FormattedMessage id="home_registrationForm_allergiesLabel"/>
                            </label>
                            <div className="mt-2">

                  <textarea
                      id="alergies"
                      name="alergies"
                      rows={1}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                  />
                            </div>
                        </div>

                        <div className="col-span-full mt-6">
                            <label htmlFor="diet" className="block text-sm font-medium leading-6 text-gray-900">
                                <FormattedMessage id="home_registrationForm_accommodationOptionsLabel"/>
                            </label>
                            <div className="mt-2">
                                <select
                                    required
                                    id="diet"
                                    name="diet"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option><FormattedMessage id="home_registrationForm_accommodationOption_1"/>
                                    </option>
                                    <option><FormattedMessage id="home_registrationForm_accommodationOption_2"/>
                                    </option>
                                    <option><FormattedMessage id="home_registrationForm_accommodationOption_3"/>
                                    </option>
                                    <option><FormattedMessage id="home_registrationForm_accommodationOption_4"/>
                                    </option>
                                    <option><FormattedMessage id="home_registrationForm_accommodationOption_5"/>
                                    </option>
                                    { intl.locale == 'fr-FR' && <option><FormattedMessage id="home_registrationForm_accommodationOption_6"/>
                                    </option> }
                                    { intl.locale == 'fr-FR' &&<option><FormattedMessage id="home_registrationForm_accommodationOption_7"/>
                                    </option> }
                                </select>
                            </div>
                        </div>

                    </div>
                    <div
                        className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 flex items-center"
                        >


                            {isLoading ?
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                :
                                <FormattedMessage id="submit"/>
                            }

                        </button>
                    </div>
                </form>
            </div>
            <RegistrationFormSuccessBanner hidden={!isSuccessBannerDisplayed} name={name} hide={hideSuccessBanner}/>
            <RegistrationFormErrorBanner hidden={!isErrorBannerDisplayed} hide={hideErrorBanner}/>
        </div>
    )
}
