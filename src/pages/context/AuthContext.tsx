import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut 
} from 'firebase/auth';
import type { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';

// Define user role type
export type UserRole = 'admin' | 'staff' | 'user' | null;

// Define auth context type
interface AuthContextType {
  currentUser: User | null;
  userRole: UserRole;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// AuthProvider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [loading, setLoading] = useState(true);

  // Fetch user role from Firestore
  const fetchUserRole = async (uid: string): Promise<UserRole> => {
    try {
      console.log('🔍 Fetching user role for UID:', uid);
      const userDoc = await getDoc(doc(db, 'users', uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log('✅ User document found:', userData);
        console.log('👤 User role:', userData.role);
        return userData.role || null;
      } else {
        console.warn('⚠️ No user document found in Firestore for UID:', uid);
        console.warn('📝 Create a document in Firestore: users/' + uid + ' with field "role: admin"');
      }
      return null;
    } catch (error) {
      console.error('❌ Error fetching user role:', error);
      return null;
    }
  };

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  };

  // Sign out function
  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUserRole(null);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('🔐 Auth state changed:', user ? user.email : 'No user');
      setCurrentUser(user);
      
      if (user) {
        // Fetch user role when user is authenticated
        const role = await fetchUserRole(user.uid);
        setUserRole(role);
        console.log('✅ Authentication complete - Role set to:', role);
      } else {
        setUserRole(null);
        console.log('🚪 User logged out');
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    userRole,
    loading,
    signIn,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
