import { Disclosure } from "@headlessui/react"
import { AppLinks } from "./AppLinks"
import { MobileMenu } from "./MobileMenu"
import { MobileMenuButton } from "./MobileMenuButton"
import { Profile } from "../../profile/Profile"

type NavBarProps = {
  logo?: React.ReactElement<HTMLElement>
}


export const NavBar = ({ logo }: NavBarProps) => {
    return (
      <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <MobileMenuButton />
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  { logo }
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <AppLinks />
                 </div> 
                 </div>
                 <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Profile />
                 </div>
            </div>
          </div>

          <MobileMenu />
        </>
      )}
    </Disclosure>
    )
}