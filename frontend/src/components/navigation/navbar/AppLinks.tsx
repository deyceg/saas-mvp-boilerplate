const navigation = [
  {name: "Foo", href: "/foo", current: true},
  {name: "Bar", href: "/bar", current: false}
]

export const AppLinks = () => {
    return (
        <>
        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
        </>
    )
}