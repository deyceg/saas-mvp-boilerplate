import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"

type FormProps = {
    defaultValues?: Record<string, any>
    children: JSX.Element[]
    onSubmit: SubmitHandler<Record<string,any>>
}

export const Form = ({ defaultValues = {}, children, onSubmit }: FormProps)  => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues });

    return (
      <form 
        className="space-y-6"
        onSubmit={handleSubmit(onSubmit)}
        >
        {React.Children.map(children, child => {
          return child.props.id
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  register,
                  key: child.props.id,
                  errors
                }
              })
            : child;
         })}
      </form>
    );
  }