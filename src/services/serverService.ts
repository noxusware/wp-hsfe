
import { apiService } from "./api";
import { API_CONFIG } from "@/config/api";

/**
 * Server stats interface
 */
export interface ServerStats {
  cpu: {
    server: string;
    usage: number;
  }[];
  memory: {
    server: string;
    usage: number;
  }[];
  disk: {
    server: string;
    usage: number;
  }[];
}

/**
 * Container interface
 */
export interface Container {
  id: string;
  siteId: string;
  status: "running" | "stopped" | "error";
  type: "web" | "database";
  resources: {
    cpu: number;
    memory: number;
    disk: number;
  };
}

/**
 * Service for server operations
 */
export const serverService = {
  /**
   * Get server stats
   */
  async getServerStats(): Promise<ServerStats> {
    return apiService.get<ServerStats>(API_CONFIG.endpoints.serverStats);
  },

  /**
   * Get containers
   */
  async getContainers(): Promise<Container[]> {
    return apiService.get<Container[]>(API_CONFIG.endpoints.containers);
  },

  /**
   * Restart a container
   */
  async restartContainer(containerId: string): Promise<{ success: boolean }> {
    return apiService.post<{ success: boolean }>(
      `${API_CONFIG.endpoints.containers}/${containerId}/restart`,
      {}
    );
  },
};
