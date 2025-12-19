import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './pages/context/LanguageContext'
import ScrollToTop from './pages/public/components/ScrollToTop'
// Importing public pages
import Home from './pages/public/Home/Home'
import About from './pages/public/About'
import Services from './pages/public/Services/Services'
import Blog from './pages/public/Blog/Blog'
import BlogArticleDetailPage from './pages/public/BlogArticleDetail/BlogArticleDetailPage'
import Contact from './pages/public/Contact/Contact'
import Careers from './pages/public/Careers/Careers'
import Quote from './pages/public/Quote/Quote'
// Importing staff pages
import StaffDashboard from './pages/staff/StaffDashboard'
import StaffNews from './pages/staff/StaffNews'
import StaffTraining from './pages/staff/StaffTraining'
import StaffProfile from './pages/staff/StaffProfile'


function App() {

  return (
    <LanguageProvider>
      <ScrollToTop />
      <Routes>
        {/* Public routes here */}
        <Route path="/" element={<Home />} />        
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogArticleDetailPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />

        {/* Staff routes here */}
        <Route path="/staff/" element={<StaffDashboard />} />
        <Route path="/staff/news" element={<StaffNews />} />
        <Route path="/staff/training" element={<StaffTraining />} />
        <Route path="/staff/profile" element={<StaffProfile />} />

      </Routes>
    </LanguageProvider>
  )
}

export default App
