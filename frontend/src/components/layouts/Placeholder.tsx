type PlaceholderProps = {}

export const Placeholder = ({}: PlaceholderProps) => {
    return (
        <>
            <div className="h-full inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="h-full border-2 border-gray-300 border-dashed rounded-lg" />
            </div>
        </>
    )
}