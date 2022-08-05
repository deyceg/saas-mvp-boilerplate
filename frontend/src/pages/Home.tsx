import { TwoColumnLayout } from 'components/layouts/TwoColumnLayout'
import { Header } from 'brand/Header'
import { Footer } from 'brand/Footer'
import { VerticalNav } from 'components/navigation/vertical/VerticalNav'

export const Home = () => {
    
  return (
    <>
      <TwoColumnLayout 
        header={<Header />} 
        aside={<VerticalNav />}
        // footer={<Footer />} 
        bgColor='white' 
      />
    </>
  )
}
