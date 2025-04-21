
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Database,
  Globe,
  Lock,
  Server,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-8 border-b">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">Cloud Haven Host</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/" className="text-foreground hover:text-primary">Home</a>
          <a href="/features" className="text-primary font-medium">Features</a>
          <a href="/pricing" className="text-foreground hover:text-primary">Pricing</a>
          <Button variant="outline" size="sm" asChild>
            <a href="/dashboard">Login</a>
          </Button>
          <Button size="sm" asChild>
            <a href="/pricing#sign-up">Sign Up</a>
          </Button>
        </div>
      </nav>
      
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Powerful WordPress Hosting Features</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with the latest technologies to ensure your WordPress sites are fast, secure, and easy to manage.
          </p>
        </div>
        
        {/* Core Technology */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Server className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Modern Web Server</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Nginx with FastCGI caching provides lightning-fast response times for your WordPress sites.</p>
                <ul className="space-y-1 text-sm">
                  <li>• Optimized Nginx configurations</li>
                  <li>• FastCGI caching for static content</li>
                  <li>• HTTP/2 support for faster loading</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Database className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Optimized Database</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">MariaDB optimized specifically for WordPress provides reliable and fast database operations.</p>
                <ul className="space-y-1 text-sm">
                  <li>• Query caching enabled</li>
                  <li>• InnoDB optimizations</li>
                  <li>• Automatic maintenance</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Zap className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Advanced Caching</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Multi-layered caching ensures your WordPress sites load instantly for visitors.</p>
                <ul className="space-y-1 text-sm">
                  <li>• Redis object caching</li>
                  <li>• PHP OPcache enabled</li>
                  <li>• Browser caching headers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Security Features */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Enterprise-Grade Security</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Advanced Protection</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Multiple security layers protect your WordPress sites from common threats.</p>
                <ul className="space-y-1 text-sm">
                  <li>• Fail2ban for brute force protection</li>
                  <li>• ModSecurity web application firewall</li>
                  <li>• Regular malware scanning</li>
                  <li>• Automatic IP blocking for suspicious activity</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Lock className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Isolation & Encryption</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Each site runs in its own isolated container, preventing cross-site vulnerabilities.</p>
                <ul className="space-y-1 text-sm">
                  <li>• Docker/LXD container isolation</li>
                  <li>• Free SSL certificates</li>
                  <li>• Encrypted backups</li>
                  <li>• Secure file permissions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Site Management Features */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Effortless Site Management</h2>
          
          <div className="bg-accent/20 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">User-Friendly Dashboard</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <Globe className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">One-Click WordPress</p>
                      <p className="text-muted-foreground">Launch new WordPress sites with a single click. No technical knowledge required.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <TrendingUp className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Real-Time Stats</p>
                      <p className="text-muted-foreground">Monitor your site's performance, traffic, and resource usage in real-time.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Database className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Automated Backups</p>
                      <p className="text-muted-foreground">Automatic backups ensure your data is safe and can be restored with one click.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Shield className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Security Controls</p>
                      <p className="text-muted-foreground">Manage security settings, force HTTPS, and view access logs from one dashboard.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-md">
                  <div className="h-48 bg-primary/10 rounded flex items-center justify-center text-primary font-medium">
                    Dashboard Interface Preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Auto-Scaling */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Enterprise Auto-Scaling</h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Dynamic Resource Allocation</h3>
                  <p className="text-muted-foreground mb-4">
                    Our Enterprise plan includes auto-scaling technology that automatically adjusts resources based on your traffic patterns.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-primary">1</span>
                      </div>
                      <p>Kubernetes-based container orchestration</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-primary">2</span>
                      </div>
                      <p>Load-balanced PHP-FPM pools</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-primary">3</span>
                      </div>
                      <p>Dynamic database read replicas</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-primary">4</span>
                      </div>
                      <p>Automatic traffic-based scaling</p>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-r from-cloud-blue-500 to-cloud-cyan-500 h-48 w-full rounded-lg shadow-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="font-bold text-xl mb-2">Handles Traffic Spikes</p>
                      <p className="max-w-xs">No more crashed sites during high traffic events</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Comparison Table */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Feature Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-4 border">Feature</th>
                  <th className="text-center p-4 border">Free</th>
                  <th className="text-center p-4 border bg-primary/10">Standard</th>
                  <th className="text-center p-4 border">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border font-medium">WordPress Sites</td>
                  <td className="text-center p-4 border">1 (subdomain only)</td>
                  <td className="text-center p-4 border bg-primary/5">1 (custom domain)</td>
                  <td className="text-center p-4 border">Up to 10 sites</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Storage</td>
                  <td className="text-center p-4 border">1 GB</td>
                  <td className="text-center p-4 border bg-primary/5">10 GB</td>
                  <td className="text-center p-4 border">50 GB</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Bandwidth</td>
                  <td className="text-center p-4 border">10 GB/month</td>
                  <td className="text-center p-4 border bg-primary/5">100 GB/month</td>
                  <td className="text-center p-4 border">Unlimited (fair use)</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">SSL Certificate</td>
                  <td className="text-center p-4 border">Shared (SNI)</td>
                  <td className="text-center p-4 border bg-primary/5">Free Let's Encrypt</td>
                  <td className="text-center p-4 border">Wildcard SSL</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Caching</td>
                  <td className="text-center p-4 border">Basic (Nginx)</td>
                  <td className="text-center p-4 border bg-primary/5">Redis + Nginx</td>
                  <td className="text-center p-4 border">Full-page + Object Cache</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Staging Sites</td>
                  <td className="text-center p-4 border">❌</td>
                  <td className="text-center p-4 border bg-primary/5">✅ (1 site)</td>
                  <td className="text-center p-4 border">✅ (3 sites)</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Backups</td>
                  <td className="text-center p-4 border">Manual (7 days)</td>
                  <td className="text-center p-4 border bg-primary/5">Daily (14 days)</td>
                  <td className="text-center p-4 border">Real-time (30 days)</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">CDN</td>
                  <td className="text-center p-4 border">❌</td>
                  <td className="text-center p-4 border bg-primary/5">Cloudflare Free</td>
                  <td className="text-center p-4 border">Enterprise CDN</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Support</td>
                  <td className="text-center p-4 border">Community</td>
                  <td className="text-center p-4 border bg-primary/5">Email (24h)</td>
                  <td className="text-center p-4 border">Priority Live Chat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to experience better WordPress hosting?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who have switched to Cloud Haven Host for faster, more secure WordPress sites.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="/pricing">View Pricing</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="/pricing#sign-up">Start Free Trial</a>
            </Button>
          </div>
        </section>
      </div>
      
      <footer className="bg-muted py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Cloud Haven Host</h3>
              <p className="text-muted-foreground">Simple, fast, and secure WordPress hosting powered by the latest cloud technology.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="/features" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>© 2025 Cloud Haven Host. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;
