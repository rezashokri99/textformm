/* eslint-disable jsx-a11y/anchor-is-valid */

import { Menu } from '@headlessui/react'
import ChevronDownIcon from '@heroicons/react/solid/ChevronDownIcon'


export default function FieldSelectBox({ field_name, setField_name, setField_id, fields }) {
    

    const changeField = (state) => {
        setField_name(state.title);
        setField_id(state.id)
    }
    return (
        <Menu as="div" className="relative inline-block text-left w-full ">
            <div>
                <Menu.Button className=" rounded-[14px] py-[10px] w-full inline-flex justify-between outline-none border-[.5px] border-[#cfc9c9] shadow-sm px-4 bg-white text-sm font-medium ">
                    {
                        field_name ? field_name : "انتخاب نمایید"
                    }
                    <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Menu.Items className=" z-10 w-full origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                {
                    fields.map((field) => (
                        <div key={field.id} className="py-1">
                            <Menu.Item>
                                <p value={field.id} onClick={() => changeField(field)} href="#" className={'cursor-pointer text-gray-900 block px-4 py-2 text-sm'} >{field.title}</p>
                            </Menu.Item>
                        </div>
                    ))
                }
            </Menu.Items>

        </Menu>
    )
}