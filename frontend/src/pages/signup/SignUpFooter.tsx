import { TailwindButton } from 'components/core/button/Button';
import { TailwindLink } from 'components/core/link/Link';
import { Facebook } from 'components/social/FacebookIcon';
import { Google } from 'components/social/GoogleIcon';
import { Divider } from 'components/typography/Divider';
import { RouteMap } from 'router';
import { noop } from 'utils';

export const SignUpFooter = () => {
  return (
    <div className="mt-6 space-y-5">
      <Divider text={'Or continue with'} />
      <TailwindButton
        onClick={noop}
        variant={'ghost'}
        width={'full'}
        size={'sm'}
        Icon={Google}
        iconAlignment={'left'}
        iconPosition={'left'}
        text={'Google'}
      />

      <p className="mt-5 text-center text-sm">
        Already registered?{' '}
        <TailwindLink href={RouteMap.LOGIN} text={'Log in'} />
      </p>
    </div>
  );
};
