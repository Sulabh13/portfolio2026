// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Expertise from './components/Expertise'
// import Skills from './components/Skills'
// import Portfolio from './components/Portfolio'
// import Testimonial from './components/Testimonial'
// import Blog from './components/Blog'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import BackToTop from './components/BackToTop'

import BackToTop from "./components/BackToTop"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Expertise from "./components/Expertise"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import Testimonial from "./components/Testimonials"

function App() {
  return (
    <div style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
      <Navbar />
      <Home />
      <Expertise />
      <Skills />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App