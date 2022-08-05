import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/solid"
import { useState } from "react";

export const MobileMenuButton = () => {
    const [isOpen, setOpen] = useState(false);
    

    return (
<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <XIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          // eslint-disable-next-line react/jsx-no-undef
          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    )
}