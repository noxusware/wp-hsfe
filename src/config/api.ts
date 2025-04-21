
/**
 * Configuration for backend API endpoints
 * Update these URLs to point to your backend server
 */
export const API_CONFIG = {
  baseUrl: "https://api.cloudhaven.host", // Replace with your actual backend URL
  endpoints: {
    // Authentication
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    
    // Site management
    sites: "/sites",
    siteDetails: (siteId: string) => `/sites/${siteId}`,
    createSite: "/sites/create",
    deleteSite: (siteId: string) => `/sites/${siteId}`,
    
    // Server operations
    serverStats: "/server/stats",
    containers: "/containers",
    backups: (siteId: string) => `/sites/${siteId}/backups`,
    restore: (siteId: string, backupId: string) => `/sites/${siteId}/backups/${backupId}/restore`,
    
    // Security
    sslCertificates: (siteId: string) => `/sites/${siteId}/ssl`,
    securityLogs: "/security/logs",
    
    // Billing
    plans: "/billing/plans",
    invoices: "/billing/invoices",
    subscribe: "/billing/subscribe",
    
    // Admin
    users: "/admin/users",
    userSites: (userId: string) => `/admin/users/${userId}/sites`,
    serverMonitoring: "/admin/monitoring",
    transactions: "/admin/transactions"
  }
};
