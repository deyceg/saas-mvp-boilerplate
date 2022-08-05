import { Transition, Dialog } from "@headlessui/react"
import { XIcon } from "@heroicons/react/solid"
import { Fragment, useState } from "react"

type SideBarProps = {
    header?: React.ReactElement<HTMLElement>
    body: React.ReactElement<HTMLElement>
    footer?: React.ReactElement<HTMLElement>
    children?: JSX.Element[]
}

export const LeftSlider = ({ header, body, footer}: SideBarProps) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            { !open && <div className="fixed inset-y-0 left-0 flex max-w-full pr-10" onMouseEnter={() => setOpen(true)}></div> }
            <Transition.Root show={open} as={Fragment} >
                <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                    <div className="fixed inset-0" />
    
                    <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="pointer-events-auto w-screen max-w-md" >
                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl" >
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
                                    { body }
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