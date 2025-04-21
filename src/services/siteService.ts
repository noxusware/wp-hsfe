
import { apiService } from "./api";
import { API_CONFIG } from "@/config/api";

/**
 * Site object interface
 */
export interface Site {
  id: string;
  domain: string;
  plan: "free" | "standard" | "enterprise";
  status: "online" | "offline" | "provisioning" | "error";
  createdAt: string;
  storage: {
    used: number;
    total: number;
  };
  bandwidth: {
    used: number;
    total: number;
  };
}

/**
 * Backup object interface
 */
export interface Backup {
  id: string;
  siteId: string;
  created: string;
  size: number;
  type: string;
}

/**
 * Service for site operations
 */
export const siteService = {
  /**
   * Get all sites for the current user
   */
  async getSites(): Promise<Site[]> {
    return apiService.get<Site[]>(API_CONFIG.endpoints.sites);
  },

  /**
   * Get details for a specific site
   */
  async getSiteDetails(siteId: string): Promise<Site> {
    return apiService.get<Site>(API_CONFIG.endpoints.siteDetails(siteId));
  },

  /**
   * Create a new WordPress site
   */
  async createSite(siteData: {
    domain: string;
    plan: string;
    adminEmail: string;
    adminUsername: string;
    adminPassword: string;
  }): Promise<Site> {
    return apiService.post<Site>(API_CONFIG.endpoints.createSite, siteData);
  },

  /**
   * Delete a WordPress site
   */
  async deleteSite(siteId: string): Promise<{ success: boolean }> {
    return apiService.delete<{ success: boolean }>(API_CONFIG.endpoints.deleteSite(siteId));
  },

  /**
   * Get backups for a specific site
   */
  async getBackups(siteId: string): Promise<Backup[]> {
    return apiService.get<Backup[]>(API_CONFIG.endpoints.backups(siteId));
  },

  /**
   * Restore a site from a backup
   */
  async restoreBackup(siteId: string, backupId: string): Promise<{ success: boolean }> {
    return apiService.post<{ success: boolean }>(
      API_CONFIG.endpoints.restore(siteId, backupId),
      {}
    );
  },
};
