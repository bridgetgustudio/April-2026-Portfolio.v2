import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Mail, Linkedin, Hand, Coffee } from 'lucide-react';
import { motion } from 'motion/react';
import { FooterIllustrations } from '@/app/components/FooterIllustrations';

export function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isWaveHovered, setIsWaveHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const caseStudies = [
    { slug: 'shell-energy', title: 'Shell Energy Design System' },
    { slug: 'ask-chevron', title: 'AskChevron Virtual Agent' },
    { slug: 'att-smb', title: 'AT&T SMB E-Commerce' },
    { slug: 'service-design', title: 'Strategy & Service Design' },
    { slug: 'soundtouch', title: 'SoundTouch' },
    { slug: 'amazon-middle-mile', title: 'Amazon Middle Mile' },
  ];

  return (
    <footer className="mt-32 relative overflow-hidden">
      {/* Gradient background that transitions based on scroll */}
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: scrollProgress > 0.7 
            ? 'linear-gradient(to bottom, #0a0a0a, #000000)'
            : `linear-gradient(to bottom, 
                var(--warm-gradient-start) 0%, 
                var(--warm-gradient-mid) 30%,
                var(--warm-gradient-end) 60%,
                var(--gold-accent) 100%)`,
          opacity: scrollProgress > 0.7 ? 1 : 0.15,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-[31px]">
        {/* Portfolio Illustrations - positioned at top of footer */}
        <div className="mb-12">
          <FooterIllustrations />
        </div>
        
        {/* Quick Links */}
        <div className="mb-16">
          <h3 
            className="font-heading text-2xl mb-6 transition-colors duration-1000"
            style={{
              color: scrollProgress > 0.7 ? '#ffffff' : 'inherit'
            }}
          >
            Selected Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudies
              .filter(study => ['shell-energy', 'att-smb', 'soundtouch', 'amazon-middle-mile'].includes(study.slug))
              .sort((a, b) => {
                const order = ['shell-energy', 'att-smb', 'soundtouch', 'amazon-middle-mile'];
                return order.indexOf(a.slug) - order.indexOf(b.slug);
              })
              .map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/work/${study.slug}`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group flex items-center gap-3 p-4 rounded-lg hover:bg-white/10 transition-all"
                  style={{
                    color: scrollProgress > 0.7 ? '#ffffff' : 'inherit'
                  }}
                >
                  <span className="size-1.5 rounded-full bg-current opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="font-body text-sm font-light">{study.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Give me a wave! Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="backdrop-blur-sm bg-white/5 dark:bg-white/5 rounded-2xl p-8 relative group overflow-hidden"
          style={{
            boxShadow: '0 0 0 1px rgba(220, 38, 38, 0.3), 0 0 0 1px rgba(134, 239, 172, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 0 2px rgba(220, 38, 38, 0.8), 0 0 0 2px rgba(134, 239, 172, 0.8)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 0 1px rgba(220, 38, 38, 0.3), 0 0 0 1px rgba(134, 239, 172, 0.3)';
          }}
        >
          {/* Animated gradient border */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, #dc2626 0%, #86efac 100%)',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              padding: '2px',
            }}
          />
          
          {/* Heading with waving hand icon */}
          <div 
            className="mb-4 flex items-center gap-3 group/wave relative z-10"
            onMouseEnter={() => setIsWaveHovered(true)}
            onMouseLeave={() => setIsWaveHovered(false)}
          >
            <h3 
              className="font-heading text-3xl transition-colors duration-1000 cursor-pointer"
              style={{
                color: scrollProgress > 0.7 ? '#ffffff' : 'inherit'
              }}
            >
              Give me a wave!
            </h3>
            <motion.div
              animate={isWaveHovered ? {
                rotate: [0, 14, -8, 14, -4, 10, 0, 14, -8, 14, 0],
              } : {
                rotate: 0
              }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: isWaveHovered ? Infinity : 0,
                repeatDelay: 0.3,
              }}
              style={{
                transformOrigin: "70% 70%",
              }}
            >
              <Hand 
                className="size-8" 
                style={{
                  color: '#ffffff',
                }}
              />
            </motion.div>
          </div>
          
          <p 
            className="font-body text-lg font-light leading-relaxed transition-colors duration-1000 relative z-10 mb-6"
            style={{
              color: scrollProgress > 0.7 ? '#ffffff' : 'inherit'
            }}
          >
            Thank you for visiting my studio! Feel free to contact me to discuss my work, collaborate on new projects, or if you'd just like to say hi.
          </p>
          
          {/* Contact Information */}
          <div className="flex items-center gap-6 relative z-10">
            <a
              href="mailto:bridget.gu.lee@gmail.com"
              className="group flex items-center gap-3 hover:opacity-70 transition-opacity"
              style={{
                color: scrollProgress > 0.7 ? '#ffffff' : 'inherit'
              }}
            >
              <Mail className="size-5" />
              <span className="font-body text-sm font-light">Email</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 hover:opacity-70 transition-opacity"
              style={{
                color: scrollProgress > 0.7 ? '#ffffff' : 'inherit'
              }}
            >
              <Linkedin className="size-5" />
              <span className="font-body text-sm font-light">LinkedIn</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1PwHokQ7d3KYXE0CJHr6NRR-7ahnQviE8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 hover:opacity-70 transition-opacity"
              style={{
                color: scrollProgress > 0.7 ? '#ffffff' : 'inherit'
              }}
            >
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="font-body text-sm font-light">Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Copyright */}
        <div 
          className="mt-12 pt-8 border-t transition-all duration-1000"
          style={{
            borderColor: scrollProgress > 0.7 ? 'rgba(255, 255, 255, 0.2)' : 'var(--border)',
            color: scrollProgress > 0.7 ? '#ffffff' : 'var(--muted-foreground)'
          }}
        >
          <p className="font-body text-sm font-light text-center flex items-center justify-center gap-2">
            made by bridget gu lee with
            <Coffee 
              className="size-5" 
              style={{ color: '#ffffff' }}
            />
            +
            <span className="text-xl" role="img" aria-label="croissant">🥐</span>
            2026
          </p>
        </div>
      </div>
    </footer>
  );
}