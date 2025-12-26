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
import CareersJobs from './pages/public/Careers/CareersJobs'
import Quote from './pages/public/Quote/Quote'
// Importing staff pages
import StaffDashboard from './pages/staff/StaffDashboard'
import StaffNews from './pages/staff/StaffNews'
import StaffTraining from './pages/staff/StaffTraining'
import StaffProfile from './pages/staff/StaffProfile'
// Importing admin pages
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminPosts from './pages/admin/AdminPosts'
import AdminPostEditor from './pages/admin/AdminPostEditor'
import AdminNews from './pages/admin/AdminNews'
import AdminAnnouncements from './pages/admin/AdminAnnouncements'
import AdminJobs from './pages/admin/Careers-Section/AdminJobs/AdminJobs'
import AdminJobEditor from './pages/admin/Careers-Section/AdminJobEditor/AdminJobEditor'
import AdminApplications from './pages/admin/AdminApplications'
import AdminQuotes from './pages/admin/AdminQuotes'
import AdminTraining from './pages/admin/AdminTraining'
import AdminUsers from './pages/admin/AdminUsers'
import AdminProfile from './pages/admin/AdminProfile'
import AdminContacts from './pages/admin/AdminContacts'


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
        <Route path="/careers/jobs" element={<CareersJobs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogArticleDetailPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />

        {/* Staff routes here */}
        <Route path="/staff/" element={<StaffDashboard />} />
        <Route path="/staff/news" element={<StaffNews />} />
        <Route path="/staff/training" element={<StaffTraining />} />
        <Route path="/staff/profile" element={<StaffProfile />} />

        {/* Admin routes here (now under /staff/admin/) */}
        <Route path="/staff/admin" element={<AdminDashboard />} />
        <Route path="/staff/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/staff/admin/posts" element={<AdminPosts />} />
        <Route path="/staff/admin/posts/new" element={<AdminPostEditor />} />
        <Route path="/staff/admin/posts/:id" element={<AdminPostEditor />} />
        <Route path="/staff/admin/news" element={<AdminNews />} />
        <Route path="/staff/admin/announcements" element={<AdminAnnouncements />} />
        <Route path="/staff/admin/jobs" element={<AdminJobs />} />
        <Route path="/staff/admin/jobs/new" element={<AdminJobEditor />} />
        <Route path="/staff/admin/jobs/:id" element={<AdminJobEditor />} />
        <Route path="/staff/admin/applications" element={<AdminApplications />} />
        <Route path="/staff/admin/quotes" element={<AdminQuotes />} />
        <Route path="/staff/admin/contacts" element={<AdminContacts />} />
        <Route path="/staff/admin/training" element={<AdminTraining />} />
        <Route path="/staff/admin/users" element={<AdminUsers />} />
        <Route path="/staff/admin/profile" element={<AdminProfile />} />

      </Routes>
    </LanguageProvider>
  )
}

export default App
