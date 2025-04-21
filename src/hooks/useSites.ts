
import { useState, useEffect } from "react";
import { siteService, Site } from "@/services/siteService";
import { toast } from "sonner";

export function useSites() {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSites = async () => {
    try {
      setLoading(true);
      const data = await siteService.getSites();
      setSites(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch sites");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const createSite = async (siteData: {
    domain: string;
    plan: string;
    adminEmail: string;
    adminUsername: string;
    adminPassword: string;
  }) => {
    try {
      setLoading(true);
      const newSite = await siteService.createSite(siteData);
      setSites([...sites, newSite]);
      toast.success("Site created successfully! Provisioning in progress...");
      return newSite;
    } catch (err) {
      console.error(err);
      toast.error("Failed to create site");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteSite = async (siteId: string) => {
    try {
      setLoading(true);
      await siteService.deleteSite(siteId);
      setSites(sites.filter(site => site.id !== siteId));
      toast.success("Site deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete site");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSites();
  }, []);

  return {
    sites,
    loading,
    error,
    fetchSites,
    createSite,
    deleteSite
  };
}
