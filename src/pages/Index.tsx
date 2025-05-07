
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Info, Settings, Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to Simple App</h1>
            <p className="text-xl text-gray-600 mb-8">A clean, minimal interface for your everyday needs.</p>
            <Button size="lg" className="rounded-full px-8">Get Started</Button>
          </div>
        </section>
        
        {/* Feature Cards */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card 
                title="Simple Design" 
                description="Clean and intuitive interface that's easy to navigate and use."
                icon={<Info size={24} />}
              />
              <Card 
                title="Customizable" 
                description="Tailor the app to your preferences with easy customization options."
                icon={<Settings size={24} />}
              />
              <Card 
                title="Fast Search" 
                description="Find what you need quickly with our powerful search functionality."
                icon={<Search size={24} />}
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-6 bg-blue-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-lg text-gray-600 mb-8">Join thousands of users who love our simple application.</p>
            <Button size="lg" className="rounded-full px-8">Try it Now</Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
