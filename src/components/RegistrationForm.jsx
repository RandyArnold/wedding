import {FormattedMessage} from "react-intl";

export default function RegistrationForm() {
    async function saveData(event) {
        event.preventDefault();
        console.log(event.target.reportValidity());
    }

    return (
        <div className="pt-12">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"><FormattedMessage
                    id="home_registrationForm_title"/>
                </h2>
                <p className="mt-4 text-gray-500">
                    <FormattedMessage id="home_registrationForm_catchPhrase"/>
                </p>
            </div>
            <div className="space-y-10 divide-gray-900/10 flex justify-center mt-10">
                <form onSubmit={saveData} className="bg-white ring-1 ring-gray-900/5 sm:rounded-xl lg:w-8/12 w-full shadow-lg">
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
                            <label htmlFor="diet" className="block text-sm font-medium leading-6 text-gray-900">
                                <FormattedMessage id="home_registrationForm_dietLabel"/>
                            </label>
                            <div className="mt-2">
                  <textarea
                      id="diet"
                      name="diet"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                  />
                            </div>
                        </div>


                        <div className="col-span-full mt-6">
                            <label htmlFor="password"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                <FormattedMessage id="home_registrationForm_passwordLabel"/> *
                            </label>
                            <div className="mt-2">
                                <input
                                    required
                                    type="text"
                                    name="password"
                                    id="password"
                                    autoComplete="password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-6 space-y-6">
                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input
                                        id="plusone"
                                        name="plusone"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-600"
                                    />
                                </div>
                                <div className="text-sm leading-6">
                                    <label htmlFor="plusone" className="font-medium text-gray-900">
                                        <FormattedMessage id="home_registrationForm_plusoneLabel"/>
                                    </label>
                                    <p className="text-gray-500">
                                        <FormattedMessage id="home_registrationForm_plusoneComment"/>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div
                        className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                        <button
                            type="submit"
                            className="rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                        >
                            <FormattedMessage id="submit"/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
