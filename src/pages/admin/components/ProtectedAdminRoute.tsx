import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

export default function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
  const { currentUser, userRole, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Verifying access...</p>
        </div>
      </div>
    );
  }

  // If no user is logged in, redirect to login
  if (!currentUser) {
    return <Navigate to="/staff/admin/login" state={{ from: location }} replace />;
  }

  // If user is logged in but not an admin, show access denied
  if (userRole !== 'admin') {
    console.warn('Access Denied - User Role:', userRole);
    console.warn('User Email:', currentUser.email);
    console.warn('Expected Role: admin');
    
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 max-w-md text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Access Denied</h1>
          <p className="text-slate-600 mb-4">
            You don't have permission to access this area. This section is restricted to administrators only.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6 text-sm">
            <p className="text-red-700 font-medium">Current Role: {userRole || 'No role assigned'}</p>
            <p className="text-red-600 text-xs mt-1">Required Role: admin</p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => navigate('/staff')}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
            >
              Go to Staff Portal
            </button>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-lg transition-all"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  // User is authenticated and has admin role
  console.log('✅ Admin Access Granted - Role:', userRole);
  return <>{children}</>;
}
