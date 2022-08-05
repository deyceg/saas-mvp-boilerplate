import { Footer } from "brand/Footer";
import { OneColumnLayout } from "components/layouts/OneColumnLayout";
import { SignUpForm } from "./signup/SignUpForm";
import { SignUpHeader } from "./signup/SignUpHeader";

export const SignUp = () => {
   return (
    <>
      <OneColumnLayout
        header={ <SignUpHeader /> } 
        main={ <SignUpForm /> } 
        footer= { <Footer />}
        maxWidth='md'
        bgColor='white'
      />
    </>
  )
}

export default SignUp;