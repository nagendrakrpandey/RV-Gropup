import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/assets/Logo.png";
import { HiOutlineDownload } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Broucher from "@/assets/Broucher.pdf";

const categories = [
  { name: "HOME", path: "/" },
  {
    name: "ABOUT US",
    submenu: [
      { name: "Company Profile", path: "/about" },
      { name: "Vision, Mission and Values", path: "/Vision" },
      { name: "Our Core Values", path: "/Core" },
      { name: "Our Team", path: "/Team" },
    ],
  },
  { name: "PRODUCTS", path: "/product" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CONTACT US", path: "/contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setOpenSubmenu(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle navigation and close menu
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  // Toggle submenu in mobile view
  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-black shadow-lg" 
        : "bg-background/95 backdrop-blur-md border-b border-border/50"
    }`}>
      
      {/* Top bar - Responsive */}
      <div className="w-full bg-[#2e220b] text-white text-xs sm:text-sm">
        <div className="container mx-auto px-3 sm:px-4 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            {/* Timing - Always visible */}
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mon - Sat 10:00 - 18:00
            </span>
            
            {/* Address - Hidden on very small screens */}
            <span className="hidden sm:flex items-center gap-1 text-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Tower A, ATS Bouquet, Sector-132, Noida 201304
            </span>
            
            {/* Phone - Always visible */}
            <a href="tel:+919289874738" className="flex items-center gap-1 hover:text-amber-300 transition-colors">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91-9289874738
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          
          {/* Logo - Responsive sizing */}
          <Link to="/" className="flex items-center shrink-0" onClick={() => setIsMenuOpen(false)}>
            <img
              src={Logo}
              alt="RV Spirit Logo"
              className="h-10 sm:h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-6">
            {categories.map((category, index) => (
              <div key={index} className="relative group">
                
                {/* Main Menu Item */}
                {category.submenu ? (
                  <div className="relative">
                    <button
                      className="relative px-2 xl:px-3 py-2 font-medium text-white-800 hover:text-red-600 transition duration-300 group-hover:text-red-600 text-sm xl:text-base"
                    >
                      {category.name}
                      <ChevronDown className="inline-block ml-1 w-3 h-3 xl:w-4 xl:h-4" />
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    
                    {/* Dropdown */}
                    <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-2xl rounded-md opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                      <ul className="py-2">
                        {category.submenu.map((item, i) => (
                          <li key={i}>
                            <Link
                              to={item.path}
                              className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-200 text-sm"
                            >
                              <span className="text-red-600 text-lg">›</span>
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={category.path}
                    className="relative px-2 xl:px-3 py-2 font-medium text-white-800 hover:text-red-600 transition duration-300 text-sm xl:text-base after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {category.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Download Button and Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Download Button - Hidden on mobile, visible on tablet and desktop */}
            <Button
              className="hidden md:flex items-center gap-2 px-3 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-300 text-black font-semibold shadow-lg hover:scale-105 transition duration-300 text-xs sm:text-sm whitespace-nowrap"
              onClick={() => {
                const link = document.createElement("a");
                link.href = Broucher;
                link.download = "Broucher.pdf";
                link.click();
              }}
            >
              <HiOutlineDownload className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Download Brochure</span>
              <span className="sm:hidden">Brochure</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-gray-800 hover:text-red-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide down with smooth animation */}
      <div
        className={`lg:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "max-h-[80vh] opacity-100 visible" 
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4 overflow-y-auto max-h-[70vh]">
          {/* Search Input */}
          <Input 
            placeholder="Search..." 
            className="mb-4 w-full"
          />

          {/* Navigation Links */}
          <nav className="space-y-2">
            {categories.map((category, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0">
                {category.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="flex items-center justify-between w-full py-3 hover:text-red-600 transition-colors"
                    >
                      <span className="font-medium text-gray-800">{category.name}</span>
                      <ChevronDown 
                        className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                          openSubmenu === index ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                    <div 
                      className={`ml-4 space-y-2 overflow-hidden transition-all duration-200 ${
                        openSubmenu === index ? "max-h-96 pb-2" : "max-h-0"
                      }`}
                    >
                      {category.submenu.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => handleNavigation(item.path)}
                          className="block w-full text-left py-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
                        >
                          <span className="mr-2">›</span>
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(category.path)}
                    className="block w-full text-left py-3 font-medium text-gray-800 hover:text-red-600 transition-colors"
                  >
                    {category.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Download Button in Mobile Menu */}
          <Button
            className="w-full mt-4 flex items-center justify-center gap-2 px-3 sm:px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-300 text-black font-semibold shadow-lg hover:scale-105 transition duration-300 text-xs sm:text-sm"
            onClick={() => {
              const link = document.createElement("a");
              link.href = Broucher;
              link.download = "Broucher.pdf";
              link.click();
              setIsMenuOpen(false);
            }}
          >
            <HiOutlineDownload className="w-3 h-3 sm:w-4 sm:h-4" />
            Download Brochure
          </Button>

          {/* Mobile Contact Info */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Tower A, ATS Bouquet, Sector-132, Noida 201304
              </p>
              <a href="tel:+919289874738" className="flex items-center gap-2 text-gray-600 hover:text-red-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91-9289874738
              </a>
              <p className="flex items-center gap-2 text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon - Sat 10:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};