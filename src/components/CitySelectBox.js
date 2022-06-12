/* eslint-disable jsx-a11y/anchor-is-valid */

import { Menu } from '@headlessui/react'
import ChevronDownIcon from '@heroicons/react/solid/ChevronDownIcon'


export default function CitySelectBox({ cities, city_name, setCity_name, setCity_id }) {

    const changeCity = (state) => {
        setCity_name(state.title);
        setCity_id(state.id)
    }
    return (
        <Menu as="div" className="relative inline-block text-left w-full font-iranyekan">
            <div>
                <Menu.Button className=" rounded-[14px] py-[10px] w-full inline-flex justify-between outline-none border-[.5px] border-[#cfc9c9] shadow-sm px-4 bg-white text-sm font-medium ">
                    {
                        city_name ? city_name : "انتخاب نمایید"
                    }
                    <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Menu.Items className="font-iranyekan z-10 overflow-scroll h-72 w-full origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">

                {
                    cities.map((city) => (
                        <div key={city.id} className="py-1">
                            <Menu.Item>
                                <p value={city.id} onClick={(e) => changeCity(city)} href="#" className={'cursor-pointer text-gray-900 block px-4 py-2 text-sm'} >{city.title}</p>
                            </Menu.Item>
                        </div>
                    ))
                }
              
            </Menu.Items>

        </Menu>
    )
}