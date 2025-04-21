
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Database, 
  Globe, 
  Lock, 
  Server, 
  Shield, 
  Zap 
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Navigation */}
      <div className="relative bg-gradient-to-b from-cloud-blue-600 to-cloud-blue-800 text-white">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-4 px-8">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Cloud Haven Host</h1>
          </div>
          <div className="flex items-center space-x-6">
            <a href="/" className="text-white font-medium">Home</a>
            <a href="/features" className="text-white/80 hover:text-white">Features</a>
            <a href="/pricing" className="text-white/80 hover:text-white">Pricing</a>
            <Button variant="outline" size="sm" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="/dashboard">Login</a>
            </Button>
            <Button size="sm" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="/pricing#sign-up">Sign Up</a>
            </Button>
          </div>
        </nav>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">WordPress Hosting Reimagined</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            High-performance WordPress hosting powered by modern cloud infrastructure. 
            Faster sites, better security, and easier management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="/pricing">Get Started</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="/features">Explore Features</a>
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Zap className="h-10 w-10 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
              <p className="text-white/80">Optimized stack with Nginx, Redis, and PHP OPcache for blazing speeds.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Shield className="h-10 w-10 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Rock Solid Security</h3>
              <p className="text-white/80">Isolated containers, malware scanning, and brute-force protection.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Globe className="h-10 w-10 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">One-Click WordPress</h3>
              <p className="text-white/80">Launch WordPress sites instantly with our automated provisioning.</p>
            </div>
          </div>
        </div>
        
        {/* Hero wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#f8fafc" fillOpacity="1" d="M0,192L60,208C120,224,240,256,360,250.7C480,245,600,203,720,192C840,181,960,203,1080,218.7C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-24">
        {/* Plans Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible plans designed to match your needs, from personal blogs to enterprise sites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>1 Subdomain Site</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>1 GB Storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>10 GB Monthly Bandwidth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Community Support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <a href="/pricing">Start Free</a>
                </Button>
              </CardContent>
            </Card>
            
            {/* Standard Plan */}
            <Card className="border-primary shadow-lg">
              <CardHeader>
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
                <CardTitle>Standard</CardTitle>
                <CardDescription>For professional sites</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$10</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>1 Custom Domain Site</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>10 GB Storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>100 GB Monthly Bandwidth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Daily Backups (14 days)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Email Support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" asChild>
                  <a href="/pricing">Get Standard</a>
                </Button>
              </CardContent>
            </Card>
            
            {/* Enterprise Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For business-critical sites</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$50</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Up to 10 Custom Domain Sites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>50 GB Storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Unlimited Bandwidth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Real-time Backups (30 days)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Priority Live Chat Support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <a href="/pricing">Get Enterprise</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powered by Modern Technology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our cloud-based WordPress hosting uses the latest open-source technologies to deliver performance and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Optimized Stack</h3>
                    <p className="text-muted-foreground">Nginx with FastCGI caching, MariaDB, and latest PHP version optimized for WordPress.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Containerization</h3>
                    <p className="text-muted-foreground">Each site runs in isolated Docker/LXD containers for maximum security and resource efficiency.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Enhanced Security</h3>
                    <p className="text-muted-foreground">Fail2ban, ModSecurity, and malware scanning keep your WordPress sites safe from threats.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Multi-Layer Caching</h3>
                    <p className="text-muted-foreground">Redis object caching, OPcache, and FastCGI cache for blazing fast WordPress performance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Automated Backups</h3>
                    <p className="text-muted-foreground">Regular offsite backups ensure your data is never lost and can be quickly restored.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Easy Management</h3>
                    <p className="text-muted-foreground">User-friendly dashboard for complete control over your WordPress sites, settings, and resources.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <a href="/features">View All Features</a>
            </Button>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied WordPress users who've switched to Cloud Haven Host.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <p className="italic mb-6">"After trying several WordPress hosts, Cloud Haven is by far the fastest. My site load time decreased from 3s to under 1s!"</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 mr-3"></div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">Food Blogger</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <p className="italic mb-6">"The automated site provisioning saved me hours of setup time. I launched 3 client sites in one afternoon!"</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 mr-3"></div>
                    <div>
                      <p className="font-medium">David Chen</p>
                      <p className="text-sm text-muted-foreground">Web Developer</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <p className="italic mb-6">"The security features are outstanding. We moved our company blog after a security breach with our previous host."</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 mr-3"></div>
                    <div>
                      <p className="font-medium">Michael Torres</p>
                      <p className="text-sm text-muted-foreground">Marketing Director</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-cloud-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of WordPress sites powered by Cloud Haven Host. Start with our free tier, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-cloud-blue-600 hover:bg-white/90" asChild>
              <a href="/pricing">View Plans</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-cloud-blue-600" asChild>
              <a href="/pricing#sign-up">Start Free</a>
            </Button>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="bg-muted py-12">
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

export default Index;
