import { Link, useLocation } from 'react-router';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFooterInView, setIsFooterInView] = useState(false);

  // Track footer visibility
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Footer is considered "in view" when any part of it is visible
        const inView = rect.top < windowHeight && rect.bottom > 0;
        setIsFooterInView(inView);
      }
    };

    // Initial check
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '#contact', label: 'Contact', isAnchor: true },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto">
        <div 
          className="backdrop-blur-xl rounded-2xl px-6 py-3"
          style={{ 
            background: 'var(--glass-background)',
            border: '1px solid var(--glass-border)',
            boxShadow: 'var(--glass-shadow)',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <Link 
              to="/" 
              className="relative font-display text-xl tracking-wide transition-colors"
              style={{
                color: isLogoHovered ? 'var(--crimson)' : 'var(--foreground)',
              }}
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              {/* Gradient Circle with Sparkle Effect */}
              <motion.div
                className="absolute -left-10 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, var(--crimson), var(--amber))',
                }}
                animate={{
                  scale: isLogoHovered ? [1, 1.2, 1] : 1,
                  rotate: isLogoHovered ? [0, 180, 360] : 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                }}
              >
                {/* Sparkles */}
                {isLogoHovered && (
                  <>
                    <motion.div
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{ top: '10%', right: '10%' }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    />
                    <motion.div
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{ bottom: '15%', left: '15%' }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    />
                    <motion.div
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{ top: '50%', left: '-10%' }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                    />
                  </>
                )}
              </motion.div>
              bridgetgu.studio
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                link.isAnchor ? (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      const footer = document.querySelector('footer');
                      footer?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="relative font-body text-sm font-light tracking-wide text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.label}
                    {isFooterInView && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px"
                        style={{ backgroundColor: 'var(--crimson)' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={(e) => {
                      // If footer is in view and clicking on current page
                      if (isFooterInView && location.pathname === link.path) {
                        e.preventDefault();
                        if (link.path === '/') {
                          // Scroll to Selected Work section on homepage
                          const selectedWork = document.querySelector('[data-section="selected-work"]');
                          selectedWork?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else if (link.path === '/about') {
                          // Scroll to top of About page
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }
                    }}
                    className="relative font-body text-sm font-light tracking-wide text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                    {location.pathname === link.path && !isFooterInView && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px"
                        style={{ backgroundColor: 'var(--crimson)' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                )
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-300"
                style={{
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="size-4 text-foreground/70" />
                ) : (
                  <Sun className="size-4 text-foreground/70" />
                )}
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-all duration-300"
              style={{
                background: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="size-5 text-foreground/70" />
              ) : (
                <Menu className="size-5 text-foreground/70" />
              )}
            </button>
          </div>

          {/* Mobile Menu Panel */}
          <motion.div
            initial={false}
            animate={{
              height: isMobileMenuOpen ? 'auto' : 0,
              opacity: isMobileMenuOpen ? 1 : 0,
              marginTop: isMobileMenuOpen ? 16 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-4 pt-4 border-t border-foreground/10">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      const footer = document.querySelector('footer');
                      footer?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="relative font-body text-sm font-light tracking-wide text-foreground/70 hover:text-foreground transition-colors py-2 pl-6 cursor-pointer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      // If footer is in view and clicking on current page
                      if (isFooterInView && location.pathname === link.path) {
                        e.preventDefault();
                        if (link.path === '/') {
                          // Scroll to Selected Work section on homepage
                          const selectedWork = document.querySelector('[data-section="selected-work"]');
                          selectedWork?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else if (link.path === '/about') {
                          // Scroll to top of About page
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }
                    }}
                    className="relative font-body text-sm font-light tracking-wide text-foreground/70 hover:text-foreground transition-colors py-2 pl-6"
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-r"
                        style={{ backgroundColor: 'var(--crimson)' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                )
              ))}

              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 py-2 pl-6 font-body text-sm font-light tracking-wide text-foreground/70 hover:text-foreground transition-colors"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="size-4" />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="size-4" />
                    <span>Light Mode</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}