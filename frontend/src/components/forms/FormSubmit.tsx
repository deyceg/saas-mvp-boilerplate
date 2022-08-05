type SubmitProps = {
    loadingIndiciator?: React.ReactElement<HTMLElement>
    isLoading: boolean
    text: string
}

export const FormSubmit = ({ text = `Submit`, isLoading = false, loadingIndiciator = null}: SubmitProps) => {
    return (
        <>
            <button 
                type="submit" 
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isLoading}
            >
                { isLoading && loadingIndiciator ? loadingIndiciator : null }
                { text }
            </button>
        </>
    )
}