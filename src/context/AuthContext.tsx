"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  displayName: string;
  avatarUrl: string | null;
  /** Stellar public key (G... address) linked to this account */
  stellarPublicKey: string | null;
  /** ISO 8601 timestamp */
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  /** Stellar public key derived from the authenticated user. Null when not logged in. */
  stellarPublicKey: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
AuthContext.displayName = "AuthContext";

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // On mount: check for existing session
  useEffect(() => {
    const checkSession = async () => {
      try {
        // TODO: Replace with real session check against the API
        // const session = await api.auth.getSession();
        // setUser(session?.user ?? null);
        setUser(null);
      } catch {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    void checkSession();
  }, []);

  const login = useCallback(
    async (_credentials: LoginCredentials): Promise<void> => {
      setIsLoading(true);
      try {
        // TODO: Replace with real API call (POST /v1/auth/login)
        // const { user } = await api.auth.login(credentials);
        // setUser(user);
        throw new Error("Login not yet implemented. Connect the API first.");
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    try {
      // TODO: Replace with real API call (POST /v1/auth/logout)
      // await api.auth.logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isLoading,
      isAuthenticated: user !== null,
      stellarPublicKey: user?.stellarPublicKey ?? null,
      login,
      logout,
    }),
    [user, isLoading, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
