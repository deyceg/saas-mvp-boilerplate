import { XCircleIcon } from "@heroicons/react/solid";

type FieldErrorProps = {
    message: string
}

export const FieldError = ({ message }: FieldErrorProps) => {
    return !!message && (
        <div className="rounded-md bg-red-50 p-2">
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <span role="alert" className="text-sm font-medium text-red-800">{message}</span>
            </div>
          </div>
        </div>
      )
}

export default FieldError;