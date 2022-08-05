type ButtonProps = {
    isDisabled?: boolean
    text: string
}

export const Button = ({ text = `Click me!`, isDisabled = false }: ButtonProps) => {
    return (
        <>
            <button 
                type="button" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isDisabled}
            >
                { text }
            </button>
        </>
    )
}

type NavButtonProps = {
    href: string
    text: string
}

export const NavButton = ({ text = `Click me!`, href}: NavButtonProps) => {
    return (
        <>
            <a 
                href={ href } 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                { text }
            </a>
        </>
    )
}
