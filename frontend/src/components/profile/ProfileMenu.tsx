import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { Avatar } from "./Avatar"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

export const ProfileMenu = () => {
    const menuItems = [{name: "foo", href: "/foo", current: true}]

    return (
        <Menu as="div" className="ml-3 relative ">
        <div>
        <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">Open user menu</span>
            <Avatar />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          {menuItems.map((item) => (
            <Menu.Item key={item.name}>
            {({ active }) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                {item.name}
              </a>
            )}
          </Menu.Item>

          ))}
          </Menu.Items>
        </Transition>
      </Menu>
    )
}