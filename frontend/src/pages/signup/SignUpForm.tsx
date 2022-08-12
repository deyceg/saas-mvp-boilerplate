import { FieldInput } from 'components/forms/FieldInput';
import { Form } from 'components/forms/Form';
import { Spinner } from 'components/feedback/progress/Spinner';
import { TailwindButton } from 'components/core/button/Button';
import { noop } from 'utils';
import { FormProvider, useForm } from 'react-hook-form';
import { FieldPassword } from 'components/forms/FieldPassword';
import { useAuthControllerSignup } from 'api/endpoints/auth/auth';

type SignUpFormProps = {
  onSuccess?: Function;
};

export const SignUpForm = ({ onSuccess }: SignUpFormProps) => {
  const methods = useForm({ criteriaMode: 'all' });
  const { clearErrors, getValues } = methods;
  const { status, isLoading, mutate } = useAuthControllerSignup({
    mutation: {
      onSuccess: (data, variables, context) => onSuccess(data),
    },
  });
  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit}>
        <FieldInput
          id="email"
          label="Email address"
          type={'input'}
          options={{ required: `Email is required` }}
        />

        <FieldInput
          id="firstName"
          label="First Name"
          type={'input'}
          options={{ required: `First name is required` }}
        />

        <FieldInput
          id="lastName"
          label="Last Name"
          type={'input'}
          options={{ required: `Last name is required` }}
        />

        <FieldPassword id="password" label="Password" options={{}} />

        <FieldInput
          id="confirmPassword"
          label="Confirm Password"
          type={'password'}
          options={{
            validate: (v) =>
              getValues('password') === v || 'Password does not match',
          }}
        />

        <TailwindButton
          onClick={noop}
          variant={'solid'}
          width={'full'}
          size={'sm'}
          Icon={Spinner}
          text={'Sign Up'}
          isActive={status === 'loading'}
          iconEffect={'active'}
          type={'submit'}
        />
      </Form>
    </FormProvider>
  );
};
