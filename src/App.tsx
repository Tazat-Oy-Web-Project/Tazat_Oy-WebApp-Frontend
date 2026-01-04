import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './pages/context/LanguageContext'
import { AuthProvider } from './pages/context/AuthContext'
import ScrollToTop from './pages/public/components/ScrollToTop'
import ProtectedAdminRoute from './pages/admin/components/ProtectedAdminRoute'
// Importing public pages
import Home from './pages/public/Home/Home'
import About from './pages/public/About'
import Services from './pages/public/Services/Services'
import Blog from './pages/public/Blog/Blog'
import BlogArticleDetailPage from './pages/public/BlogArticleDetail/BlogArticleDetailPage'
import Contact from './pages/public/Contact/Contact'
import Careers from './pages/public/Careers/Careers'
import CareersJobs from './pages/public/Careers/CareersJobsList'
import JobArticleDetailPage from './pages/public/Careers/JobArticleDetail/JobArticleDetailPage'
import Quote from './pages/public/Quote/Quote'
import ServiceOne from './pages/public/Services/service-1'
import ServiceTwo from './pages/public/Services/service-2'
import ServiceThree from './pages/public/Services/service-3'
import ServiceFour from './pages/public/Services/service-4'
// Importing staff pages
import StaffDashboard from './pages/staff/StaffDashboard'
import StaffNews from './pages/staff/StaffNews'
import StaffTraining from './pages/staff/StaffTraining'
import StaffProfile from './pages/staff/StaffProfile'
// Importing admin pages
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminLogin from './pages/admin/Login-Section/AdminLogin'
import AdminPosts from './pages/admin/Blog-Section/AdminBlogs/AdminPosts'
import AdminPostEditor from './pages/admin/Blog-Section/AdminBlogEditor/AdminPostEditor'
import AdminBlogDetails from './pages/admin/Blog-Section/AdminBlogDetails/AdminBlogDetails'
import AdminNews from './pages/admin/AdminNews'
import AdminAnnouncements from './pages/admin/AdminAnnouncements'
import AdminJobs from './pages/admin/Careers-Section/AdminJobs/AdminJobs'
import AdminJobEditor from './pages/admin/Careers-Section/AdminJobEditor/AdminJobEditor'
import AdminJobDetails from './pages/admin/Careers-Section/AdminJobDetails/AdminJobDetails'
import AdminApplications from './pages/admin/AdminApplications'
import AdminQuotes from './pages/admin/AdminQuotes'
import AdminTraining from './pages/admin/AdminTraining'
import AdminUsers from './pages/admin/AdminUsers'
import AdminProfile from './pages/admin/AdminProfile'
import AdminContacts from './pages/admin/AdminContacts'


function App() {

  return (
    <AuthProvider>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
        {/* Public routes here */}
        <Route path="/" element={<Home />} />        
        <Route path="/services" element={<Services />} />
        <Route path="/services/faculty-cleaning" element={<ServiceOne />} />
        <Route path="/services/restaurant-cleaning" element={<ServiceTwo />} />
        <Route path="/services/office-cleaning" element={<ServiceThree />} />
        <Route path="/services/residential-cleaning" element={<ServiceFour />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/jobs" element={<CareersJobs />} />
        <Route path="/careers/jobs/:id" element={<JobArticleDetailPage />} />
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
        <Route path="/staff/admin/login" element={<AdminLogin />} />
        <Route path="/staff/admin" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/dashboard" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/posts" element={<ProtectedAdminRoute><AdminPosts /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/posts/new" element={<ProtectedAdminRoute><AdminPostEditor /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/posts/:id" element={<ProtectedAdminRoute><AdminPostEditor /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/posts/details/:id" element={<ProtectedAdminRoute><AdminBlogDetails /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/news" element={<ProtectedAdminRoute><AdminNews /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/announcements" element={<ProtectedAdminRoute><AdminAnnouncements /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/jobs" element={<ProtectedAdminRoute><AdminJobs /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/jobs/new" element={<ProtectedAdminRoute><AdminJobEditor /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/jobs/:id" element={<ProtectedAdminRoute><AdminJobEditor /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/jobs/details/:id" element={<ProtectedAdminRoute><AdminJobDetails /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/applications" element={<ProtectedAdminRoute><AdminApplications /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/quotes" element={<ProtectedAdminRoute><AdminQuotes /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/contacts" element={<ProtectedAdminRoute><AdminContacts /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/training" element={<ProtectedAdminRoute><AdminTraining /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/users" element={<ProtectedAdminRoute><AdminUsers /></ProtectedAdminRoute>} />
        <Route path="/staff/admin/profile" element={<ProtectedAdminRoute><AdminProfile /></ProtectedAdminRoute>} />

      </Routes>
    </LanguageProvider>
  </AuthProvider>
  )
}

export default App
