
import { apiService } from "./api";
import { API_CONFIG } from "@/config/api";

/**
 * User interface
 */
export interface User {
  id: string;
  name: string;
  email: string;
  plan: "free" | "standard" | "enterprise";
  sites: number;
  status: "active" | "suspended";
}

/**
 * Service for user operations
 */
export const userService = {
  /**
   * Login user
   */
  async login(email: string, password: string): Promise<{ token: string; user: User }> {
    return apiService.post<{ token: string; user: User }>(
      API_CONFIG.endpoints.login,
      { email, password }
    );
  },

  /**
   * Register user
   */
  async register(name: string, email: string, password: string): Promise<{ token: string; user: User }> {
    return apiService.post<{ token: string; user: User }>(
      API_CONFIG.endpoints.register,
      { name, email, password }
    );
  },

  /**
   * Logout user
   */
  async logout(): Promise<{ success: boolean }> {
    return apiService.post<{ success: boolean }>(
      API_CONFIG.endpoints.logout,
      {}
    );
  },

  /**
   * Get all users (admin only)
   */
  async getUsers(): Promise<User[]> {
    return apiService.get<User[]>(API_CONFIG.endpoints.users);
  },

  /**
   * Update user's plan
   */
  async updateUserPlan(userId: string, plan: "free" | "standard" | "enterprise"): Promise<User> {
    return apiService.put<User>(
      `${API_CONFIG.endpoints.users}/${userId}/plan`,
      { plan }
    );
  },
};
