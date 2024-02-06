import {Fragment} from 'react'
import {Disclosure} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom';
import {FormattedMessage} from "react-intl";

import LocaleSwitch from "./LocaleSwitch.jsx";

const navigation = [
    {
        id: 'navHome',
        path: '/home',
        href: '#',
        current: true
    },
    {
        id: 'navOther',
        path: '/home',
        href: '#',
        current: false
    },
    {
        id: 'Projects',
        path: '/home',
        href: '#',
        current: false
    },
    {
        id: 'Calendar',
        path: '/home',
        href: '#',
        current: false
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function Navbar(props) {
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="border-b border-gray-200 bg-white">
                    {({open}) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 justify-between">
                                    <div className="flex">
                                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                            {navigation.map((item) => (
                                                <Link to={item.path}
                                                      key={item.id}
                                                      href={item.href}
                                                      className={classNames(
                                                          item.current
                                                              ? 'border-rose-500 text-gray-900'
                                                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                          'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                                                      )}
                                                      aria-current={item.current ? 'page' : undefined}
                                                >
                                                    <FormattedMessage id={item.id}/>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                        <LocaleSwitch currentLocale={props.currentLocale} switchLocale={props.switchLocale}/>
                                    </div>
                                    <div className="-mr-2 flex items-center sm:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button
                                            className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                                            <span className="absolute -inset-0.5"/>
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden">
                                <div className="space-y-1 pb-3 pt-2">
                                    {navigation.map((item) => (
                                        <Link to={item.path}>
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                className={classNames(
                                                    item.current
                                                        ? 'border-rose-500 bg-rose-50 text-rose-700'
                                                        : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                                                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                <FormattedMessage id={item.id}/>
                                            </Disclosure.Button>
                                        </Link>
                                    ))}
                                </div>
                                <div className="border-t border-gray-200 pb-3 pt-4">
                                    <div className="flex items-center px-4">
                                        <LocaleSwitch currentLocale={props.currentLocale} switchLocale={props.switchLocale}/>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}
