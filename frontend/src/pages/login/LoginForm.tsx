import { FieldInput } from 'components/forms/FieldInput';
import { Form } from 'components/forms/Form';
import { Spinner } from 'components/feedback/progress/Spinner';
import { TailwindButton } from 'components/core/button/Button';
import { noop } from 'utils';
import { FormProvider, useForm } from 'react-hook-form';
import { useAuthControllerLogin } from 'api/endpoints/auth/auth';
import { loginUser } from 'services';
import { TokenResponse } from 'api/model/tokenResponse';

type LoginFormProps = {
  onSuccess?: Function;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { isLoading, mutate } = useAuthControllerLogin({
    mutation: {
      onSuccess: (res) => {
        const { data }: { data: TokenResponse } = res;

        loginUser(data.accessToken);
        onSuccess(data);
      },
    },
  });
  const methods = useForm({ criteriaMode: 'all' });
  const onSubmit = (data, e) => {
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
          id="password"
          label="Password"
          type={'password'}
          options={{ required: `Password is required` }}
        />

        <TailwindButton
          onClick={noop}
          variant={'solid'}
          width={'full'}
          size={'sm'}
          Icon={Spinner}
          text={'Login'}
          isActive={isLoading}
          iconEffect={'active'}
          type={'submit'}
        />
      </Form>
    </FormProvider>
  );
};
