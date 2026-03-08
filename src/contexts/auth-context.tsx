// "use client";

// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
//   useCallback,
// } from "react";
// import type { User, AuthContextType } from "@/types/auth";

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const checkAuth = useCallback(async () => {
//     try {
//       setIsLoading(true);
//       setError(null);
//       const storedUser = localStorage.getItem("user_data");
//       if (storedUser) {
//         setUser(JSON.parse(storedUser));
//       }
//     } catch (err) {
//       setError("Failed to restore session");
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     checkAuth();
//   }, [checkAuth]);

//   const login = async (email: string, password: string) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       // Mock validation
//       if (email === "test@example.com" && password === "password123") {
//         const mockUser: User = {
//           id: "1",
//           email,
//           name: "Test User",
//           role: "student",
//         };
//         localStorage.setItem("user_data", JSON.stringify(mockUser));
//         localStorage.setItem("auth_token", "mock_token_123");
//         setUser(mockUser);
//       } else {
//         throw new Error("Invalid credentials. Try test@example.com / password123");
//       }
//     } catch (err) {
//       const message = err instanceof Error ? err.message : "Login failed";
//       setError(message);
//       throw err;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const signup = async (name: string, email: string, _password: string, role: User["role"]) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       // Mock signup
//       const newUser: User = {
//         id: Math.random().toString(36).substr(2, 9),
//         email,
//         name,
//         role,
//       };
//       localStorage.setItem("user_data", JSON.stringify(newUser));
//       localStorage.setItem("auth_token", "mock_token_" + newUser.id);
//       setUser(newUser);
//     } catch (err) {
//       const message = err instanceof Error ? err.message : "Signup failed";
//       setError(message);
//       throw err;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = async () => {
//     setIsLoading(true);
//     try {
//       localStorage.removeItem("user_data");
//       localStorage.removeItem("auth_token");
//       setUser(null);
//     } catch (err) {
//       setError("Logout failed");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isAuthenticated: !!user,
//         isLoading,
//         error,
//         login,
//         signup,
//         logout,
//         checkAuth,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

