import Landing from './MainPage/Landing'
import Pricing from './Pricing/Pricing'
import Services from './ServicesComp/Services'
import About from './MainPage/About'
import Footer from './MainPage/Footer'

export default function Main(){
    return(
        <>
            <Landing />
            <Services />
            <Pricing/>
            <About />
            <Footer />
        </>
    )
}