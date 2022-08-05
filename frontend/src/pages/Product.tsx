
import { NavBar } from 'components/navigation/navbar/NavBar'
import { Footer } from 'brand/Footer'
import { ThreeColumnLayout } from 'components/layouts/ThreeColumnLayout'
import { Placeholder } from 'components/layouts/Placeholder'
import { createSystemToast } from 'components/overlays/notifications/Toast'
import { createModal } from 'components/overlays/modals/Modal'
import { LeftSlider } from 'components/overlays/sliders/LeftSlider'
import { RightSlider } from 'components/overlays/sliders/RightSlider'
import { BottomSlider } from 'components/overlays/sliders/BottomSlider'
import { VerticalNav } from 'components/navigation/vertical/VerticalNav'
import { Header } from 'brand/Header'


export const Product = () => {
  return (
    <>
      <ThreeColumnLayout 
        header={<Header />} 
        //footer={<Footer />} 
        nav={<VerticalNav narrow={true}/>}
        // section={<p>Hello</p>}
        // aside={<p>Hello</p>}
        bgColor='white' 
      />
      <LeftSlider body={<Placeholder />} />
      <RightSlider body={<Placeholder />} />
      <BottomSlider body={<Placeholder />} />
      {createModal()}
      {createSystemToast("You're a superstar!")}
    </>
  )
}
