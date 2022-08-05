import { Footer } from "brand/Footer";
import { Header } from "brand/Header";
import { TwoColumnLayout } from "components/layouts/TwoColumnLayout";
import { HorizontalTabs } from "components/navigation/horizontal/HorizontalTabs";
import { VerticalNav } from "components/navigation/vertical/VerticalNav";
import { Profile } from "./settings/Profile";

const Content = () => {
  return (
    <>
      <div className="px-6">
        <HorizontalTabs />
        <Profile />
      </div>
    </>
  )
}

export const Settings = () => {
   return (
    <>
      <TwoColumnLayout
        header={ <Header /> } 
        section={ <Content /> } 
        //footer= { <Footer />}
        aside={<VerticalNav/>}
        bgColor='white'
      />
    </>
  )
}

export default Settings;