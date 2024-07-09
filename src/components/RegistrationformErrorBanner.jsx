import {XMarkIcon} from "@heroicons/react/20/solid/index.js";
import {FormattedMessage} from "react-intl";

export default function RegistrationFormErrorBanner(props) {

    return (
        <>
            <div
                className={`${props.hidden ? "!hidden" : "opacity-80"} pointer-events-none transition-opacity ease-in-out delay-150 duration-150 fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8`}>
                <div
                    className="pointer-events-auto flex items-center justify-between gap-x-6 bg-red-800 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
                    <p className="text-sm leading-6 text-white">
                        <FormattedMessage id="home_registrationForm_errorBannerMessage"/>
                    </p>
                    <button type="button" className="-m-1.5 flex-none p-1.5" onClick={props.hide}>
                        <span className="sr-only">Dismiss</span>
                        <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true"/>
                    </button>
                </div>
            </div>
        </>
    )
}

