import {FormattedMessage} from "react-intl";
import RegistrationForm from "./RegistrationForm.jsx";

export default function Playlist() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-16 space-y-4">
                    <iframe className="h-52" src="https://open.spotify.com/embed/playlist/6EJWN6gs6ivJQeqVRm7xoL?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <div>
                        <label htmlFor="search" className="block text-sm font-medium leading-6 text-gray-900">
                            <FormattedMessage id="playlist_search_title"/>
                        </label>
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                                <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                                    
                                </kbd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}