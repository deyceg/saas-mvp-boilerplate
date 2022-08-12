import classNames from 'classnames';
import { TailwindCard } from 'components/core/card/Card';
import { OneColumnLayout } from 'components/layouts/OneColumnLayout';
import { useNavigate } from 'react-router-dom';
import { RouteMap } from 'router';
import { SignUpFooter } from './signup/SignUpFooter';
import { SignUpForm } from './signup/SignUpForm';
import { SignUpHeader } from './signup/SignUpHeader';

/**
 * The page component defines the semantic layout of the current page.
 *
 * This allows you to keep your components loosely coupled to the page.
 *
 * @returns
 */
export const SignUpPage = () => {
  let navigate = useNavigate();
  const onSuccess = () => navigate(RouteMap.HOME);

  return (
    <OneColumnLayout
      main={
        <TailwindCard
          header={<SignUpHeader />}
          body={<SignUpForm onSuccess={onSuccess} />}
          footer={<SignUpFooter />}
        />
      }
      maxWidth="md"
    />
  );
};

export default SignUpPage;
