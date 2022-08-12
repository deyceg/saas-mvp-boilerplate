import { TailwindCard } from 'components/core/card/Card';
import { OneColumnLayout } from 'components/layouts/OneColumnLayout';
import { useNavigate } from 'react-router-dom';
import { RouteMap } from 'router';
import { LoginFooter } from './login/LoginFooter';
import { LoginForm } from './login/LoginForm';
import { LoginHeader } from './login/LoginHeader';

/**
 * The page component defines the semantic layout of the current page.
 *
 * This allows you to keep your components loosely coupled to the page.
 *
 * @returns
 */
export const LoginPage = () => {
  const navigate = useNavigate();
  const onSuccess = () => navigate(RouteMap.HOME);

  return (
    <OneColumnLayout
      main={
        <TailwindCard
          header={<LoginHeader />}
          body={<LoginForm onSuccess={onSuccess} />}
          footer={<LoginFooter />}
        />
      }
      maxWidth="md"
    />
  );
};

export default LoginPage;
