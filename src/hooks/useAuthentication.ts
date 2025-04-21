
import { useState, useEffect } from "react";
import { userService, User } from "@/services/userService";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function useAuthentication() {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const userData = localStorage.getItem("userData");
      if (userData) {
        setUser(JSON.parse(userData));
        setIsAuthenticated(true);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await userService.login(email, password);
      
      localStorage.setItem("authToken", response.token);
      localStorage.setItem("userData", JSON.stringify(response.user));
      
      setUser(response.user);
      setIsAuthenticated(true);
      
      toast.success("Login successful");
      
      // Redirect based on user type (admin or regular user)
      if (response.user.email.includes("admin")) {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
      
      return response.user;
    } catch (err) {
      console.error(err);
      toast.error("Login failed. Please check your credentials.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      const response = await userService.register(name, email, password);
      
      localStorage.setItem("authToken", response.token);
      localStorage.setItem("userData", JSON.stringify(response.user));
      
      setUser(response.user);
      setIsAuthenticated(true);
      
      toast.success("Registration successful");
      navigate("/dashboard");
      
      return response.user;
    } catch (err) {
      console.error(err);
      toast.error("Registration failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await userService.logout();
    } catch (err) {
      console.error(err);
    } finally {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");
      setUser(null);
      setIsAuthenticated(false);
      navigate("/");
      toast.success("Logged out successfully");
    }
  };

  return {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout
  };
}
