import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ScrollToTop from 'react-scroll-to-top'
import Technologies from "./components/Technologies"

const App = () => {
  return (
    <>
      <div className='overflow-x-hidden bg-white text-black antialiased selection:bg-gray-300 selection:text-black'>
        
        {/* Background */}
        <div className='fixed top-0 -z-10 h-full w-full bg-white'></div>

        {/* Main Content */}
        <div className='container mx-auto px-8'>
          <Navbar />
          <Hero />
          <Technologies/>
          
        </div>

      </div>

      {/* Scroll To Top Button */}
      <ScrollToTop
        smooth
        className="fixed p-1.5 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition duration-300"
      />
    </>
  )
}

export default App
