/* This example requires Tailwind CSS v2.0+ */
import { useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, useLocation } from 'react-router-dom'


const navigation = [
    { name: 'home', href: '/' },
    { name: 'business', href: '/business' },
    { name: 'health', href: '/health' },
    { name: 'science', href: '/science' },
    { name: 'sports', href: '/sports' },
    { name: 'technology', href: '/technology' }
]


export default function Navbar() {

    let location = useLocation();

    useEffect(() => {
    }, [location]);

    return (
        <Disclosure as="nav" className="bg-gray-800 fixed w-full top-0 z-10">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-14">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 mx-10 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <a href='/'><h1 className="text-white text-lg font-bold">NewsMonkey</h1></a>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.name === "home" ? "/" : `/${item.name}`}
                                                className={`${location.pathname === item.href ? "text-white" : "text-gray-300"} px-3 py-2 rounded-md text-sm font-medium`}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name[0].toUpperCase() + item.name.slice(1, item.name.length)}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.name === "home" ? "/" : `/${item.name}`}
                                    className={`${location.pathname === item.href ? "text-white" : "text-gray-300"} px-3 py-2 rounded-md text-sm font-medium`}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name[0].toUpperCase() + item.name.slice(1, item.name.length)}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
