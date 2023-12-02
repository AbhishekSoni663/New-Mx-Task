
import Hero from './HeroComponent/Hero'
import FourthComp from './FourthComp/FourthComp'
import Navbar from './Navbar/Navbar'
import ThirdComp from './ThirdComp/ThirdComp'
import Story from './SecondComp/Story'

import FifthComp from "./FifthComponent/FifthComp"
import SixthComp from './SixthComponent/SixthComp'
import SeventhComp from './SeventhComponent/SeventhComp'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Story/>
    <ThirdComp/>
    <FourthComp/>
    <FifthComp/>
    <SixthComp/>
    <SeventhComp/>
    </>
  )
}

export default App