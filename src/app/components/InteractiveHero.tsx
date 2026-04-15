import { motion } from 'motion/react';
import { useState } from 'react';
import HeroBannerVisualComponent from '@/imports/HeroBannerVisualComponent-20-341';
import { Clock, Building2 } from 'lucide-react';

export function InteractiveHero() {
  const [clicked, setClicked] = useState<Set<string>>(new Set());
  const [hovered, setHovered] = useState<string | null>(null);
  const [experienceHovered, setExperienceHovered] = useState<string | null>(null);

  const handleClick = (key: string) => {
    setClicked(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
    // Clear hover when clicking
    setHovered(null);
  };

  const InteractivePhrases = () => {
    const phrases = [
      { key: 'storyteller', text: 'Visual storyteller' },
      { key: 'systemsThinker', text: 'systems thinker' },
      { key: 'designer', text: 'UI/UX designer' },
    ];

    return (
      <>
        {phrases.map((phrase, index) => {
          const isClicked = clicked.has(phrase.key);
          const isHovered = hovered === phrase.key;
          const showEffect = isClicked || isHovered;
          
          return (
            <span key={phrase.key}>
              <span
                className="relative inline-block cursor-pointer px-3 py-1 -mx-3 -my-1 rounded-full"
                style={{
                  fontWeight: 500,
                  color: showEffect ? 'transparent' : 'var(--foreground)',
                  fontStyle: showEffect ? 'italic' : 'normal',
                  backgroundClip: showEffect ? 'text' : 'unset',
                  WebkitBackgroundClip: showEffect ? 'text' : 'unset',
                  backgroundImage: showEffect 
                    ? 'linear-gradient(135deg, var(--crimson), var(--sunset-orange))' 
                    : 'none',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={() => {
                  if (!clicked.has(phrase.key)) {
                    setHovered(phrase.key);
                  }
                }}
                onMouseLeave={() => {
                  if (!clicked.has(phrase.key)) {
                    setHovered(null);
                  }
                }}
                onClick={() => handleClick(phrase.key)}
              >
                {/* Liquid glass bubble */}
                <motion.span
                  className="absolute inset-0 rounded-full backdrop-blur-xl -z-10 pointer-events-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: showEffect ? 1 : 0,
                    scale: showEffect ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  style={{
                    background: 'var(--glass-background)',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow)',
                  }}
                />
                {phrase.text}
              </span>
              {index === 0 && ', '}
              {index === 1 && ', and '}
            </span>
          );
        })}
      </>
    );
  };

  return (
    <div className="relative min-h-[70vh] flex items-center gap-16">
      {/* Left Side: Text Content */}
      <motion.div
        className="relative z-10 flex-1"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Name - Large Display */}
        <div className="mb-12">
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-0 leading-[0.95]">
            Bridget
          </h1>
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-0 leading-[0.95]">
            Gu Lee
          </h1>
        </div>

        {/* Description - Clean Typography */}
        <div className="max-w-2xl">
          <p className="font-body text-xl md:text-2xl leading-relaxed font-medium">
            <InteractivePhrases /> at IBM with experience across design systems, e-commerce strategy, and AI-powered solutions.
          </p>
          
          {/* Experience highlights */}
          <div className="flex gap-5 mt-8">
            <span 
              className="relative flex items-center gap-2 text-sm font-light tracking-wide cursor-pointer transition-all duration-300"
              style={{
                color: 'var(--crimson)',
                opacity: 0.8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.fontStyle = 'italic';
                setExperienceHovered('product');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.8';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.fontStyle = 'normal';
                setExperienceHovered(null);
              }}
            >
              <Clock 
                size={16} 
                style={{
                  color: 'var(--crimson)',
                  transition: 'all 0.3s ease',
                }}
              />
              <span><strong>2+</strong> Years of Product Experience</span>
            </span>
            <span 
              className="relative flex items-center gap-2 text-sm font-light tracking-wide cursor-pointer transition-all duration-300"
              style={{
                color: 'var(--crimson)',
                opacity: 0.8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.fontStyle = 'italic';
                setExperienceHovered('clients');
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.8';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.fontStyle = 'normal';
                setExperienceHovered(null);
              }}
            >
              <Building2 
                size={16} 
                style={{
                  color: 'var(--crimson)',
                  transition: 'all 0.3s ease',
                }}
              />
              <span><strong>3</strong> Clients Across Industries</span>
            </span>
          </div>
        </div>

        {/* Subtle accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-[2px] mt-8"
          style={{
            background: 'linear-gradient(90deg, var(--crimson), var(--sunset-orange))',
          }}
        />
      </motion.div>

      {/* Right Side: Hero Banner Visual Component - Three Interactive Frames */}
      <div className="relative flex-shrink-0 -mt-[140px] ml-[115px]">
        <div className="relative scale-50 origin-left">
          {/* Sub-frame #1: Chinese Knot / Visual Storyteller */}
          <motion.div
            className="pointer-events-auto"
            data-frame="visual-storyteller"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="[&>div]:h-[610.109px] [&>div]:w-[628.191px]">
              <HeroBannerVisualComponent 
                storytellerHovered={hovered === 'storyteller'}
                storytellerClicked={clicked.has('storyteller')}
                systemsThinkerHovered={hovered === 'systemsThinker'}
                systemsThinkerClicked={clicked.has('systemsThinker')}
                uiUxDesignerHovered={hovered === 'designer'}
              />
            </div>
          </motion.div>

          {/* Sub-frame #2: Systems Thinking Illustration */}
          <motion.div
            className="absolute pointer-events-auto"
            data-frame="systems-thinker"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* This frame is positioned within the main component at left-[418.1px] top-[163px] */}
          </motion.div>

          {/* Sub-frame #3: UI/UX Designer Cursor */}
          <motion.div
            className="absolute pointer-events-auto"
            data-frame="ui-ux-designer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* This frame is positioned within the main component at left-[168.1px] top-[532px] */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}