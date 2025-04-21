
import { useState, useEffect } from "react";
import { serverService, ServerStats } from "@/services/serverService";

export function useServerStats() {
  const [stats, setStats] = useState<ServerStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const data = await serverService.getServerStats();
      setStats(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch server stats");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    
    // Poll for updates every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return {
    stats,
    loading,
    error,
    refreshStats: fetchStats
  };
}
