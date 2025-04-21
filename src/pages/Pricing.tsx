
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    description: "Get started with WordPress hosting",
    price: "0",
    features: [
      { name: "1 Site (subdomain only)", included: true },
      { name: "1 GB Storage", included: true },
      { name: "10 GB/month Bandwidth", included: true },
      { name: "Shared SSL (SNI)", included: true },
      { name: "Auto-managed WordPress Updates", included: true },
      { name: "Basic Nginx Caching", included: true },
      { name: "Staging Sites", included: false },
      { name: "Manual Backups (last 7 days)", included: true },
      { name: "CDN", included: false },
      { name: "Community Support (Docs/Forum)", included: true },
    ],
  },
  {
    name: "Standard",
    description: "For professional blogs and small businesses",
    price: "10",
    popular: true,
    features: [
      { name: "1 Site (custom domain)", included: true },
      { name: "10 GB Storage", included: true },
      { name: "100 GB/month Bandwidth", included: true },
      { name: "Free Let's Encrypt SSL", included: true },
      { name: "Manual WordPress Update Control", included: true },
      { name: "Redis + Nginx Caching", included: true },
      { name: "1 Staging Site", included: true },
      { name: "Daily Backups (14 days)", included: true },
      { name: "Cloudflare Free CDN", included: true },
      { name: "Email Support (24h response)", included: true },
    ],
  },
  {
    name: "Enterprise",
    description: "For businesses with multiple sites and high traffic",
    price: "50",
    features: [
      { name: "Up to 10 Sites", included: true },
      { name: "50 GB Storage", included: true },
      { name: "Unlimited Bandwidth (fair use)", included: true },
      { name: "Wildcard SSL", included: true },
      { name: "Full WordPress Version Control", included: true },
      { name: "Full-page + Object Cache", included: true },
      { name: "3 Staging Sites", included: true },
      { name: "Real-time Backups (30 days)", included: true },
      { name: "Enterprise CDN", included: true },
      { name: "Priority Live Chat Support", included: true },
    ],
  },
];

const FeatureItem = ({ feature }: { feature: { name: string; included: boolean } }) => (
  <div className="flex items-center py-2">
    {feature.included ? (
      <Check className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
    ) : (
      <X className="h-4 w-4 mr-2 text-gray-300 flex-shrink-0" />
    )}
    <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
  </div>
);

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-8 border-b">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">Cloud Haven Host</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/" className="text-foreground hover:text-primary">Home</a>
          <a href="/features" className="text-foreground hover:text-primary">Features</a>
          <a href="/pricing" className="text-primary font-medium">Pricing</a>
          <Button variant="outline" size="sm" asChild>
            <a href="/dashboard">Login</a>
          </Button>
          <Button size="sm" asChild>
            <a href="#sign-up">Sign Up</a>
          </Button>
        </div>
      </nav>
      
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that matches your WordPress hosting needs. All plans include our core performance and security features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <div className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex} feature={feature} />
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center max-w-3xl mx-auto" id="sign-up">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sign up in minutes and start building your WordPress site with Cloud Haven Host. No credit card required for our Free tier.
          </p>
          <Button size="lg" className="px-8">Create Your Free Site Now</Button>
        </div>
        
        <div className="mt-20 border-t pt-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold mb-2">Can I upgrade my plan later?</h3>
              <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of your billing cycle.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">How do I get my custom domain working?</h3>
              <p className="text-muted-foreground">Once you've purchased a Standard or Enterprise plan, you can add your custom domain in the dashboard. We'll guide you through updating your DNS settings.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">What kind of support do you offer?</h3>
              <p className="text-muted-foreground">Free plan users get access to our documentation and community forum. Standard plan includes email support, and Enterprise plan includes priority live chat support.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">How secure is Cloud Haven Host?</h3>
              <p className="text-muted-foreground">All sites run in isolated containers. We include malware scanning, brute-force protection, and daily offsite backups to keep your site secure.</p>
            </div>
          </div>
        </div>
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

export default Pricing;
