import { HomeIcon, BriefcaseIcon, DocumentSearchIcon, ChatIcon, UsersIcon, CogIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid"
import classNames from "classnames"

type VerticalNavProps = {
  narrow?: boolean
}

const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: false },
    { name: 'Jobs', href: '#', icon: BriefcaseIcon, current: false },
    { name: 'Applications', href: '#', icon: DocumentSearchIcon, current: false },
    { name: 'Messages', href: '#', icon: ChatIcon, current: false },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Settings', href: '#', icon: CogIcon, current: true },
  ]
  const secondaryNavigation = [
    { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
    { name: 'Logout', href: '#', icon: CogIcon },
  ]
export const VerticalNav = ({narrow = false}: VerticalNavProps) => {
  const navNarrowClass = classNames(
    // All screen sizes
    //'hidden md:block md:flex-shrink-0 md:overflow-y-auto md:bg-gray-800 w-20 flex flex-col items-center lg:flex lg:flex-shrink-0'
    'hidden lg:flex lg:flex-shrink-0' 
    //"bg-gray-50 border-r border-gray-200 pt-5 pb-4 flex flex-col w-20 flex-grow overflow-y-auto"
    // Small and above
    // Medium and above
    // Large and aboe
  )
  const navClass = classNames(
    "bg-gray-50 border-r border-gray-200 pt-5 pb-4 flex flex-col w-96 flex-grow overflow-y-auto"
  )

  const containerClass = classNames(
    {'flex flex-col w-20 overflow-y-auto': narrow === true},
    { "flex flex-col w-96 flex-grow overflow-y-auto": narrow === false }
  )


  const wrapperClass=classNames(
    {'flex-1 flex flex-col overflow-y-auto bg-gray-800 space-y-3 p-3': narrow === true},
    { 'flex-1 flex flex-col bg-gray-50 border-r border-gray-200 ': narrow === false }
  )

  const primaryNav = classNames(
    'flex-1',
    { 'flex-grow space-y-1': narrow === false },
    { 'space-y-3': narrow === true }
  )

  const secondaryNav = classNames(
    'flex-shrink-0'
  )

    return (
          <nav className={ containerClass }>
  
              <div className={wrapperClass}>
              <div className={primaryNav}>
                {narrow === true && navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
                    'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
                  )}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
                {narrow === false && navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-purple-50 border-purple-600 text-purple-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                      'group border-l-4 py-2 px-3 flex items-center text-sm font-medium'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            <div className={secondaryNav}>
            {narrow === true && secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    'text-gray-400 hover:bg-gray-700',
                    'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
                  )}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
              {narrow === false && secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group border-l-4 border-transparent py-2 px-3 flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  <item.icon className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
              </div>
             </div> 
          </nav>
    )
}