import { FieldInput } from 'components/forms/FieldInput';
import { Form } from 'components/forms/Form';
import { FormSubmit } from 'components/forms/FormSubmit';
import { Facebook } from 'components/social/FacebookIcon';
import { Spinner } from 'components/feedback/progress/Spinner';
import { useState } from 'react';

type SignUpFormProps = {
  onSuccess?: Function;
};

export const SignUpForm = ({ onSuccess }: SignUpFormProps) => {
  const [isLoading, setLoading] = useState(false);
  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => setLoading(false), 5000);
  };

  return (
    <>
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <Form onSubmit={onSubmit}>
          <FieldInput
            id="email"
            label="Email address"
            type={'email'}
            options={{ required: `Email is required` }}
          />

          <FieldInput
            id="password"
            label="Password"
            type={'password'}
            options={{ required: `Password is required` }}
          />

          <FormSubmit
            isLoading={isLoading}
            loadingIndiciator={<Spinner />}
            text={'Sign Up'}
          />
        </Form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Google</span>
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
