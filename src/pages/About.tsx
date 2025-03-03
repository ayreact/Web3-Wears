
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

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

const KeyFeatures = () => {
  const features = [
    { 
      feature: "Online Shopping Experience", 
      desc: "A regular e-commerce platform where users can browse and purchase fashion items.",
    },
    { 
      feature: "Third-Party Edition Hosting", 
      desc: "A platform hosting exclusive third-party fashion editions inspired by the Web3 ecosystem.",
    },
    { 
      feature: "Reward & NFT Integration", 
      desc: "Customers accumulate points for every purchase made them eligible to mint exclusive, limited-edition NFTs.",
    },
    { 
      feature: "Customization & Personalization", 
      desc: "Users can request customized designs tailored to their style and preferences.",
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-white dark:bg-gray-900 overflow-visible">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-7">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            The Marketplace & Features
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Web3 Wears provides a unique e-commerce experience with amazing features
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ul className='list-disc list-inside'>
            {features.map((item) => (
              <li key={item.feature} className='prose prose-lg max-w-none space-y-6 text-gray-600 dark:text-gray-300 mb-4'>
                <span className='text-xl leading-relaxed font-bold'>{item.feature}: </span>
                <span className='text-xl leading-relaxed'>{item.desc}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const Audience = () => {
  const psets = [
    { 
      pset: "Web3 Inclined Individuals", 
      desc: "Early adopters of Web3 technology, passionate about decentralization, seeking fashion that reflects their values.",
    },
    { 
      pset: "Crypto Inclined Individuals", 
      desc: "Investors and enthusiasts of cryptocurrencies, interested in fashion showcasing their crypto community affiliation.",
    },
    { 
      pset: "Privacy-Conscious Individuals", 
      desc: "Crypto users who prefer unique fashion while maintaining anonymity.",
    },
    { 
      pset: "General Public", 
      desc: "Individuals curious about Web3 and blockchain technology, seeking fashionable, accessible products that introduce them to the space.",
    },
  ];

  return (
    <section className="relative py-0 px-4 bg-white dark:bg-gray-900 overflow-visible">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-7">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Targeted Audience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We aim to have every kind of individual across the world as a customer
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ul className='list-disc list-inside'>
            {psets.map((item) => (
              <li key={item.pset} className='prose prose-lg max-w-none space-y-6 text-gray-600 dark:text-gray-300 mb-4'>
                <span className='text-xl leading-relaxed font-bold'>{item.pset}: </span>
                <span className='text-xl leading-relaxed'>{item.desc}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link to="/">
            <Button variant="outline" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Button>
          </Link>
          <ThemeToggle />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center overflow-hidden">
            <img
              src='/logo.svg'
              alt='W3W'
              className='w-100 h-100'
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Web3 Wears
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-600 dark:text-gray-300">
            <p className="text-xl leading-relaxed">
            Web3 Wears is where fashion meets blockchain technology, transforming the way people engage with Fashion. Every purchase earns users reward points, which can be redeemed for exclusive, limited-edition fashion NFTs (TBA), seamlessly blending digital ownership with real-world style.
            </p>
            
            <p className="text-xl leading-relaxed">
            By integrating NFTs, crypto payments, and blockchain rewards, Web3 Wears makes blockchain technology more accessible, engaging, and practical. Each NFT is more than just a collectible — it comes with a physical fashion item, creating a unique shopping experience that merges innovation with self-expression.
            </p>
            
            <p className="text-xl leading-relaxed">
            By integrating NFTs, crypto payments, and blockchain rewards, Web3 Wears makes blockchain technology more accessible, engaging, and practical. Each NFT is more than just a collectible—it comes with a physical fashion item, creating a unique shopping experience that merges innovation with self-expression.
            </p>
          </div>
        </motion.div>

        <KeyFeatures />
        <Audience />
      </div>
    </div>
  );
};

export default About;







































