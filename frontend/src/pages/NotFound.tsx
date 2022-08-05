import { Footer } from "brand/Footer";
import { Header } from "brand/Header";
import { OneColumnLayout } from "components/layouts/OneColumnLayout";
import { NotFoundCTA } from "./404/NotFoundCTA";

export const NotFound = () => {
    return (
      <>
          <OneColumnLayout
            main={ <NotFoundCTA /> } 
            footer= { <Footer />}
            maxWidth='content'
            bgColor='white'
          />
      </>
    )
  }