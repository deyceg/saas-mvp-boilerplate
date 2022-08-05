import { Disclosure } from "@headlessui/react"

const navigation = [
  {name: "Foo", href: "/foo", current: true},
  {name: "Bar", href: "/bar", current: false}
]

export const MobileMenu = () => {

    return (
<Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
                {navigation.map((item) => (
                    <Disclosure.Button
                    as="a"
                    key={item.name}
                    href={item.href}
                    className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
        </div>
        </Disclosure.Panel>
    )
}