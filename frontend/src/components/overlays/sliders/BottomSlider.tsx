import { Transition, Dialog } from "@headlessui/react"
import { XIcon } from "@heroicons/react/solid"
import { useState, Fragment } from "react"


type SideBarProps = {
    header?: React.ReactElement<HTMLElement>
    body: React.ReactElement<HTMLElement>
    footer?: React.ReactElement<HTMLElement>
    children?: JSX.Element[]
}

export const BottomSlider = ({ header, body, footer}: SideBarProps) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            { !open && <div className="fixed inset-x-0 bottom-0 flex max-w-full pt-10" onMouseEnter={() => setOpen(true)}></div> }
            <Transition.Root show={open} as={Fragment} >
                <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                    <div className="fixed inset-0" />
    
                    <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-x-0 bottom-0 flex max-w-full pt-10">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-y-full"
                            enterTo="translate-y-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-y-0"
                            leaveTo="translate-y-full"
                        >
                            <Dialog.Panel className="pointer-events-auto w-screen max-w-full" >
                            <div className="flex h-full flex-col overflow-x-scroll bg-white py-6 shadow-inner" >
                                <div className="px-4 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <Dialog.Title className="text-lg font-medium text-gray-900"> Panel title </Dialog.Title>
                                    <div className="ml-3 flex h-7 items-center">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close panel</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                    </div>
                                </div>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    {body}
                                </div>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
        
      )

}