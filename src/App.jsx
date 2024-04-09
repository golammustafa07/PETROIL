import Banner from "./components/Banner/Banner"
import Blog from "./components/Blog/Blog"
import Company from "./components/Company/Company"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Logos from "./components/Logo/Logos"
import Maps from "./components/Maps/Maps"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Sliders from "./components/Sliders/Sliders"
import Supplies from "./components/Supplier/Supplies"


function App() {

  return (
    <>
    <Header/>
    <Navbar/>
    <Banner/>
    <Supplies/>
    <Sliders/>
    <Services/>
    <Company/>
    <Logos/>
    <Blog/>
    <Maps/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
