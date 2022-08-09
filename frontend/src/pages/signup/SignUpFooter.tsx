import { Link } from 'components/core/link/Link';

export const SignUpFooter = () => {
  return (
    <>
      <p className="mt-5 text-center text-sm">
        Already registered? <Link href={'/login'} variant={'light'} />
      </p>
    </>
  );
};
