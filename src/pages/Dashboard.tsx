
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
  Globe, 
  Home, 
  Lock, 
  LogOut, 
  Server, 
  Settings, 
  Shield 
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("sites");
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-8 border-b">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">Cloud Haven Host</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button variant="ghost" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </nav>
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 h-[calc(100vh-4rem)] border-r pt-6 px-4">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("sites")}>
              <Globe className="h-4 w-4 mr-2" />
              My Sites
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("stats")}>
              <GaugeCircle className="h-4 w-4 mr-2" />
              Performance
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("security")}>
              <Shield className="h-4 w-4 mr-2" />
              Security
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("backups")}>
              <Database className="h-4 w-4 mr-2" />
              Backups
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("billing")}>
              <FileText className="h-4 w-4 mr-2" />
              Billing
            </Button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList>
              <TabsTrigger value="sites">My Sites</TabsTrigger>
              <TabsTrigger value="stats">Performance</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="backups">Backups</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sites" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">My WordPress Sites</h2>
                <Button>
                  Create New Site
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Site Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>myblog.cloudhaven.host</CardTitle>
                    <CardDescription>Standard Plan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Storage</span>
                        <span>2.3 GB / 10 GB</span>
                      </div>
                      <Progress value={23} />
                      
                      <div className="flex justify-between text-sm">
                        <span>Bandwidth</span>
                        <span>45 GB / 100 GB</span>
                      </div>
                      <Progress value={45} />
                      
                      <div className="flex justify-between text-sm mt-4">
                        <span>Status</span>
                        <span className="text-green-500">Online</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Server className="h-4 w-4 mr-2" />
                      Manage
                    </Button>
                    <Button size="sm">
                      WordPress Admin
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Add new site card */}
                <Card className="border-dashed flex items-center justify-center cursor-pointer hover:bg-secondary/50 transition-colors">
                  <CardContent className="flex flex-col items-center py-8">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground">Add a new WordPress site</p>
                    <p className="text-xs text-muted-foreground">0 of 1 sites used on Standard plan</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="stats" className="space-y-4">
              <h2 className="text-2xl font-bold">Performance Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>CPU Usage</CardTitle>
                  </CardHeader>
                  <CardContent className="h-60 flex items-center justify-center">
                    <GaugeCircle className="h-32 w-32 text-cloud-blue-500" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Memory Usage</CardTitle>
                  </CardHeader>
                  <CardContent className="h-60 flex items-center justify-center">
                    <div className="w-full">
                      <div className="flex justify-between mb-2">
                        <span>RAM</span>
                        <span>234 MB / 1 GB</span>
                      </div>
                      <Progress value={23} />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Traffic</CardTitle>
                  </CardHeader>
                  <CardContent className="h-60 flex items-center justify-center">
                    <BarChart className="h-32 w-32 text-cloud-blue-500" />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-4">
              <h2 className="text-2xl font-bold">Security Center</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>SSL Certificates</CardTitle>
                    <CardDescription>Free Let's Encrypt (Standard Plan)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Lock className="h-5 w-5 text-green-500" />
                        <div>
                          <p className="font-medium">myblog.cloudhaven.host</p>
                          <p className="text-sm text-muted-foreground">Valid until: Oct 21, 2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">Manage SSL</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Security Features</CardTitle>
                    <CardDescription>Standard Plan Security</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-green-500" />
                          <span>Firewall</span>
                        </div>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-green-500" />
                          <span>Malware Scanning</span>
                        </div>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-gray-400" />
                          <span>IP Blocking</span>
                        </div>
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Enterprise Only</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="backups" className="space-y-4">
              <h2 className="text-2xl font-bold">Backups</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Site Backups</CardTitle>
                  <CardDescription>Daily backups for 14 days (Standard Plan)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({length: 5}).map((_, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b">
                        <div>
                          <p className="font-medium">{`April ${21 - i}, 2025 - 02:00 AM`}</p>
                          <p className="text-sm text-muted-foreground">myblog.cloudhaven.host</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Download</Button>
                          <Button variant="outline" size="sm">Restore</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing" className="space-y-4">
              <h2 className="text-2xl font-bold">Billing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Current Plan</CardTitle>
                    <CardDescription>Standard Plan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between py-2 border-b">
                      <span>Monthly fee</span>
                      <span className="font-medium">$10.00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>Next billing date</span>
                      <span>May 21, 2025</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Payment method</span>
                      <span>Visa ending in 4242</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Change Plan</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Usage</CardTitle>
                    <CardDescription>Current billing period</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Storage</span>
                          <span>2.3 GB / 10 GB</span>
                        </div>
                        <Progress value={23} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Bandwidth</span>
                          <span>45 GB / 100 GB</span>
                        </div>
                        <Progress value={45} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
