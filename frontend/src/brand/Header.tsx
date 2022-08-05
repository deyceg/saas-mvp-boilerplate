import { NavBar } from "components/navigation/navbar/NavBar"
import { Logo } from "./Logo"

export const Header = () => {
    return (
        <>
            <NavBar logo={<Logo />} />
        </>
    )
}