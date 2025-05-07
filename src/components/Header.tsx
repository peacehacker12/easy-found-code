
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-medium">Simple App</h1>
        
        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu />
            </Button>
            
            {isMenuOpen && (
              <div className="absolute top-16 right-0 left-0 bg-white shadow-md p-4 z-50 animate-fade-in">
                <nav className="flex flex-col space-y-4">
                  <Button variant="ghost">Home</Button>
                  <Button variant="ghost">About</Button>
                  <Button variant="ghost">Contact</Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
