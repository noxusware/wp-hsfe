
import { apiService } from "./api";
import { API_CONFIG } from "@/config/api";

/**
 * Security log event interface
 */
export interface SecurityLog {
  id: string;
  time: string;
  event: string;
  ip: string;
  user: string;
  severity: "Info" | "Warning" | "Critical";
}

/**
 * SSL Certificate interface
 */
export interface SSLCertificate {
  domain: string;
  issuedBy: string;
  validUntil: string;
  status: "valid" | "expired" | "pending";
}

/**
 * Service for security operations
 */
export const securityService = {
  /**
   * Get security logs
   */
  async getSecurityLogs(): Promise<SecurityLog[]> {
    return apiService.get<SecurityLog[]>(API_CONFIG.endpoints.securityLogs);
  },

  /**
   * Get SSL certificates for a site
   */
  async getSSLCertificates(siteId: string): Promise<SSLCertificate[]> {
    return apiService.get<SSLCertificate[]>(API_CONFIG.endpoints.sslCertificates(siteId));
  },

  /**
   * Request a new SSL certificate for a site
   */
  async requestSSLCertificate(siteId: string): Promise<{ success: boolean }> {
    return apiService.post<{ success: boolean }>(
      API_CONFIG.endpoints.sslCertificates(siteId),
      {}
    );
  },
};
