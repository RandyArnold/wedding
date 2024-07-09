import {FormattedMessage} from "react-intl";
import {XMarkIcon} from "@heroicons/react/20/solid/index.js";

export default function RegistrationFormSuccessBanner(props) {

    return (
        <>
            <div
                className={`${props.hidden ? "!hidden" : "opacity-80"} pointer-events-none transition-opacity ease-in-out delay-150 duration-150 fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8`}>
                <div
                    className="pointer-events-auto flex items-center justify-between gap-x-6 bg-green-800 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
                    <p className="text-sm leading-6 text-white">
                        <strong className="font-semibold">{props.name}</strong>
                        <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                            <circle cx={1} cy={1} r={1}/>
                        </svg>
                        <FormattedMessage id="home_registrationForm_successBannerMessage"/>
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

