
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  Database, 
  FileText, 
  GaugeCircle, 
  LogOut, 
  Settings, 
  Shield,
  Users,
  Server,
  TrendingUp
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("users");
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-8 border-b bg-primary text-primary-foreground">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Cloud Haven Host Admin</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="secondary" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button variant="secondary" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </nav>
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 h-[calc(100vh-4rem)] border-r pt-6 px-4">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("users")}>
              <Users className="h-4 w-4 mr-2" />
              User Management
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("servers")}>
              <Server className="h-4 w-4 mr-2" />
              Server Monitoring
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("security")}>
              <Shield className="h-4 w-4 mr-2" />
              Security Logs
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("billing")}>
              <FileText className="h-4 w-4 mr-2" />
              Billing & Invoices
            </Button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList>
              <TabsTrigger value="users">User Management</TabsTrigger>
              <TabsTrigger value="servers">Server Monitoring</TabsTrigger>
              <TabsTrigger value="security">Security Logs</TabsTrigger>
              <TabsTrigger value="billing">Billing & Invoices</TabsTrigger>
            </TabsList>
            
            <TabsContent value="users" className="space-y-4">
              <h2 className="text-2xl font-bold">User Management</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>All Users</CardTitle>
                  <CardDescription>Manage your customers and their sites</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "John Doe", email: "john@example.com", plan: "Standard", sites: 1, status: "Active" },
                      { name: "Jane Smith", email: "jane@example.com", plan: "Enterprise", sites: 3, status: "Active" },
                      { name: "Bob Johnson", email: "bob@example.com", plan: "Free", sites: 1, status: "Active" },
                      { name: "Alice Brown", email: "alice@example.com", plan: "Standard", sites: 1, status: "Suspended" },
                    ].map((user, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b">
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="font-medium">{user.plan} Plan</p>
                            <p className="text-sm text-muted-foreground">{user.sites} sites</p>
                          </div>
                          <div>
                            <span className={`text-xs px-2 py-1 rounded ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {user.status}
                            </span>
                          </div>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Previous</Button>
                  <div className="flex-1 text-center">
                    <span className="text-sm text-muted-foreground">Page 1 of 1</span>
                  </div>
                  <Button variant="outline">Next</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="servers" className="space-y-4">
              <h2 className="text-2xl font-bold">Server Monitoring</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>CPU Usage</CardTitle>
                    <CardDescription>All servers</CardDescription>
                  </CardHeader>
                  <CardContent className="h-60 flex items-center justify-center">
                    <div className="w-full space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Server 1</span>
                          <span>23%</span>
                        </div>
                        <Progress value={23} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Server 2</span>
                          <span>45%</span>
                        </div>
                        <Progress value={45} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Server 3</span>
                          <span>12%</span>
                        </div>
                        <Progress value={12} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Memory Usage</CardTitle>
                    <CardDescription>All servers</CardDescription>
                  </CardHeader>
                  <CardContent className="h-60 flex items-center justify-center">
                    <div className="w-full space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Server 1</span>
                          <span>54%</span>
                        </div>
                        <Progress value={54} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Server 2</span>
                          <span>32%</span>
                        </div>
                        <Progress value={32} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Server 3</span>
                          <span>78%</span>
                        </div>
                        <Progress value={78} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Disk Usage</CardTitle>
                    <CardDescription>All servers</CardDescription>
                  </CardHeader>
                  <CardContent className="h-60 flex items-center justify-center">
                    <div className="w-full space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Server 1</span>
                          <span>65%</span>
                        </div>
                        <Progress value={65} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Server 2</span>
                          <span>48%</span>
                        </div>
                        <Progress value={48} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Server 3</span>
                          <span>23%</span>
                        </div>
                        <Progress value={23} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Overview</CardTitle>
                  <CardDescription>Last 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <TrendingUp className="h-32 w-32 text-cloud-blue-500 mb-4" />
                    <p className="text-muted-foreground">Traffic visualization would be shown here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-4">
              <h2 className="text-2xl font-bold">Security Logs</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Events</CardTitle>
                  <CardDescription>Last 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { time: "10:45 AM", event: "Failed login attempt", ip: "192.168.1.105", user: "john@example.com", severity: "Warning" },
                      { time: "09:32 AM", event: "Brute force attack blocked", ip: "45.32.178.65", user: "-", severity: "Critical" },
                      { time: "08:17 AM", event: "Malware detected and removed", ip: "-", user: "alice@example.com", severity: "Critical" },
                      { time: "07:05 AM", event: "File permission change", ip: "192.168.1.101", user: "bob@example.com", severity: "Info" },
                      { time: "02:43 AM", event: "Plugin update completed", ip: "-", user: "System", severity: "Info" },
                    ].map((log, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${log.severity === 'Critical' ? 'bg-red-500' : log.severity === 'Warning' ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
                          <div>
                            <p className="font-medium">{log.event}</p>
                            <p className="text-sm text-muted-foreground">{log.time} • IP: {log.ip}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-sm">{log.user}</p>
                          </div>
                          <Button variant="outline" size="sm">Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Export Logs</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing" className="space-y-4">
              <h2 className="text-2xl font-bold">Billing & Invoices</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Revenue</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold">$1,240</p>
                      <p className="text-sm text-muted-foreground">Current Month</p>
                    </div>
                    <div className="mt-6 flex justify-between text-sm">
                      <div className="text-center">
                        <p className="font-medium">$980</p>
                        <p className="text-muted-foreground">Last Month</p>
                      </div>
                      <div className="text-center text-green-600">
                        <p className="font-medium">+26.5%</p>
                        <p>Growth</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Active Subscriptions</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Free</span>
                          <span>12 users</span>
                        </div>
                        <Progress value={24} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Standard</span>
                          <span>28 users</span>
                        </div>
                        <Progress value={56} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Enterprise</span>
                          <span>10 users</span>
                        </div>
                        <Progress value={20} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { user: "John Doe", amount: "$10.00", date: "Apr 20, 2025", status: "Completed" },
                        { user: "Jane Smith", amount: "$50.00", date: "Apr 19, 2025", status: "Completed" },
                        { user: "Bob Johnson", amount: "$10.00", date: "Apr 18, 2025", status: "Refunded" },
                      ].map((transaction, i) => (
                        <div key={i} className="flex justify-between text-sm py-2 border-b">
                          <div>
                            <p>{transaction.user}</p>
                            <p className="text-muted-foreground">{transaction.date}</p>
                          </div>
                          <div className="text-right">
                            <p className={`font-medium ${transaction.status === 'Refunded' ? 'text-red-500' : ''}`}>{transaction.amount}</p>
                            <p className={`text-xs ${transaction.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>{transaction.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Invoices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: "INV-001", user: "John Doe", email: "john@example.com", amount: "$10.00", date: "Apr 20, 2025", status: "Paid" },
                      { id: "INV-002", user: "Jane Smith", email: "jane@example.com", amount: "$50.00", date: "Apr 19, 2025", status: "Paid" },
                      { id: "INV-003", user: "Bob Johnson", email: "bob@example.com", amount: "$10.00", date: "Apr 18, 2025", status: "Refunded" },
                      { id: "INV-004", user: "Alice Brown", email: "alice@example.com", amount: "$10.00", date: "Apr 17, 2025", status: "Paid" },
                    ].map((invoice, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b">
                        <div>
                          <p className="font-medium">{invoice.id}: {invoice.user}</p>
                          <p className="text-sm text-muted-foreground">{invoice.email}</p>
                        </div>
                        <div className="flex items-center space-x-8">
                          <div className="text-right">
                            <p className="font-medium">{invoice.amount}</p>
                            <p className="text-sm text-muted-foreground">{invoice.date}</p>
                          </div>
                          <div>
                            <span className={`text-xs px-2 py-1 rounded ${invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {invoice.status}
                            </span>
                          </div>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
