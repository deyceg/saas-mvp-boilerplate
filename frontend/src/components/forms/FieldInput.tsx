import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors, RegisterOptions } from "react-hook-form"
import FieldError from "./FieldError";
import {has} from 'lodash'

type InputProps = {
    id: string
    label: string,
    type: 'email' | 'password'
    register?: Function
    options: RegisterOptions
    errors?: FieldErrors
    // All other props
    [x:string]: any;
}

export const FieldInput = ({id, label, type, register, options = {}, errors, ...rest}: InputProps) => {
    return (
        <>
            <div className="flex flex-col">
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
                <div className="mt-1">
                    <input 
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register(id, options)}
                        type={type}
                        aria-invalid={has(errors, id) ? "true" : "false"}
                    />
                </div>
                <div className="mt-2">
                    <ErrorMessage
                        errors={errors}
                        name={id}
                        render={FieldError}
                    />
                </div>
            </div>

        </>
    )
}