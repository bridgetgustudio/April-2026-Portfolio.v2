import { motion } from 'motion/react';
import { WorkCard } from '@/app/components/WorkCard';
import { InteractiveHero } from '@/app/components/InteractiveHero';
import { FreelanceCarousel } from '@/app/components/FreelanceCarousel';
import { Sparkles, ChevronDown, Heart } from 'lucide-react';
import { useState } from 'react';
import attImage from 'figma:asset/95e6c1cd25a28c5fd4202f0a097433ccb5278f2d.png';
import shellEnergyImage from '/src/imports/shell_energy_main_logo.jpg';
import amazonImage from '/src/imports/amazon.jpg';

export default function Home() {
  const works = [
    {
      slug: 'shell-energy',
      title: 'Shell Energy Design System',
      category: 'Design Systems',
      description: 'A global design systems effort supporting Shell Energy\'s digital expansion across multiple countries and regions, ensuring consistency and scalability.',
      tags: ['Design Systems', 'Enterprise', 'Global Scale'],
      imageUrl: shellEnergyImage,
    },
    {
      slug: 'att-smb',
      title: 'AT&T SMB E-Commerce',
      category: 'User Research & E-Commerce',
      description: 'A comprehensive SMB e-commerce redesign grounded in deep user research, improving the digital shopping experience for small business customers.',
      tags: ['User Research', 'E-Commerce', 'SMB'],
      imageUrl: attImage,
    },
    {
      slug: 'amazon-middle-mile',
      title: 'Amazon Middle Mile Route Planning',
      category: 'Service Design & Blueprint',
      description: 'Designing a service blueprint and route planning experience for Amazon\'s Middle Mile Supply Chain optimizing logistics workflows and operational efficiency across fulfillment centers.',
      tags: ['Service Design', 'Enterprise', 'Supply Chain'],
      imageUrl: amazonImage,
    },
    {
      slug: 'soundtouch',
      title: 'SoundTouch',
      category: 'personal project & vibe-coding',
      description: 'Designing a spatial, gesture-based interface for making music anywhere exploring how natural hand movements can become an intuitive tool for musical expression.',
      tags: ['Spatial Design', 'Gesture Interaction', 'Music Technology'],
      imageUrl: 'https://images.unsplash.com/photo-1738168505817-e8ddb27bbd85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtdXNpYyUyMHRlY2hub2xvZ3klMjBkaWdpdGFsJTIwd2F2ZWZvcm0lMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3NjAxMTkzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const freelanceProjects = [
    {
      slug: 'glow-up-ritual',
      title: 'Glow Up Ritual',
      category: 'E-Commerce & Community',
      description: 'An e-commerce beauty marketplace built on championing emerging beauty brands. A vibrant hub connecting makeup artists, beauty enthusiasts, and indie brands, bringing the beauty community closer together.',
      tags: ['E-Commerce', 'Community', 'Beauty Tech'],
      imageUrl: 'https://images.unsplash.com/photo-1654973433534-1238e06f6b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBtYWtldXAlMjBjb3NtZXRpY3MlMjBsdXh0cnklMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk5ODEzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      slug: 'my-year-bingo',
      title: 'My Year: Bingo Board',
      category: 'Gamification & Goals',
      description: 'A gamified goal-setting experience that transforms New Year\'s resolutions into curated, aesthetic bingo boards. Making personal growth feel achievable, visual, and fun through playful interaction design.',
      tags: ['Gamification', 'Goal Setting', 'Visual Design'],
      imageUrl: 'https://images.unsplash.com/photo-1600173845923-ad1412bfab75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW5nbyUyMGdhbWUlMjBjb2xvcmZ1bCUyMGdvYWxzJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzY5OTgxMzc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const [showMore, setShowMore] = useState(false);
  const [showFreelanceMore, setShowFreelanceMore] = useState(false);

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          className="mb-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <InteractiveHero />
        </motion.div>

        {/* Selected Work Section */}
        <div className="mb-32" data-section="selected-work">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16 relative"
          >
            <h2 className="font-heading text-4xl mb-4">
              Selected Work
            </h2>
            
            {/* Why This Work Statement - Collapsible */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8 rounded-2xl backdrop-blur-sm overflow-hidden cursor-pointer"
              style={{
                background: 'var(--glass-background)',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(var(--background), var(--background)), linear-gradient(135deg, var(--crimson), var(--sunset-orange), var(--amber))',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
              onClick={() => setShowMore(!showMore)}
            >
              {/* Header - Always Visible */}
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-3">
                  <Sparkles 
                    className="w-5 h-5 flex-shrink-0" 
                    style={{ color: 'var(--crimson)' }}
                  />
                  <span className="font-body text-sm font-light text-muted-foreground">
                    Why I selected this work
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: showMore ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  <ChevronDown 
                    className="w-5 h-5" 
                    style={{ color: 'var(--crimson)' }}
                  />
                </motion.div>
              </div>

              {/* Collapsible Content */}
              <motion.div
                initial={false}
                animate={{
                  height: showMore ? 'auto' : 0,
                  opacity: showMore ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="pl-8">
                    <p className="font-body text-base leading-relaxed text-foreground/90 mb-2">The projects below represent defining moments where I learned to translate complex systems, workflows, and user needs into clear, intuitive experiences.</p>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground font-light">
                      Each showcases my evolution as a designer who bridges strategic thinking with visual craft, always keeping the human experience at the center.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {works.map((work, index) => (
              <WorkCard key={work.slug} {...work} index={index} />
            ))}
          </div>

          {/* Show More Button - removed */}
        </div>

        {/* Freelance Work Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16 relative"
          >
            <h2 className="font-heading text-4xl mb-4">
              Freelance Work
            </h2>
            
            {/* Why This Work Statement - Collapsible */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8 rounded-2xl backdrop-blur-sm overflow-hidden cursor-pointer"
              style={{
                background: 'var(--glass-background)',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(var(--background), var(--background)), linear-gradient(135deg, var(--crimson), var(--sunset-orange), var(--amber))',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
              onClick={() => setShowFreelanceMore(!showFreelanceMore)}
            >
              {/* Header - Always Visible */}
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-3">
                  <Sparkles 
                    className="w-5 h-5 flex-shrink-0" 
                    style={{ color: 'var(--crimson)' }}
                  />
                  <span className="font-body text-sm font-light text-muted-foreground">
                    The value of side projects
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: showFreelanceMore ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  <ChevronDown 
                    className="w-5 h-5" 
                    style={{ color: 'var(--crimson)' }}
                  />
                </motion.div>
              </div>

              {/* Collapsible Content */}
              <motion.div
                initial={false}
                animate={{
                  height: showFreelanceMore ? 'auto' : 0,
                  opacity: showFreelanceMore ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="pl-8">
                    <p className="font-body text-base leading-relaxed text-foreground/90 mb-2">One of the aspects of my work I value most is the opportunity to understand diverse communities, business challenges, and unique user needs. Through freelance and volunteer projects, I’ve been able to partner with communities both similar to and different from my own.</p>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground font-light">
                      Each project taught me something new about empathy, adaptability, and the importance of designing solutions that feel personal and meaningful to the people who use them every day.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <FreelanceCarousel />
        </div>
      </div>
    </div>
  );
}