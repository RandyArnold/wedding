import {LOCALES} from "../i18n/locales.js";

const i18n = {
    frenchFlag: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg',
    swissFlag: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg',
}

export default function LocaleSwitch(props) {
    return (
        <button onClick={props.switchLocale}
                className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none">
            {
                props.currentLocale === LOCALES.GERMAN ?
                    <div className="isolate flex -space-x-2 overflow-hidden">
                        <img
                            className="relative z-30 inline-block h-8 w-8 rounded-full ring-2 ring-white"
                            src={i18n.swissFlag}
                            alt=""
                        />
                        <img
                            className="relative z-20 inline-block h-8 w-8 rounded-full ring-2 ring-white"
                            src={i18n.frenchFlag}
                            alt=""
                        />
                    </div>
                    :
                    <div className="flex -space-x-2 overflow-hidden">
                        <img
                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                            src={i18n.swissFlag}
                            alt=""
                        />
                        <img
                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                            src={i18n.frenchFlag}
                            alt=""
                        />
                    </div>
            }
        </button>
    )
}