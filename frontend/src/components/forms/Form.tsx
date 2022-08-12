import React from 'react';
import { FormProvider, SubmitHandler, useFormContext } from 'react-hook-form';

type FormProps = {
  children: JSX.Element[];
  onSubmit: SubmitHandler<Record<string, any>>;
  [x: string]: any;
};

export const Form = ({ children, onSubmit, ...rest }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.id
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                key: child.props.id,
                errors,
              },
            })
          : child;
      })}
    </form>
  );
};
