import { Footer } from 'brand/Footer';
import classNames from 'classnames';
import { OneColumnLayout } from 'components/layouts/OneColumnLayout';
import { SignUpForm } from './signup/SignUpForm';
import { SignUpHeader } from './signup/SignUpHeader';

/**
 * The content component arranges page-level components inside the <main> element.
 *
 * This allows you to break your page up in to smaller groups of inter-related components.
 *
 * @returns
 */
const SignUpContent = () => {
  const containerClass = classNames('space-y-5');

  return (
    <>
      <div className={containerClass}>
        {/* <SignUpHeader /> */}
        <SignUpForm />
      </div>
    </>
  );
};

/**
 * The page component defines the semantic layout of the current page.
 *
 * This allows you to keep your components presentation loosely coupled to the active layout.
 *
 * @returns
 */
export const SignUpPage = () => {
  return (
    <>
      <OneColumnLayout
        main={<SignUpContent />}
        footer={<Footer />}
        maxWidth="md"
        bgColor="gray-900"
      />
    </>
  );
};

export default SignUpPage;
