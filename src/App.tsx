import './App.css'
import { Route, Routes } from 'react-router-dom'
// Importing public pages
import Home from './pages/public/Home/Home'
import About from './pages/public/About'
import Services from './pages/public/Services/Services'
import Gallery from './pages/public/Gallery'
import Contact from './pages/public/Contact'
import Careers from './pages/public/Careers'
import Quote from './pages/public/Quote/Quote'
// Importing staff pages
import StaffDashboard from './pages/staff/StaffDashboard'
import StaffNews from './pages/staff/StaffNews'
import StaffTraining from './pages/staff/StaffTraining'
import StaffProfile from './pages/staff/StaffProfile'


function App() {

  return (
    <div>
      <Routes>
        {/* Public routes here */}
        <Route path="/" element={<Home />} />        
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />

        {/* Staff routes here */}
        <Route path="/staff/" element={<StaffDashboard />} />
        <Route path="/staff/news" element={<StaffNews />} />
        <Route path="/staff/training" element={<StaffTraining />} />
        <Route path="/staff/profile" element={<StaffProfile />} />

      </Routes>
    </div>
  )
}

export default App
