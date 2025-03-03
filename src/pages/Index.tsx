
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shirt, ShoppingBag, Globe, Sparkles, Shield, LucideIcon, Sun, Moon, ArrowUp, Globe2 } from 'lucide-react';
import { XIcon, WAIcon, TIKIcon, INSIcon, FIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

// Social media configuration object for easy link management
const socialLinks = {
  instagram: "https://www.instagram.com/web3wears?igsh=MTlmcDEzbDNqbzBxZg==",
  twitter: "https://x.com/Web3Wears?t=PNEJEz3EA18I9N9PsIrQHQ&s=09",
  facebook: "https://www.facebook.com/share/1B6N9DQWVU/",
  tiktok: "https://tiktok.com/@w3arz",
  whatsapp: "https://wa.me/8069930803"
};

const SocialLinks = () => (
  <div className="flex items-center">
    {Object.entries({
      instagram: { icon: INSIcon, link: socialLinks.instagram },
      twitter: { icon: XIcon, link: socialLinks.twitter },
      tiktok: { icon: TIKIcon, link: socialLinks.tiktok },
      facebook: { icon: FIcon, link: socialLinks.facebook },
      whatsapp: { icon: WAIcon, link: socialLinks.whatsapp },
    }).map(([platform, { icon: Icon, link }]) => (
      <a
        key={platform}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mr-7 rounded-full transition-colors duration-300"
      >
        <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300 transition-colors duration-300" />
      </a>
    ))}
  </div>
);

const FloatingShapes = () => {
  useEffect(() => {
    const createShape = (className: string) => {
      const shape = document.createElement('div');
      shape.className = `floating-shape ${className}`;
      document.body.appendChild(shape);
      
      // Remove shape after animation completes
      setTimeout(() => {
        shape.remove();
      }, 25000);
    };

    const interval = setInterval(() => {
      createShape('shape-1');
      createShape('shape-2');
      createShape('shape-3');
    }, 8000);

    // Create initial shapes
    createShape('shape-1');
    createShape('shape-2');
    createShape('shape-3');

    return () => {
      clearInterval(interval);
      document.querySelectorAll('.floating-shape').forEach(shape => shape.remove());
    };
  }, []);

  return null;
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: LucideIcon, title: string, description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-300 border border-gray-100"
  >
    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const UpcomingCollections = () => {
  const collections = [
    { name: "Sweat Shirts", image: "/c-image/1.png" },
    { name: "Hoodie", image: "/c-image/2.png" },
    { name: "Hoodie", image: "/c-image/3.png" },
    { name: "Sweat Pants", image: "/c-image/4.png" },
    { name: "T-Shirts", image: "/c-image/5.png" },
    { name: "Shorts", image: "/c-image/6.png" },
    { name: "Vests", image: "/c-image/7.png" },
    { name: "Crop Tops", image: "/c-image/8.png" },
    { name: "Shirts", image: "/c-image/9.png" },
    { name: "Sweat Shirts", image: "/c-image/10.png" },
    { name: "Sweat Shirts", image: "/c-image/11.png" },
    { name: "T-Shirts", image: "/c-image/12.png" },
  ];

  return (
    <section className="relative py-24 px-4 bg-white dark:bg-gray-900 overflow-visible">
      <div className="max-w-10xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Upcoming Collections
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Preview our innovative designs that blend digital art with physical fashion.
          </p>
        </div>
        
        <div className="group relative px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {collections.map((item) => (
                <CarouselItem key={item.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl transition-all duration-300 mx-1"
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">Coming Soon</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="opacity-0 group-hover:opacity-100 w-12 h-12 absolute -left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            />
            <CarouselNext 
              className="opacity-0 group-hover:opacity-100 w-12 h-12 absolute -right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 rounded-full bg-purple-600 dark:bg-purple-500 text-white shadow-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-300 z-50"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  ) : null;
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Get initial theme from localStorage or default to true (dark mode)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      return savedTheme === 'dark';
    }
    return true;
  });

  useEffect(() => {
    // Update localStorage and DOM when theme changes
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
    >
      {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
};

const BrandLogo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <span className="text-3xl sm:text-4xl font-bold pg-logo dark:text-white text-grey-700">W3W</span>
          </div> */}
          <span className="text-4xl sm:text-6xl font-bold bg-gradient-to-r dark:text-white from-purple-600 to-blue-600 bg-clip-text text-transparent pg-logo">
            W3ARZ
          </span>
        </div>

        {/* Desktop: Show social links & theme toggle */}
        <div className="hidden sm:flex items-center gap-4">
          <SocialLinks />
          <ThemeToggle />
        </div>

        {/* Mobile: Show theme toggle */}
        <div className="sm:hidden flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

const BrandSection = () => (
  <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
      >
        <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-xl">
          <img
            src='/logo.svg'
            alt='W3W'
            className='w-100 h-100'
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-display">
            Web3 Wears
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-xl">
            The intersection of fashion and blockchain technology, 
            creating unique digital-physical experiences for the modern fashion enthusiast.
          </p>
          <div className="mt-4 m-0">
            <SocialLinks />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <FloatingShapes />
      <ScrollToTop />
      <BrandLogo />
      
      <div className="fixed inset-0 bg-grid-white/10 pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 dark:bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500 dark:bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-40 left-1/2 w-80 h-80 bg-pink-500 dark:bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-yellow-500 dark:bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      </div>

      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-900/20 dark:via-gray-900 dark:to-blue-900/20" />
        <div className="absolute inset-0 bg-[url('/top-bg.jpeg')] bg-cover bg-center opacity-5" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Innovation in Fashion</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-display">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Web3 Wears: </span>
            Express your identity
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-white mb-8 max-w-2xl mx-auto font-sans">
            Empower Your Expression with Web3 Wears – Where Style Meets Web3 Ideology.
          </p>
          <div className="flex justify-center">
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-purple-200">
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <BrandSection />
      
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Why Web3 Wears?
            </h2>
            <p className="text-gray-600 dark:text-gray-900 max-w-2xl mx-auto">
              Web3 Wears isn’t just clothing brand—it’s a movement. We’re redefining fashion in the Web3 era, making Web3 couture wearable, accessible, and rewarding for all.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shirt,
                title: "Digital Fashion",
                description: "Unique digital wearables authenticated on the blockchain"
              },
              {
                icon: ShoppingBag,
                title: "Exclusive Drops",
                description: "Limited edition releases with proof of authenticity"
              },
              {
                icon: Globe,
                title: "Global Community",
                description: "Connect with fashion enthusiasts worldwide"
              }
            ].map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <UpcomingCollections />

      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Authentication",
                description: "Every piece authenticated on the blockchain"
              },
              {
                icon: Sparkles,
                title: "Premium Quality",
                description: "Highest quality materials and craftsmanship"
              },
              {
                icon: Globe,
                title: "Global Shipping",
                description: "Worldwide delivery on all orders"
              }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                  <badge.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{badge.title}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8">
            Be the first to know about our launch and exclusive drops.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            action='https://formspree.io/f/mkgodplo'
            method='POST'
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
              name="email"
            />
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
